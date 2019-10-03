module.exports = function zeros(expression) {
  // your solution
  let factorialsArray = expression.split("*");  //now we have an array containing factorials, like ["1!!", "2!!", "5!"]
  let totalNumberOfTwos = 0; //to count the total number of two's for all factorials
  let totalNumberOfFives = 0; //to count the total number of five's for all factorials
  
  for (factorial of factorialsArray) {  //for each factorial from the array

	  let parsedFactorial = parseInt(factorial);
	  let numberOfTwos = 0; //counter of numbers than can be multiple of five
	  let numberOFives = 0; //counter of numbers that can be multiple of two

	  
	  if ( factorial.endsWith("!!") ) { //first check if there is double faactorial
		  
		  for (let i = parsedFactorial; i > 0; i-=2) {

			  if ( i%5 == 0) {

          let j = i;
          
				  while (j%5 == 0) {
					
					  numberOFives++; 
					  j = j/5;
									 
				  }
			  }
			  
			  if ( i%2 == 0 ) {
				  
				  let j = i;
				  
				  while (j%2 == 0) {

					  j = j/2;
            numberOfTwos++;

				  }
			  }
		  }		  
	  }
	  
	  //for single faactorial 
	  if ( !factorial.endsWith("!!") ) {
	  
	  for (let i = parsedFactorial; i > 0; i--) {

			  if ( i%5 == 0) {
				  
				  let j = i;
				  
				  while (j%5 == 0) {
					
					  numberOFives++; 
					  j = j/5;
									 
          }
          
			  }
			  
			  
			  if ( i%2 == 0 ) {

          let j = i;
          
				  while (j%2 == 0) {

					  j = j/2;
            numberOfTwos++;
            
				  }
			  }
		  }
	  }
	  
	  totalNumberOfTwos = totalNumberOfTwos + numberOfTwos;
	  totalNumberOfFives = totalNumberOfFives + numberOFives;
	  
  }
  
   let whatIsLess = Math.min(totalNumberOfTwos, totalNumberOfFives);
   
   if (whatIsLess == totalNumberOfTwos) {

    return totalNumberOfTwos;
     
   } else {

    return totalNumberOfFives;
     
   }
	
}
