class Employee {
  private _salary: number;

  constructor(initialSalary: number) {
    this._salary = initialSalary;
  }

  setSalary(newSalary: number): void {
    if (newSalary >= 0) {
      this._salary = newSalary;
    } else {
      throw new Error("Invalid salary amount. Salary cannot be negative.");
    }
  }

  getSalary(): number {
    return this._salary;
  }
}

// Usage
const employee = new Employee(50000);
employee.setSalary(55000);
console.log(`The employee's salary is: ${employee.getSalary()} USD.`);
