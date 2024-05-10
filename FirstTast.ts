//---------------------------------------------------------------------------------
//Разминка
// Определите интерфейс для пользователя
interface User {
    id: number;
    name: string;
    email: string;
    // Добавьте свойство email типа string
  }
  
  // Определите интерфейс для активности пользователя
  interface Activity {
    userId: number;
    activity: string;
    timestamp: Date;
    // Добавьте свойство timestamp типа Date
  }
  
  // Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
  async function fetchData <T> (url: string) : Promise<T> {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (response.ok) {
                resolve(response.json())
            } else {
                reject(new Error('Ошибка получения данных'))
            }
        })
        .catch(e => {
            reject(new Error(e))
        })
    })
  }
  
  // Используйте Utility Types для создания Partial и Readonly версий User и Activity
  type PartialUser = Partial<User>// Заполните тип
  type ReadonlyActivity = Readonly<Activity>// Заполните тип
  
  //Типизируйте функцию. userId - число
  function getUserActivities<T>(userId : number) : Promise<T> {
    return fetchData(`/api/activities/${userId}`);
  }
  // Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
  type ActivitiesReturnType = ReturnType<typeof getUserActivities>// Заполните тип
  
  // Используйте extends в условных типах для создания типа Permissions
  type AdminPermissions = { canBanUser: boolean };
  type BasicPermissions = { canEditProfile: boolean };
  // Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
    type Permission<T> = T extends "admin" ? AdminPermissions : BasicPermissions  
  ///ЧАСТЬ 2.
  
  // Определите Type Alias для Union типа String или Number
  type StringOrNumber = string | number // Заполните тип
  
  // Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
  function logMessage(message: StringOrNumber): void {
    console.log(message)
  }
  
  // Реализуйте функцию throwError, которая никогда не возвращает управление (never)
  function throwError(errorMsg: string): never {
    throw new Error(errorMsg)
  }
  
  // Реализуйте Type Guard для проверки, является ли значение строкой
  function isString(value: StringOrNumber): value is string {
    return typeof value === 'string'
  }
  
  // Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
  function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== 'number') {
      throw new Error('value не число')
    } 
  }
  
  // Завершите функцию processValue, используя isString и assertIsNumber
  function processValue(value: StringOrNumber) {
    if (isString(value)) {
      console.log('Value - строка: ' + value)
    } else {
      assertIsNumber(value)
      console.log('Value - число: ' + value)
    }
    
  }
  
  //---------------------------------------------------------------------------------