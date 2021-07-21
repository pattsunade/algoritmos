function squareValue(x){
   var square = [];
   for(var i= 0; i < x.length; i++){
       
           square.push(x[i]*x[i]);
           }
 return square;
}
y = squareValue([1,2,3]);
console.log(y); 
  
y = squareValue([2,5,8]);
console.log(y); 