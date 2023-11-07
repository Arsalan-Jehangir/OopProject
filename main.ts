import inquirer from "inquirer"

class Student {
    name: string
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

const programStart = async (persons: Person)=>{
    do{
        console.log("Asalamoalikum PIAIC.")
    
    const ans = await inquirer.prompt({
        type: "list",
        message: "Which Person Would You Have To Talk.",
        name: "select",
        choices: ["With College Staff", "With College Students"]   
    })

    if(ans.select == "With College Staff"){
        const ans = await inquirer.prompt({
            type: "input", 
            message: "Which College Staff Would U Like To Chat.",
            name: "College Staff",
        })
    } 
    if(ans.select == "With College Students"){
        const ans = await inquirer.prompt({
            type: "input",
            message: "Which Student Of Your College Would U Like To Chat.",
            name: "student",
        });
    
    const student = persons.students.find(val => val.name ==ans.student)

    if(!student){
        const name = new Student(ans.student)
        persons.addStudent(name)
        console.log(`Asalamoalikum I Am ${name.name}, and I Am Fine Alhumdulilah.`);
        console.log(persons.students)
    }

    if(student){
        console.log(`Asalamoalikum I Am ${student.name}, and I Am Fine Alhumdulilah...`);
        console.log(persons.students)
    }}} 
    while(true)
};

programStart(persons)