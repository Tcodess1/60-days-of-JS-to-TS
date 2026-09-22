const values = [
  0,
  1,
  -1,
  "",
  "hello",
  "0",
  null,
  undefined,
  NaN,
  [],
  {},
];

for (const v of values) {
  if (v) {
    console.log(v, "is truthy");
  } else {
    console.log(v, "is falsy");
  }
}

console.log(true && false);
console.log(true || false);
console.log(!true);

console.log("hello" && "world");
console.log("" || "fallback");
console.log(null ?? "default");
console.log(0 || "default");
console.log(0 ?? "default");



const age = 20;

const status = age >= 18 ? "adult" : "minor";

console.log(status);