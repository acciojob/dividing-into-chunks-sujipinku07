const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result=[];
	let currentSubArray=[];
	let currentSum=0;
	for(const num of arr){
		if(currentSum+num>n){
			result.push(currentSubArray);
			currentSubArray=[];
			currentSum=0;
		}
		currentSubArray.push(num);
		currentSum+=num;
	}
	if(currentSubArray.length>0){
		result.push(currentSubArray)
	}
	return result;

};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));