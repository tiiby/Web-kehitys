let number, name;
number = 153;
name = "Anna";
console.log(number);
console.log(name);
number = -17;
name = "Pekka";
console.log(number);
console.log(name);

for (;;) {
  const name = prompt("Enter a name");
  if (name === "") {
    break;
  }
  console.log(name);
}