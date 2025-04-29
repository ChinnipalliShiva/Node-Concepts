function HAI(name,name2){
console.log(`hai ${this.name} I'm ${name} and ${name2}`)
}

let person = {
    name:"Shiva",
    age:24
}

HAI.call(person,"Arjun","jai")