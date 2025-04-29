function HAI(a,b) {
  console.log(`${a},${b},${this.name}`);
}

let person = {
  name: "Shiva",
};

let fun = HAI.bind(person, "anji");
fun("kilo")



// console.log(isNaN("a"))