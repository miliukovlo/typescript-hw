//---------------------------------------------------------------------------------  
  // Задание 4: Использование Utility Types для работы с интерфейсами
  // Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.
  
  // Определите интерфейс Employee
  interface Employee {
    id: number;
    name: string;
    department: string;
    email: string;
  }
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
  type PartialEmployee = Partial<Employee>// Заполните тип
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
  type ReadonlyEmployee = Readonly<Employee>// Заполните тип
  
  // Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
  function printEmployeeInfo(employee: PartialEmployee): void {
    // Реализуйте логику функции, обрабатывая случай отсутствующих свойств
    console.log(`Информация о работнике: 
      ID: ${employee.id !== undefined ? employee.id : 'информация отсутствует'},
      Имя: ${employee.name !== undefined ? employee.name : 'информация отсутствует'}, 
      Департамент: ${employee.department !== undefined ? employee.department : 'информация отсутствует'}, 
      Электронная почта: ${employee.email !== undefined ? employee.email : 'информация отсутствует'}`)
  }
  //---------------------------------------------------------------------------------
  