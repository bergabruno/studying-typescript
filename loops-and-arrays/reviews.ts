let reviews: number [] = [0,1,2,6.7,10];
let total: number = 0;

for(let i = 0; i< reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}


let average = total / reviews.length;

console.log(`Average: ${average}`);
