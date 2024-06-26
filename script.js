function fibonacci(num) {
    let ans=0;

    for(let i=0;i<num;i++){
        ans+=i;
   }
   return ans;    
}
    
module.exports = fibonacci;