  //---------------------------------------------------------------------------------
  // Задание 7: Работа с обобщённой функцией поиска в массиве
  // Цель: Создать функцию, которая может искать элементы в массиве по разным критериям, включая составные типы и условия с использованием нескольких параметров в Generics.
  interface UserTask {
    id: number;
    name: string;
    age: number;
  }
  
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface Book {
    isbn: string;
    title: string;
    author: string;
  }
  
  // Разберитесь с типизацией функции и поймите как она работает.
  // Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?

  //Можно добавить проверку наличия ключа в массиве

  // Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?

  // Можно, для этого нужно чтобы передавался массив объектов c Utility Types Partial, чтобы ключи не были обязательными 
  function findInArray<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => item[key] === value);
  }

  const findInArrayImproved = <T, K extends keyof T>(items: T[], key: K, value: T[K]):T | undefined => {
    return items.find(item => item[key] !== undefined && item[key] === value);
  }
  
  const findInArrayMultipleKeys = <T>(items: T[], searchCriteria: Partial<T>): T | undefined => {
    return items.find(item =>
      Object.keys(searchCriteria).every(key => item[key as keyof T] === searchCriteria[key as keyof T])
    );
  }
  
  

  // Данные для тестирования функции
  const users: UserTask[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
  ];
  
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
  ];
  
  const books: Book[] = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
  ];
  
  // 1. Найдите пользователя по имени "Alice".
  const foundUser = findInArray(users, 'name', 'Alice')
  // 2. Найдите продукт с ценой 500.
  const foundProduct = findInArray(products, "price", 500);
  // 3. Найдите книгу по автору "Another One".
  const foundBook = findInArray(books, 'author', "Another One");

  const foundUserMultipleKeys = findInArrayMultipleKeys(users, { name: "Alice", age: 25 });
  //---------------------------------------------------------------------------------