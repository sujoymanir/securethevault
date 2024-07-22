/* 

1. Create three different variables each  with their own operation.
2. Make sure each var equates to the codes in the "secret code"
3. I will add comments throughout the code in script.js.
4. Create an alert to populate on the browser (i.e dialog box)

*/

const num1= 5+1+2+1+1;
const num2= 10 *4;
const num3= 70-31;
const str9= "You have received this message because you have been chosen to open an important vault. Here is the secret combination"

/* 
I created three distinct variables for each secret code digit
Each variable  has a different operator

*/

const newString3= `${str9} ${num1},${num2},${num3}`

/* 
Created a new a string with the string message and numbers concatanated.
*/


console.log(newString3);

/* 
I checked  my terminal to  see if the new string came out accurately
*/


alert(newString3);

/* 

Added the alert
*/
