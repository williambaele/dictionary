console.log("Hi");

let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value === '' || input.value === null){
     document.querySelector("#input").classList.add('border-red-600','border-8');
     console.log("fail");
  }
  else {
    let search = input.value;
    console.log('You searched: ' + search);
    getSearch(search);

  }
});
