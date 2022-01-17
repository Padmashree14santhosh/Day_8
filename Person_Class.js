class Person{
constructor(name,age,college_name,passed_out_year){
    this.name=name;
    this.age=age;
    this.college_name=college_name;
    this.passed_out_year=passed_out_year;
}

getDetails(){
    return `
    name=${this.name}
    age=${this.age}
    college=${this.college_name}
    passed_out_year=${this.passed_out_year}`;
}
}

let obj1=new Person();
obj1.name="padmashree";
obj1.age=25;
obj1.college_name="Siddaganga Institute of Technology"
obj1.passed_out_year=2021;

console.log(obj1.getDetails());
