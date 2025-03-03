let classList = [
    {
        name: "James",
        age: 32,
        married: false,
        nationality: "Ghana"
    },
    {
        name: "Racy",
        age: 40,
        married: false,
        nationality: "Nigerian"
    },
    {
        name: "Blackbee",
        age: 35,
        married: false,
        nationality: "Nigerian"
    }
];

let ages = classList.map(person => person.age);
console.log(ages);

let names = classList.map(person => person.name);
console.log(names)

let totalAge = classList.reduce((sum,person) => sum+person.age,0);
let averageAge = totalAge / classList.length;
console.log(averageAge)


let oldestPerson = classList.filter(person=> person.age >35);
console.log(oldestPerson)

let checkNationality = classList.filter(person => person.nationality =="Nigerian")
console.log(checkNationality)

let minAge= classList.filter(person => person.age<35)
console.log(minAge)

function medianAge(classList) {
    
    let ages = classList.map(person => person.age).sort((a, b) => a - b);
    
    let mid = Math.floor(ages.length / 2); 

    
    if (ages.length % 2 === 0) {
       
        return (ages[mid - 1] + ages[mid]) / 2;
    } else {
        
        return ages[mid];
    }
}

console.log("Median Age:", medianAge(classList));
