"use strict";
function getRangeReport(start, end) {
    const report = {};
    let sum = 0;
    const rangeArray = [];
    const odds = [];
    const evens = [];
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
        sum += i;
        if (i % 2 !== 0) {
            odds.push(i);
        }
        else {
            evens.push(i);
        }
    }
    report.total = sum;
    report.odds = odds;
    report.evens = evens;
    report.range = rangeArray;
    report.average = sum / rangeArray.length;
    return report;
}
