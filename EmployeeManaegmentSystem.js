class Employee {
    constructor(id, firstname, lastname, email, phoneNo, age, address, gender) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNo = phoneNo;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }

    about() {
        return `${this.id}, ${this.firstname}, ${this.lastname}, ${this.email}, ${this.phoneNo}, ${this.age}, ${this.address}, ${this.gender}`;
    }
}

const employees = [];

function registerEmployee() {
    const id = prompt('Enter Your ID');
    const firstname = prompt('Enter Your First Name');
    const lastname = prompt('Enter Your Last Name');
    const email = prompt('Enter Your Email');
    const phoneNo = prompt('Enter Your Phone No');
    const age = prompt('Enter Your Age');
    const address = prompt('Enter Your Address');
    const gender = prompt('Enter Your Gender');

    const person = new Employee(id, firstname, lastname, email, phoneNo, age, address, gender);

    console.log("Your Data is stored");
    console.log(person.about());
    employees.push(person);
}

function updateEmployee(person) {
    let option = prompt('What do you want to update?\n1-First Name\n2-Last Name\n3-Email\n4-Phone No\n5-Age\n6-Address\n7-Gender\nE-Exit');
    switch (option) {
        case '1':
            person.firstname = prompt('Enter the new FirstName');
            console.log('Your Changes are Recorded');
            break;
        case '2':
            person.lastname = prompt('Enter the new LastName');
            console.log('Your Changes are Recorded');
            break;
        case '3':
            person.email = prompt('Enter Your new Email');
            console.log('Your Changes are Recorded');
            break;
        case '4':
            person.phoneNo = prompt('Enter Your new Phone NO');
            console.log('Your Changes are Recorded');
            break;
        case '5':
            person.age = prompt('Enter Your new Age');
            console.log('Your Changes are Recorded');
            break;
        case '6':
            person.address = prompt('Enter Your new Adress');
            console.log('Your Changes are Recorded');
            break;
        case '7':
            person.gender = prompt('Enter Your Gender');
            console.log('Your Changes are Recorded');
            break;
        default:
            console.log('Please Enter a valid Option');
    }
}

function deleteEmployee() {
    let idToDelete = prompt("Enter the ID of the employee you want to delete");
    const indexToDelete = employees.findIndex(employee => employee.id === idToDelete);

    if (indexToDelete !== -1) {
        employees.splice(indexToDelete, 1);
        console.log(`Employee with ID ${idToDelete} has been deleted.`);
    } else {
        console.log(`Employee with ID ${idToDelete} not found.`);
    }
}

function sortEmployee() {
    let option = prompt('How do you want to Sort:\n1-name\n2-age\n3-gender');

    switch (option) {
        case '1':
            // Sort employees by name (first name)
            employees.sort((a, b) => {
                // Compare employees by their first names
                if (a.firstname < b.firstname) {
                    return -1;
                } else if (a.firstname > b.firstname) {
                    return 1;
                } else {
                    // If first names are the same, you can sort by last name or other criteria
                    return 0;
                }
            });
            break;

        case '2':
            // Sort employees by age
            employees.sort((a, b) => a.age - b.age);
            break;

        case '3':
            // Sort employees by gender
            employees.sort((a, b) => {
                // Compare employees by their gender
                if (a.gender < b.gender) {
                    return -1;
                } else if (a.gender > b.gender) {
                    return 1;
                } else {
                    // If genders are the same, you can sort by name, age, or other criteria
                    return 0;
                }
            });
            break;

        default:
            console.log('Invalid option. Please try again.');
            break;
    }

    // Display the sorted list of employees
    employees.forEach(employee => console.log(employee.about()));
}


function searchEmployee() {
    while (true) {   //this is how we can put user to inside a certain function.. we can use that in other function as well 
        let option = prompt('How do you want to search? Please specify:\n1-ID\n2-First Name\n3-Last Name\n4-Phone No\n5-Age\n6-Address\n7-Gender\n8-Email\nE-Exit');

        if (option === 'E' || option === 'e') {
            console.log('Thank you for using the system. Have a great day!');
            break;
        }

        switch (option) {
            case '1':
                const id = prompt('Enter the employee ID');
                const selectedEmployee = employees.find(employee => employee.id === id);
                if (selectedEmployee) {
                    console.log(selectedEmployee.about());
                } else {
                    console.log('Employee not found.');
                }
                break;

            case '2':
                searchByField('first name', 'firstname');
                break;

            case '3':
                searchByField('last name', 'lastname');
                break;

            case '4':
                searchByField('phone number', 'phoneNo');
                break;

            case '5':
                searchByField('age', 'age');
                break;

            case '6':
                searchByField('address', 'address');
                break;

            case '7':
                searchByField('gender', 'gender');
                break;

            case '8':
                searchByField('email', 'email');
                break;

            default:
                console.log('Invalid option. Please try again.');
                break;
        }
    }
}

function searchByField(fieldLabel, field) {
    const searchTerm = prompt(`Enter the ${fieldLabel} you want to search..!`);
    const foundEmployees = employees.filter(person => person[field] === searchTerm);

    if (foundEmployees.length > 0) {
        console.log(`Employee(s) found with ${fieldLabel}: ${searchTerm}`);
        foundEmployees.forEach(employee => console.log(employee.about()));
    } else {
        console.log(`Sorry, no employee(s) with the ${fieldLabel} ${searchTerm} were found.`);
    }
}


//Main Code Start...
console.log('Welcome to Employee Management System');
while (true) {
    console.log('Press R for Registration of an employee');
    console.log('Press I for Information of an employee');
    console.log('Press U for Updating an employee');
    console.log('Press D for Deleting an employee');
    console.log('Press S for Search');
    console.log('Press E for Exit');

    let option = prompt("Enter the option").toUpperCase();

    //Registration Block  
    if (option === 'R') {
        registerEmployee();
    }
    //Delete Block    
    else if (option === 'D') {
        deleteEmployee();
    }
    //Search Block 
    else if (option === 'S') {
        searchEmployee()
    }
    //Exit Block    
    else if (option === 'E') {
        console.log('Thank You for using the system. Have A Great Day!');
        break;
    }
    //Sort Block
    else if (option === 'H') {
        sortEmployee()
    }
    //Information Block
    else if (option === 'I') {
        const id = prompt('Enter the employee ID');
        const selectedEmployee = employees.find(employee => employee.id === id);
        if (selectedEmployee) {
            console.log(selectedEmployee.about());
        } else {
            console.log('Employee not found.');
        }
    }
    //Update Block
    else if (option === 'U') {
        const id = prompt('Enter the employee ID you want to update');
        const selectedEmployee = employees.find(employee => employee.id === id);
        if (selectedEmployee) {
            updateEmployee(selectedEmployee);
        } else {
            console.log('Employee not found.');
        }
    }
    //Defalut Block
    else {
        console.log('Please Enter a valid Option. Please Try Again');
    }
}


