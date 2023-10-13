import {PrismaClient} from "@prisma/client";
import {ParameterTypesEnum} from "./types/api/api.types";


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
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fgarlyn.ru%2Fwp-content%2Fuploads%2F2021%2F03%2Fl1000_left-viewmilk_bez-zasvetki-mini.png&tbnid=fOUthIaJI5D1eM&vet=12ahUKEwiMx7fm5vOBAxUVExAIHTytCpMQ94IIKAN6BAgBEHk..i&imgrefurl=https%3A%2F%2Fgarlyn.ru%2Fproduct%2Fgarlyn-l1000%2F&docid=MbF3Mm7OlTO8fM&w=1000&h=1000&q=%D0%BA%D0%BE%D1%84%D0%B5-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0&ved=2ahUKEwiMx7fm5vOBAxUVExAIHTytCpMQ94IIKAN6BAgBEHk',
      },
      {
        name: 'Большой',
        value: 'big',
        code: ParameterTypesEnum.size,
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcoffee-tea.ru%2Fupload%2Fiblock%2Fc74%2Fc742446d28b8288cbc181000717e310d.jpg&tbnid=M2IHyKCZXi3LHM&vet=12ahUKEwiMx7fm5vOBAxUVExAIHTytCpMQMygEegQIARB8..i&imgrefurl=https%3A%2F%2Fcoffee-tea.ru%2Fcatalog%2Fequipment%2Fkofemashina-wmf-espresso%2F&docid=r71wCFHd94d47M&w=360&h=270&q=%D0%BA%D0%BE%D1%84%D0%B5-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0&ved=2ahUKEwiMx7fm5vOBAxUVExAIHTytCpMQMygEegQIARB8',
      }
    ]
  })

  await db.$disconnect();
}
