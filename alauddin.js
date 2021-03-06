"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'optimalPoint' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY magic
 *  2. INTEGER_ARRAY dist
 */

function optimalPoint(magic, dist) {
  // Write your code here
  var a = magic.reduce((a, b) => a + b, 0);
  var b = dist.reduce((a, b) => a + b, 0);
  if (a < b) {
    return -1;
  }
  var n = magic.length;
  var total_val = 0;
  var start = 0;
  for (var i = 0; i < n; i++) {
    if (total_val < 0) {
      start = i;
      total_val = 0;
    }
    total_val += magic[i] - dist[i];
  }
  return start;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const magicCount = parseInt(readLine().trim(), 10);

  let magic = [];

  for (let i = 0; i < magicCount; i++) {
    const magicItem = parseInt(readLine().trim(), 10);
    magic.push(magicItem);
  }

  const distCount = parseInt(readLine().trim(), 10);

  let dist = [];

  for (let i = 0; i < distCount; i++) {
    const distItem = parseInt(readLine().trim(), 10);
    dist.push(distItem);
  }

  const result = optimalPoint(magic, dist);

  ws.write(result + "\n");

  ws.end();
}
