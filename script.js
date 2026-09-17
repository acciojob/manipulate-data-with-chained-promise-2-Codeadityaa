//your JS code here. If required.
const outputDiv= document.getElementById("output");
const inputArray=;
const intialPromise = new promise((resolve)=>{
	setTimeout(()=>
		resolve(inputArray);},3000);
})
initialPromise
    .then((array) => {
		const evens= Array.filter(num=>num%2=0);
		return new promise((resolve)=>){
			setTimeout(()=>
			resolve(evens);},1000);
		})
  .then((evensArray) => {
	  const Multiplied=evensArray.map(num=>num*2);
	   return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.textContent = multiplied.join(","); // Updates DOM to: 4,8
                resolve(multiplied);
            }, 2000);
        });
    });
