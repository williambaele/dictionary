console.log("Hi");
const url = https://api.dictionaryapi.dev/api/v2/entries/en/;

let form = document.querySelector('#form');

/* Search function */
function getDefinition() {

}



/* Form handling */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value === '' || input.value === null){
     document.querySelector("#input").classList.add('border-red-600','border-8');
     console.log("fail");
  }
  else {
    let search = input.value;
    console.log('You searched: ' + search);
    getDefinition(search);

  }
});
