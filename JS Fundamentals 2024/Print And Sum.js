function PrintAndSum(start, end) {
  let sum = 0;
  let allNum = ``;
    for (let curNum = start; curNum <= end; curNum++) {
        allNum += curNum + ` `;
        sum += curNum
        
    }
console.log(allNum);
console.log(`Sum: ${sum}`);
}
PrintAndSum(0, 26)