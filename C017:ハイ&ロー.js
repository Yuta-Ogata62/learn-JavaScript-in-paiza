//C017:ハイアンドロー・カードゲーム
 const lines = ["5 1", "2", "7 2", "1 4"];
 
 const master = lines[0].split(" ")
    const master1 = parseInt(master[0]);
    const master2 = parseInt(master[1]);
    const player = parseInt(lines[1]);


for (let i = 2; i < player + 2; i++){
    const child = lines[i].split(" ");
    const child1 = parseInt(child[0]);
    const child2 = parseInt(child[1]);

    if (master1 > child1){
        console.log("High");
    }else if (master1 == child1 && master2 < child2){
        console.log("High")
    }else{
        console.log("Low");
    }
}