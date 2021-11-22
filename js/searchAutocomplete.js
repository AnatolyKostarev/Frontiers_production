let input = document.querySelector('.js-inputSearch');
let searchBox = document.querySelector('.search-box');
let suggestionList = document.querySelector('.suggestions');
let form = document.querySelector('.js-from')

let searchArr = [];

// const data = JSON.parse(localStorage.getItem("userData"));
// $("#news__search").autocomplete({
//     source: data
// })



form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(searchArr <= 10){
        searchArr.push(input.value);
    }
    else {
        searchArr.unshift()
        searchArr.push(input.value);
    }
    input.value = "";
    localStorage.setItem("userData", JSON.stringify(searchArr));
})

let suggestions = JSON.parse(localStorage.getItem("userData"));


input.addEventListener('focus', function(e) {
    fillSuggestionList(suggestions);
    searchBox.classList.add('visible');
});


input.addEventListener('input', function(e) {
    let enteredText = this.value.toLowerCase();
    let suggestions = suggestionList.children;

    [].forEach.call(suggestions, function(suggestion) {
        let suggestionContent = suggestion.textContent;
        suggestion.addEventListener('click', function (){
            input.value = suggestion.innerText ;
            clearSuggestionList();
            searchBox.classList.remove('visible')
        })
        if (enteredText.length && suggestionContent.includes(enteredText)) {
            suggestion.style.display = 'block';
        } else {
            suggestion.style.display = 'none';
        }
    });
});


function fillSuggestionList(suggestions) {
    suggestions.forEach(function(suggestion) {
        let li = document.createElement('li');
        li.classList.add('suggestion')
        li.textContent = suggestion;
        suggestionList.appendChild(li);
    });
}

function clearSuggestionList() {
    while (suggestionList.firstChild) {
        suggestionList.removeChild(suggestionList.firstChild);
    }
}


