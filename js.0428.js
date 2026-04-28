
var arr=[1,5,2,6,4,7,3];

var max=arr[0];
for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
    max = arr[i];
    }
}
console.log(max);