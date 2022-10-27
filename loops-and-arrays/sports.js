var sports = ["Golf", "Tennis", "Football"];
/*
for(let i = 0; i< sports.length; i++){
    if(sports[i] == "Tennis"){
        console.log(`That's my favorite ->  ${sports[i]}`);
    }else{
        console.log(sports[i]);
    }
}
*/
//simplify loop
console.log("Simplifying loop");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sportsOne = sports_1[_i];
    if (sportsOne == "Football")
        console.log("That's my favorite -> ".concat(sportsOne));
    else
        console.log(sportsOne);
}
