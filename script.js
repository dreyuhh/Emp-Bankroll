// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  
  let employeesArray =[]

  let addEmployee = true;
  while (addEmployee){
    let FName = prompt("Please enter first name", "First Name");
    let LName = prompt("Please eneter last name", "last name");
    let Salary = parseInt(prompt("Please enter Salary", "salary"));
    let employeeInfo = {
      firstName: FName,
      lastName: LName,
      salary: Salary
    }
    // TODO: Get user input to create and return an array of employee objects

    employeesArray.push(employeeInfo)
    let confirmAddEmployee = confirm('Would you like to add another employee?');
    if (! confirmAddEmployee){
      addEmployee = false
    }
   }

  return employeesArray;

}
  

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sum = 0;
  
  employeesArray.forEach(employeeInfo => {
    sum += employeeInfo.salary;
  });

  // TODO: Calculate and display the average salary
  const average = sum / employeesArray.length
  console.log(`average: $${average.toFixed(2)} for ${employeesArray.length} employees`)
 
};
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const random = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[random];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  // TODO: Select and display a random employee
}
//
 
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
