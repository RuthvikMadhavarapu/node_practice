console.log("Node Practice");
console.log("Let's start praticing node");
console.log("Node Version : " + process.version);
console.log("Running on : " + process.platform);
let name = process.argv[2] ?? "Stranger";
console.log(`Hello ${name}, Welcome to Node.js`);
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2] ?? "Stranger");


import multiplycation, { add, PI } from "./math.js";
console.log(add(1, 2));
console.log(multiplycation(2, 2));
console.log(PI);

import{ greet, farewell } from "./greet.js";
console.log(greet("Mikey"));
console.log(farewell("Mikey"));

import path from "node:path";
import { fileURLToPath } from "node:url";

let ___filename = fileURLToPath(import.meta.url);
let ___dirname = path.dirname(___filename);
console.log(___dirname);
console.log("Live reload");