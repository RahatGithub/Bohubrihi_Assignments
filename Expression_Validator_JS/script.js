// UI elements 
let form = document.querySelector('#form');
let category = document.querySelector('#category');
let selectedCategory = document.querySelector('#selected_category');
let inputText = document.querySelector('#input_text');
let result = document.querySelector('#result');

// event listeners 
form.addEventListener('submit', showPrompt);




function showPrompt(e){
    let text = prompt("Text you want to check: ");

    checkText(category.value, text);

    e.preventDefault();
}


function checkText(category, text){
    // DOM manipulation
    selectedCategory.innerText = category;
    selectedCategory.setAttribute('class', 'text-primary');
    inputText.innerText = text;
    inputText.setAttribute('class', 'text-primary');
    
    let regex;
    if(category == 'email')
        regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    else if(category == 'phone')
        regex = /0[1-9]\d{9}/;
    else if(category == 'post_code')
        regex = /^\d{5}$/;


    if(regex.test(text))
        // result.innerText = "Matched";
        result.innerHTML = "<span class='text-success'>Matched</span>";
    else
        // result.innerText = "Didn't match";
        result.innerHTML = "<span class='text-danger'>Didn't match</span>";
}