interface RangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  const rangeReport = {};
  let sum = 0;
  const rangeArray = [];
  const odds = [];
  const evens = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
    sum += i;
    if (i % 2 !== 0) {
      odds.push(i);
    } else {
      evens.push(i);
    }
  }
  rangeReport.total = sum;
  rangeReport.odds = odds;
  rangeReport.evens = evens;
  rangeReport.range = rangeArray;
  rangeReport.average = sum / rangeArray.length;
  return rangeReport;
}
