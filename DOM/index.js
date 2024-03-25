let listItems = document.getElementsByTagName('li');
for(let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML += (" " + (i + 1));
}

let button = document.querySelector('button');
button.addEventListener('click', buttonClicked);



function buttonClicked() {
    let heading = document.querySelector('h1');
    let paragraphs = document.querySelectorAll('p');
    
    heading.innerHTML = "You are not welcome to my Website!";
    
    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "Changed the text for both paragraphs.";
    }
    
    let link = document.querySelector('.container a');

    document.firstElementChild.lastElementChild.querySelector('button').innerHTML = "Don't click me!";
    link.href = "https://www.tiktok.com/@meowdalynn/video/6973863159752854789";
    link.style.backgroundColor = 'red';
}