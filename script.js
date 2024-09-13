const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result =[];
	let currentSubArray = [];
	const currentSum = 0;
	
	for(const num of arr) {
		if(currentSum + num > n){
			result.push(currentSubArray);// Write your code here
};

//const n = prompt("Enter n: ");
//alert(JSON.stringify(divide(arr, n)));
