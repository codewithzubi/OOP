#! /usr/bin/env/node
import inquirer from "inquirer";


//class for student
class student{
    name:string

    
    constructor(name:string){
        this.name=name
    }
}

//class for person
class Person{
    students:student[]=[]
    addStudent(obj:student){
        this.students.push(obj)

 }
}
const persons= new Person()
//define a function to run the program.
const programStart= async (persons:Person)=>{
    while(true){
    console.log("Welcome");
    let user_answer = await inquirer.prompt(
        {
            name:"select",
            type:"list",
            message:"whom would you like to interact with?",
            choices:["staff room", "student", "exit"]
        }
    )
    if(user_answer.select == "staff room"){
         console.log("you are approaching the staff room, if you have any question ask freely.");
         
    }else if(user_answer.select == "student"){
        let ans = await inquirer.prompt(
            {
                name:"student",
                type:"input",
                message:"Enter the students name."
            }  
        )
        const studentName = persons.students.find(val => val.name == ans.student)
        if(!studentName){
            let name = new student(ans.student)
            persons.addStudent(name)
            console.log(`Hello its me ${name.name}`);
            console.log("Current Students list");
            console.log(persons.students);   
        }else{
            console.log(`Hello its me ${student.name}.`);
            console.log(`Already existing student list`);
            console.log(persons.students);
            
        }
    }else if(user_answer.select == "exit"){
    console.log(`Exiting the program..!`);
     process.exit()
        
    }
    }  
}
programStart(persons)