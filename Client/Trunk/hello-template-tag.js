
// multi-lines strings
console.log(`第一行字符串文本
第二行字符串文本`)

// express interpolation
const a=5, b=10;
console.log(`求和 ${a} + ${b} = ${a+b}`);

// Tagged template literals

function tag(strings, ...values) {
  console.log(strings.raw)
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(strings[2]); // ""
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;

// 

const INT = (strings,...variables) => {
  console.log(strings)
  console.log(`Igoring ${variables}`);
  return strings.join('intersting');
}

const adj = 'new';
const abc = 123;
console.log(INT `JavaScript has ${adj} features ${abc} abc`);