const values = ["グー", "チョキ", "パー"]
console.log(values);

let janken = values.length;

    var hands = Math.floor(Math.random() * janken);
    //ランダム
    console.log(values[hands]);
