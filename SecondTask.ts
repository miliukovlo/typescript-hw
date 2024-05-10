  //---------------------------------------------------------------------------------
  // Задание 2: Расширенное использование Generics
  // Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.
  
  // Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
  interface ResponseOfTask<T> {
    data: T;
    status: number;
  }
  
  // Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
  function createResponse<T>(data: T, status: number) : ResponseOfTask<T> {
    const response: ResponseOfTask<T> = {
      data: data,
      status: status,
    }
    return response
    // Реализуйте создание и возврат объекта Response
  }
  
  // Используйте функцию createResponse для создания ответа с массивом чисел
  const numericResponse =  createResponse([5,4,3,2,1], 2)// Заполните вызов функции
  
  // Используйте функцию createResponse для создания ответа с объектом пользователя (User)
  const userResponse = createResponse({
    id: 1,
    name: 'Имя',
    email: 'example@pochta.com'
  }, 1) // Заполните вызов функции
  //---------------------------------------------------------------------------------