//D153:食材選び

const lines = ["100 200 300"];

const food = lines[0].split(' ');
       
const food1 = parseInt(food[0]);
const food2 = parseInt(food[1]);
const food3 = parseInt(food[2]);

const ma = Math.max(food1,food2,food3);
//console.log(ma);
   
const mi = Math.min(food1,food2,food3);
// console.log(mi);

const beefList = [food1,food2,food3];
for (let i = 0; i < beefList.length; i++) {
const item = beefList[i]
if (item != ma && item != mi) {
  console.log(item);
  
}
}
