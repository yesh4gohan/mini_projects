class Employee {
    constructor(name,company,salary){
        this.name = name || "";
        this.company = company || "";
        this.salary = salary || 5000;
        this.displayIncreasedSalary = function(){
            this.increaseSalary();
            return this.salary;
        }
    }

    increaseSalary = function(){
        this.salary += 1000;
    }
}

const emp1 = new Employee("yesh","dummy",1000);
emp1.increaseSalary()
console.log(emp1.displayIncreasedSalary())