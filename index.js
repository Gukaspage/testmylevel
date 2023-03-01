 const myForm = document.querySelector('#questionOne');

 myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(myForm);
  const selectedValue = formData.get('answer');
  console.log(selectedValue); // Outputs the selected value, e.g. "option1"
  if(selectedValue == "correct"){
   alert("Good job! / Bra!");
  }
 });


  const myFormTwo = document.querySelector('#questionTwo');


 myFormTwo.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(myFormTwo);
  const selectedValue = formData.get('answer');
  console.log(selectedValue); // Outputs the selected value, e.g. "option1"
  if (selectedValue == "correct") {
   alert("Good job! / Bra!");
  }
 });
