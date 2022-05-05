let url = 'https://api.adviceslip.com/advice';
let button = document.querySelector('button');
let advice = document.querySelector('.advice');

 
button.addEventListener('click', async () => {

    advice.innerHTML = 'Wait a second...';

    let result = await fetch(url);
    let json = await result.json();

    advice.innerHTML = json.slip.advice;
})

