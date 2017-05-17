const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Hit here to debug", () => {
  for (var i = 0; i < 1; i++) {

    const babel = require("./packages/babel-core");
    const code = `
    let a
    if (true) [a] = () => 1;
    `;

    debugger
    const res = babel.transform(code, {
      plugins: [
        "babel-plugin-transform-es2015-arrow-functions",
        "babel-plugin-transform-es2015-destructuring"
      ]
    });

    console.log(res.code);

  }
});
//
// const babel = require("./packages/babel-core");
// const code = `
// let a
// if (true) [a] = [1].map(()=>123);
// `;
//
// const res = babel.transform(code, {
//   plugins: [
//     "babel-plugin-transform-es2015-arrow-functions",
//     "babel-plugin-transform-es2015-destructuring"
//   ]
// });
//
// console.log(res.code);
