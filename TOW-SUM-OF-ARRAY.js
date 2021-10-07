var twoSum = function(nums, target) {
    
    let resultArr = []
 let result = nums.map((n,i,arr)=>{
   for(let j = 0;j<arr.length;j++){    
    if(i!==j){
      if(n + arr[j]==target){
       resultArr.push(i)
       
      }

    }    
   }
 })
    return resultArr
};
