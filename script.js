
let partOfSpeechContainer = document.getElementsByClassName('meaning-container');

async function datas(word){
try {

    let wordSearch = document.getElementById('wordSearch');

let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

 let data = await response.json();

 console.log(data);

 let pos = data[0].meanings;

 let audio = data[0].phonetics[0].audio.toString();

 let para = document.createElement('div');

 para.innerHTML = `<i class="fa-duotone fa-volume-high fa-xl" id = 'audio-icon'></i>
 <audio id = 'audio'><source src = ${audio} type = 'audio/mpeg'></audio> Word : <b>${word}</b>`;

  let list = document.createElement('ul');

 for(let part of pos){

    let items = document.createElement('li');

    items.innerHTML = `PartOfSpeech : ${part.partOfSpeech}`;

    let orderlist = document.createElement('ol');

    orderlist.style.listStyleType = 'decimal';

    for(let def of part.definitions){
        let items2 = document.createElement('li');
        items2.innerHTML = `${def.definition}`;
        orderlist.appendChild(items2);
    }    

    list.append(items,orderlist);
}

partOfSpeechContainer[0].append(para,list);

let audioIcon = document.getElementById('audio-icon').addEventListener('click',() => {
    document.getElementById('audio').play();
})

} catch (error) {
    console.log('Error while fetch meaning : ',error);
}

}

function search() {

    let word = document.getElementById('searchBox').value;

    if(word == ''){
        alert("Please enter a valid word");
        }else{
            datas(word);
            }

}




