[模板字量template literals][1]
=========================

模板字面量(Template literal) -> ES6中称为模板字符串(template strings)

模板字符串使用反引号(``)来代替字符串中的双引号和单引号。其间可以包含占位符*${expression}*。

### 多行字符串Multi-line stringss

```
console.log(`第一行字符串文本
第二行字符串文本`)；

// 输出内容
// 第一行字符串文本
// 第二行字符串文本
```

### 表达式插补express interpolation

```
const a=5, b=10;
console.log(`${a} + ${b} = ${a+b}`);

求和 5 + 10 = 15 // 输出

```

### 带标签的模板字符串Tagged template literals

```js
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings.raw[0])
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(strings[2]); // ""
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"
```




[1]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings