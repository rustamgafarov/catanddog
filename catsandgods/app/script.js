//cats API - https://api.thecatapi.com/v1/images/search
//dogs API - https://dog.ceo/api/breeds/image/random



const cat_btn = document.querySelector('#cat_btn');
const cat_result = document.querySelector('#cat_result')

cat_btn.addEventListener('click', getRandomCat);

function getRandomCat() {
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].url);
            cat_result.innerHTML = `<img src=${data[0].url} alt="cat" />`;
        });

}



const dog_btn = document.querySelector('#dog_btn');
const dog_result = document.querySelector('#dog_result')

dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            dog_result.innerHTML = `<img src=${data.message} alt="dog" />`;
        });

}
