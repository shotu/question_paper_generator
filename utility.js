
let out_put_set = new Set();

function printAllSubsetsRec(arr, n, v, sum){
  //  If remaining sum is 0, then print all 
  //  elements of current subset.
  if(sum == 0) {
    for (let i = 0; i <  v.length; i++){
      // console.log("i .....#{i}", v[i]);
      out_put_set.add(v)
    }
    return 
  }
      
  // If no remaining elements, 
  if(n == 0){
    return
  }
  // We consider two cases for every element. 
  //  a) We do not include last element. 
  //  b) We include last element in current subset. 
  printAllSubsetsRec(arr, n - 1, v, sum) 
  v1 = [].concat(v) 
  v1.push(arr[n - 1]) 
  printAllSubsetsRec(arr, n - 1, v1, sum - arr[n - 1]["marks"]) 
}

exports.getCombinations = (questions_array, n, v, sum) => {
  
  return new Promise((resolve, reject)=>{
    try {
      printAllSubsetsRec(questions_array, n, v, sum);
      resolve(out_put_set);
    } catch (err) {
        reject(err);
    }
  })

}
