let heading = $('h1');
let buttonList = $('.button-list');

colorList = ['purple', 'yellow', 'cyan', 'pink', 'white', 'gray', 'brown'];
for(let i = 0; i < colorList.length; i++) {
    buttonList.append("<li><button class='" + colorList[i] + "'>Click for " + capitalize(colorList[i]) + "</button></li>");
}

let buttons = $('button');
for(let i = 0; i < buttons.length; i++) {
    $(buttons[i]).css('background-color', $(buttons[i]).attr('class'));
    // $(buttons[i]).on('click', function() {
    //     heading.css('color',$(this).attr('class'));
    // });
}
buttons.on('click', function() {
    heading.css('color', $(this).attr('class'));
})

$(document).keydown(function(event) {
    if(event.key == 'Enter') buttons.slideToggle();

    heading.text(event.key);
})

function capitalize(myString) {
    return myString.charAt(0).toUpperCase() + myString.slice(1);
}