/*

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

*/

function checkCashRegister(price, cash, cid) {
  const value =[    
    [100,  cid[8][1]/100,  'ONE HUNDRED'],
    [20,   cid[7][1]/20,   'TWENTY'],
    [10,   cid[6][1]/10,   'TEN'],
    [5,    cid[5][1]/5,    'FIVE'],
    [1,    cid[4][1]/1,    'ONE'],
    [0.25, cid[3][1]/0.25, 'QUARTER'],
    [0.1,  cid[2][1]/0.1,  'DIME'],
    [0.05, cid[1][1]/0.05, 'NICKEL'],
    [0.01, cid[0][1]/0.01, 'PENNY']];
  //[worth, number if times available, name, index in cid]

  let changeNum = cash - price;
  let register = cid.map(x => x[1]).reduce((acc, cur) => acc + cur);
  
  // How to pay here for?
  if (register === changeNum) {
    status = 'CLOSED'
    return {"status": status, "change": cid};
  };

  // WAT?! NOO MUNNEY?!
  if (register < changeNum) {
    status = 'INSUFFICIENT_FUNDS'
    return {"status": status, "change": []};
  };


  //HIER! REKENEN!
 let change = value.reduce( function (acc, item) {
    let howMany = Math.floor(changeNum / item[0]);
    if (howMany > item[1]) {
      howMany = item[1];
    }
    console.log(acc);
    //console.log(changeNum);
    if (howMany > 0) {      
      changeNum = (changeNum - item[0]*howMany).toFixed(2);
      acc.push([item[2], item[0]*howMany]);
    } return acc;
  }
  ,  [])

//console.log(changeNum);
console.log(change);

  //If there's not enough munney
  if (changeNum > 0) {
    status = 'INSUFFICIENT_FUNDS'
    return {"status": status, "change": []};
  }

  return {"status": 'OPEN', "change": change };
};

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);