// code your solution here
function superbowlWin(record) {
let sup = record.find(val => val.year === "2015")
if(sup){
  return sup.year
}
return sup
}
