#!/usr/bin/env node

const fs = require('fs');

const inputFile = "./input1.txt";
const minDiff = 1;
const maxDiff = 3;

let totalSafePart1 = 0;
let totalUnsafePart1 = 0;
let totalSafePart2 = 0;
let totalUnsafePart2 = 0;

function checkLevels(levels, minDiff = 1, maxDiff = 3) {
    if (levels.length < 2) {
        return false;
    }

    let direction = null;

    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1];
        const absDiff = Math.abs(diff);

        if (absDiff < minDiff || absDiff > maxDiff) {
            return false;
        }

        const currentDirection = diff > 0 ? 'up' : 'down';
        if (!direction) {
            direction = currentDirection;
        } else if (currentDirection !== direction) {
            return false;
        }
    }

    return true;
}

function checkWithDampener(report, minDiff = 1, maxDiff = 3) {
    const levels = report.split(' ').filter(Boolean).map(Number);

    if (checkLevels(levels, minDiff, maxDiff)) {
        return true;
    }

    for (let i = 0; i < levels.length; i++) {
        const newLevels = levels.slice(0, i).concat(levels.slice(i + 1));
        if (checkLevels(newLevels, minDiff, maxDiff)) {
            return true;
        }
    }

    return false;
}

function parseFile(file) {
    const data = fs.readFileSync(file, 'utf8');
    const reports = data.split('\n').filter((line) => line.trim() !== '');

    reports.forEach((report) => {
        if (checkLevels(report.split(' ').filter(Boolean).map(Number), minDiff, maxDiff)) {
            console.log(`Safe (Part 1): ${report}`);
            totalSafePart1++;
        } else {
            console.log(`Unsafe (Part 1): ${report}`);
            totalUnsafePart1++;
        }

        if (checkWithDampener(report, minDiff, maxDiff)) {
            console.log(`Safe (Part 2): ${report}`);
            totalSafePart2++;
        } else {
            console.log(`Unsafe (Part 2): ${report}`);
            totalUnsafePart2++;
        }
    });

    console.log(`\nPart 1 Summary:\nTotal Safe: ${totalSafePart1}\nTotal Unsafe: ${totalUnsafePart1}`);
    console.log(`\nPart 2 Summary:\nTotal Safe: ${totalSafePart2}\nTotal Unsafe: ${totalUnsafePart2}`);
}

parseFile(inputFile);
