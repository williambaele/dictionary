let form = document.querySelector('#form');
let search = "procrastination";
let input = document.querySelector('#search');
getDefinition(search);

/* Search function */
function getDefinition(search) {
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ search;
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE){
      if (request.status === 200){
        let answer = request.response
        let definition = answer.meanings[0].definitions[0].definition
        console.log('API connected');
        console.log(definition);
      }
      else {
        console.log('API not working');
      }
    }
}
}



/* Form handling */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value == ''){
     document.querySelector("#input").classList.add('border-red-600','border-8');
     console.log("fail");
  }
  else {
    let search = input.value;
    console.log('You searched: ' + search);
    getDefinition(search);
  }
});
