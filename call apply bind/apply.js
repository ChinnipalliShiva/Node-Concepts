function HAI(a,b,c){
    console.log(`${a},${b},${c},${this.name}`)
}

let person ={
    name:"Shiva"
}

HAI.apply(person,["anji","chinni"])