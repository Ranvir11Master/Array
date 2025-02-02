// Array 

let marks = [90,80,70,60,50,40];
console.log(marks);
console.log(marks.length);

let supHero = ["Iron Man", "Hulk", "Spider Man", "Thor", "RDJ"];
//for loop
for (let i = 0; i < supHero.length; i++) {
  console.log(supHero[i])
}

let cities = ["Patna", "Goa", "sikim", "Bangalor", "Delhi", "Hydrabad"];
// for of loop (best for array)
console.log("Name of Cities: ");
for(let city of cities) {
  console.log(city.toUpperCase());
}

