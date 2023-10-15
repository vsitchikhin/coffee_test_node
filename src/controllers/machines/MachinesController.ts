import { IResponse, ParameterDto, CoffeeMachineDto } from "types/api/api.types";
import {PrismaClient} from "@prisma/client";
import {useErrorResponse, useResponseBuilder} from "../../utils/response.utils";

export default function useMachinesController(db: PrismaClient) {
  async function getAllRegisteredMachines() {
    await db.$connect();
    let response: IResponse<CoffeeMachineDto[] | null>;

    try {
      const coffeeMachinesResponse = <CoffeeMachineDto[]>await db.coffeeMachines.findMany({
        include: {
          size: true,
          qty: true,
        }
      })

      response = useResponseBuilder<CoffeeMachineDto[]>(coffeeMachinesResponse);
    } catch(e) {
      response = useErrorResponse(e);
    }

    await db.$disconnect();
    return response;
  }

  async function getAllParameters(): Promise<IResponse<ParameterDto[] | null>> {
    await db.$connect();
    let response: IResponse<ParameterDto[] | null>;

    try {
      const parametersResponse = <ParameterDto[]>[...await db.sizes.findMany(), ...await db.drinksQty.findMany()]

      await db.$disconnect();

      response = useResponseBuilder<ParameterDto[]>(parametersResponse);
    } catch(e) {
      response = useErrorResponse(e);
    }

    await db.$disconnect();
    return response;
  }

  async function deleteMachine(id: string): Promise<IResponse<boolean | null>> {
    const machineId = parseInt(id);

    await db.$connect();
    let response: IResponse<boolean | null>;

    try {
      await db.coffeeMachines.delete({
        where: {
          id: machineId,
        }
      })

      response = useResponseBuilder<boolean>(true);
    } catch(e) {
      response = useErrorResponse(e);
    }

    await db.$disconnect();
    return response;
  }

  async function patchMachine(id: string, data: CoffeeMachineDto): Promise<IResponse<boolean | null>>{
    await db.$connect();
    let response: IResponse<boolean | null>;

    try {
      db.coffeeMachines.update({
        where: {
          id: data.id,
        },
        data: {
          count: data.count,
        }
      })

      response = useResponseBuilder<boolean>(true);
    } catch(e) {
      response = useErrorResponse(e);
    }

    await db.$disconnect();
    return response;
  }

  async function addMachinesCount(id: string, data: CoffeeMachineDto, existedCount: number): Promise<IResponse<boolean | null>> {
    const machineId = parseInt(id);
    await db.$connect();
    let result: IResponse<boolean | null>;

    try {
      await db.coffeeMachines.update({
        where: {
          id: machineId,
        },
        data: {
          count: existedCount + data.count,
        }
      })

      result = useResponseBuilder(true)
    } catch(e) {
      result = useErrorResponse(e)
    }

    await db.coffeeMachines;
    return result;
  }

  async function addMachineToBucket(data: CoffeeMachineDto): Promise<IResponse<boolean | null>> {
    await db.$connect();
    let response: IResponse<boolean | null>;

    try {
      const existedMachine = <CoffeeMachineDto[] | null | undefined>await db.$queryRaw`select * from CoffeeMachines where drinksQtyParameterId=${data.qty.id} and sizeParameterId=${data.size.id}`;

      // Если машина с такими параметрами уже существует, увеличиваем
      if (existedMachine && existedMachine.length) {
        await db.$disconnect();
        return await addMachinesCount(existedMachine[0].id.toString(), data, existedMachine[0].count);
      }

      await db.coffeeMachines.create({
        data: {
          name: data.name,
          count: data.count,
          sizeParameterId: data.size.id,
          drinksQtyParameterId: data.qty.id,
        }
      });

      response = useResponseBuilder(true);
    } catch(e) {
      response = useErrorResponse(e);
    }

    await db.$disconnect();
    return response;
  }

  return {
    getAllRegisteredMachines,
    getAllParameters,
    deleteMachine,
    patchMachine,
    addMachineToBucket,
  }
}
