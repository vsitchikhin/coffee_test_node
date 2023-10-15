import {PrismaClient} from "@prisma/client";
import {ParameterTypesEnum} from "../types/api/api.types";


/*
Функция, выполняющая посев данных
Для заполнения базы минимальными необходимыми данными для работы приложения,
достаточно выполнить запрос на url /machines/seed
*/
export async function seed(db: PrismaClient) {
  await db.$connect();

  await db.drinksQty.createMany({
    data: [
      {
        name: '6',
        value: '6',
        code: ParameterTypesEnum.qty,
      },
      {
        name: '8',
        value: '8',
        code: ParameterTypesEnum.qty,
      },
      {
        name: '12',
        value: '12',
        code: ParameterTypesEnum.qty,
      }
    ]
  });


  await db.sizes.createMany({
    data: [
      {
        name: 'Стандартный',
        value: 'standart',
        code: ParameterTypesEnum.size,
        image: 'https://garlyn.ru/wp-content/uploads/2021/03/l1000_left-viewmilk_bez-zasvetki-mini.png',
      },
      {
        name: 'Большой',
        value: 'big',
        code: ParameterTypesEnum.size,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FEaLZ87nWcHubseldqbWkn4lB6N7bijWMx43ddEqoEa4h5wBNNgsuF43-X25EIuSz9k&usqp=CAU',
      }
    ]
  })

  await db.$disconnect();
}
