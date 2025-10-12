const power3 = a => { console.log(a ** 3) }
const add = (a, b) => { console.log(a + b) }
const subtract = (a, b) => { console.log(a - b) }
const toPower = a => { console.log(a * a, a ** 3, a ** 4) }
const findOdd = n => { for (let i = 0; i <= n; i++) (i % 2 == 1) ? console.log(i) : 0 }
const findEven = n => { for (let i = 0; i <= n; i++) (i % 2 == 0) ? console.log(i) : 0 }
const inkr = n => { console.log(n++, n--); }
const findDevider = n => { for (let i = 1; i <= n; i++) (n % i == 0) ? console.log(i) : 0 }



let persons = [
    {
        firstName: "Shoxruh",
        lastName: "Abdurimov",
        password: "shox22",
        age: 15,
        gender: "Male",
        isMarried: false,
        job: {
            salary: 30,
            status: "worker"
        }
    },
    {
        firstName: "Kamola",
        lastName: "Nikromova",
        password: "w3scho",
        age: 21,
        gender: "Famale",
        isMarried: true,
        job: {
            salary: 150,
            status: "Boss"
        }
    },
    {
        firstName: "Jasur",
        lastName: "Zarikov",
        password: "qwerty",
        age: 19,
        gender: "Male",
        isMarried: false,
        job: {
            salary: 200,
            status: "Worker"
        }
    },
    {
        firstName: "Nodir",
        lastName: "Sarvorov",
        password: "123456",
        age: 16,
        gender: "Male",
        isMarried: true,
        job: {
            salary: 80,
            status: "Worker"
        }
    },
    {
        firstName: "Avaz",
        lastName: "Pavlonov",
        password: "avazch",
        age: 40,
        gender: "Male",
        isMarried: true,
        job: {
            salary: 400,
            status: "Boss"
        }
    }
]
// for (let i = 0; i < persons.length; i++){
//     if (persons[i].job.salary >= 100)
//         console.log(persons[i].firstName)
// }


//                                                       if clause
// let admin = prompt("Whos there?", "admin")
// if (admin == "admin") {
//     let pas = prompt("Password: ", "TheMaster")
//     if (pas == "TheMaster") console.log("Welcome");
//     else if (pas == null) console.log("Canceled");
//     else console.log("Wrong password");
// }
// else if (admin == null) console.log("Canceled");
// else console.log("I dont know you");


// let name = prompt("Name")
// for (let i = 0; i < persons.length; i++) {
//     if (persons[i].firstName == name) {
//         let pas = prompt("Your password: ")
//         if (persons[i].password == pas) console.log("Welcoome " + persons[i].lastName + " " + persons[i].firstName + "!");
//         else if (pas == null) console.log("Canceled");
//         else console.log("Wrong password");
//     }
//     else if (name == null) console.log("Canceled");
//     else console.log("I dont know you");
// }