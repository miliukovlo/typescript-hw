  //---------------------------------------------------------------------------------  
  //Задание 5: Работа с Indexed Access Types и Mapped Types
  //Цель: Создать утилиты для работы с объектами и их ключами.
  
  // Определите интерфейс для пользователя
  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  const someUser : User = {
    id: 1,
    name: 'Some name',
    email: 'pochta@pochta.com',
    age: 25
  }
  // Используйте Indexed Access Types для получения типа поля name из User
  type UserNameType = User["name"]// Заполните тип
  
  // Создайте Mapped Type, который преобразует все поля интерфейса User в boolean. Можно воспользовать конструкцией Key in keyof 
  type UserFieldsToBoolean = {
    [property in keyof User]: boolean
  }
  
  // Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
  function getUserFieldType<K extends keyof User>( key?: K ){
    // Верните тип ключа
    return  key ? typeof someUser[key] : someUser 
  }
  
  // Используйте эту функцию для получения типа поля 'age' и 'name'
  const ageType = getUserFieldType('age');
  const nameType = getUserFieldType('name');
  //---------------------------------------------------------------------------------
  