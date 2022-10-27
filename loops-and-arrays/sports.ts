let sports: string [] = ["Golf", "Tennis", "Football"];

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
for(let sportsOne of sports){
    if(sportsOne == "Football")
        console.log(`That's my favorite -> ${sportsOne}`);
    else
        console.log(sportsOne);   
}