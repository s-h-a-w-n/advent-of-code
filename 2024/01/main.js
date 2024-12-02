#!/usr/bin/env node

const fs = require('fs');
const { get } = require('http');
const Papa = require('papaparse');

const inputFile = "./input1.txt";

const leftList = [];
const rightList = [];
let result1 = 0;
let result2 = 0;

// Parse the file
function readFile(file) {
  const data = fs.readFileSync(file, 'utf8');
  const rows = data.split('\n').filter((line) => line.trim() !== '');
  rows.forEach((row) => {
    const elements = row.split(' ').filter((el) => el.trim() !== '');
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];
    leftList.push(firstElement);
    rightList.push(lastElement);
  });
}

// Get the difference between the two lists
function getListDifference() {
    return Math.abs(leftList.length - rightList.length);
}

// Do the work
console.log('Reading file: ', inputFile);
readFile(inputFile);
if (getListDifference() > 0) {
    console.log('Lists are not of same size');
    process.exit(1);
} else {
    console.log(`Lists are of same size [${leftList.length}]`);
}

// Sort the lists
sortedLeftList = leftList.sort();
sortedRightList = rightList.sort();

// Calculate the absolute difference; ie - Part 1
for (let i = 0; i < leftList.length; i++) {
    result1 += Math.abs(parseInt(sortedLeftList[i]) - parseInt(sortedRightList[i]));
}

// Create a frequency map of the right list, ie - Part 2
const frequencyMap = rightList.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

// total = (num * frequencyMap[num]) + total
for (let i = 0; i < leftList.length; i++) {
    const num = parseInt(sortedLeftList[i]);
    result2 += num * frequencyMap[num] || 0;
}

console.log(`Part 1, Absolute Difference: ${result1}`);
console.log(`Part 2, Frequency Total: ${result2}`);
