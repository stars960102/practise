var balls=[];
for (var i = 1; i <= 49; i++) {
    balls.push(i);
}
for(var i  = balls.length-1;i>=0; i--){
    var j = Math.floor(Math.random()*(i+1));
var temp = balls[i];
balls[i] = balls[j];
balls[j] = temp;
}
var lucky = balls.slice(0,6);
lucky.sort(function(a, b){
    return a-b;
});
var formattedNumbers = [];
for (var k = 0; k < lucky.length; k++) {
    if (lucky[k] < 10) {
        formattedNumbers.push("0" + lucky[k]);
    } else {
        formattedNumbers.push(lucky[k].toString());
    }
}
console.log("您的電腦選號為：" + formattedNumbers.join(', '));