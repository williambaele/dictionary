let form = document.querySelector('#form');
let search = "chicken";
let input = document.querySelector('#search');
getDefinition(search);
const sound = document.querySelector("#sound");


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
        let definition = answer[0].meanings[0].definitions[0].definition;
        let type = answer[0].meanings[0].partOfSpeech;
        let word = answer[0].word;
        let phonetic = answer[0].phonetic;
        let soundSource = answer[0].phonetics[0].audio;
        if(soundSource != null){
          let soundSource = answer[0].phonetics[0].audio;
        } else {
          document.querySelector('#soundicon').classList.add('invisible');
        }
        console.log('API connected');
        console.log(answer[0].meanings[0].partOfSpeech);
        console.log(answer[0].meanings[0].definitions[0].definition);
        document.querySelector("#definition").innerText = definition;
        document.querySelector("#type").innerText = type;
        document.querySelector("#word").innerText = word;
        document.querySelector("#phonetic").innerText = phonetic;
        sound.src = soundSource;
      }
      else {
        console.log('API not working');
        document.querySelector("#search").classList.add('border-red-500', 'border-1');
        document.querySelector("#error").classList.remove('invisible');
      }
    }
  }
}


function playSound() {
  sound.play();
}


/* Form handling */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value == ''){
     document.querySelector("#input").classList.add('border-red-500','border-8');
     console.log("fail");
  }
  else {
    let search = input.value;
    console.log('You searched: ' + search);
    getDefinition(search);
  }
});
