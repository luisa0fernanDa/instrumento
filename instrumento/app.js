const URL="https://random.dog/7b3154ef-18ea-42de-8c35-e8cd85ba9965.jpg";

const btngenerator =document.getElementById('button');
const container= document.getElementById('container');
const imgCharacter= document.getElementById('imgCharacter');
btnGenerate.addEventListener('click' , getVharacter);
const getCharacter=()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data=> console.log(data))
        const nameCharacter= document.createElement('p');
        nameCharacter.textContent= data[0].Character;
        //set Atribute son para img
        imgCharacter.setAttribute('src',data[0].image);
}
