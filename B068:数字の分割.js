process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});

function sum(listNum) {
    return listNum.reduce((partialSum, a) => partialSum + a, 0);
}
reader.on('close', () => {
    const chocolateNum = lines[0].split(" ")
    const chocoH = parseInt(chocolateNum[0]);//リストは分けて渡す
  const chocoW = parseInt(chocolateNum[1]);//リストは分けて渡す
  
  let ans = ""
  let isNo = false;
  for(let i = 1; i < chocoH + 1; i++){
    const chocolateRow = lines[i].split(" ").map(item => parseInt(item));
    const dividedchoco = sum(chocolateRow) / 2;
        
        let result = ""
        let tmpA = 0
        let tmpB = 0;
        let isBTurn = false
       for(let j = 0; j < chocoW; j++){
           const chocoW1 = parseInt(chocolateRow[j]);
           
           if(isBTurn) {
               tmpB = tmpB + chocoW1;
               result = result + "B"
           } else {
               tmpA = tmpA + chocoW1
               result = result + "A"
           }
           
            if(tmpA === dividedchoco) {
               isBTurn = true
           }
        }
        ans = ans + result + "\n"
        
        if(tmpA !== tmpB) {
            isNo = true
        }
  }
  
  if(isNo) {
      console.log("No")
  } else {
      console.log("Yes")
      console.log(ans.trim())
  }

});
