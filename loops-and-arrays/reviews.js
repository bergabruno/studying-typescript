var reviews = [0, 1, 2, 6.7, 10];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Average: ".concat(average));
