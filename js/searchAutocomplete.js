let data =  localStorage.getItem("userData") ?  JSON.parse(localStorage.getItem("userData")) : [];
let searchArr = data.slice(0, 6);


let forms = document.getElementsByClassName('js-from')
let inputs = document.getElementsByClassName('js-inputSearch');
let suggestionLists = document.getElementsByClassName('suggestions');
let searchBoxes = document.getElementsByClassName('search-box');
let inputWraps = document.getElementsByClassName('input-addon')


Array.from(forms).forEach(item => {
    item.addEventListener("submit", (e) => {
        e.preventDefault();
        Array.from(inputs).forEach(input =>{
            if (input.value.length > 0){
                searchArr.unshift(input.value);
            }
            input.value = "";
        })
        localStorage.setItem("userData", JSON.stringify(searchArr));

    })
})


Array.from(inputs).forEach(input => {
    input.addEventListener('focus', function(e) {
        let suggestions = JSON.parse(localStorage.getItem("userData"));
        suggestions.length = 7;
        fillSuggestionList(suggestions);
        Array.from(inputWraps).forEach(wrap => {
            wrap.style.color = '#e4c592';
        })

    });
})


Array.from(inputs).forEach(input => {
        input.addEventListener('input', function (e) {
        let enteredText = this.value.toLowerCase();
                let sug1 = Array.prototype.slice.call(suggestionLists[0].children, 0);
                let sug2 = Array.prototype.slice.call(suggestionLists[1].children, 0);


            let suggestions =  sug1.concat(sug2);

            [].forEach.call(suggestions, function (suggestion) {
            let suggestionContent = suggestion.textContent;
            suggestion.addEventListener('click', function () {
                input.value = suggestion.innerText;
                clearSuggestionList();

                Array.from(inputWraps).forEach(wrap => {
                    wrap.style.color = '#CACACB';
                    wrap.style.borderBottomRightRadius = '5px'
                    wrap.style.borderBottomLeftRadius = '5px'

                })
                Array.from(searchBoxes).forEach(searchBox => {
                    searchBox.classList.remove('visible')
                })
            })

                Array.from(searchBoxes).forEach(searchBox => {
                    searchBox.classList.add('visible');

                })
                suggestion.style.display = 'block';

                Array.from(inputWraps).forEach(wrap => {
                    wrap.style.color = '#e4c592';
                    wrap.style.borderBottomRightRadius = '0'
                    wrap.style.borderBottomLeftRadius = '0'

                })
            // if (enteredText.length && suggestionContent.includes(enteredText)) {
            //     Array.from(searchBoxes).forEach(searchBox => {
            //         searchBox.classList.add('visible');
            //
            //     })
            //     suggestion.style.display = 'block';
            //     console.log(suggestion)
            //
            //     Array.from(inputWraps).forEach(wrap => {
            //         wrap.style.color = '#e4c592';
            //         wrap.style.borderBottomRightRadius = '0'
            //         wrap.style.borderBottomLeftRadius = '0'
            //
            //     })
             if(!suggestionContent.includes(enteredText)) {
                // Array.from(searchBoxes).forEach(searchBox => {
                //     searchBox.classList.remove('visible')
                // })
                suggestion.style.display = 'none';

                // Array.from(inputWraps).forEach(wrap => {
                //     wrap.style.color = '#e4c592';
                //     wrap.style.borderBottomRightRadius = '5px'
                //     wrap.style.borderBottomLeftRadius = '5px'
                //
                // })

            }
        });
    })
})

function fillSuggestionList(suggestions) {
    Array.from(suggestionLists).forEach(list => {
        list.innerHTML = "";
    })
    console.log(suggestions)
        Array.from(suggestionLists).forEach(suggestionList => {
            Array.from(suggestions).forEach( suggestion => {
                let li = document.createElement('li');
                li.classList.add('suggestion')
                li.textContent = suggestion;
            suggestionList.append(li);
        })
        });
}

function clearSuggestionList() {
    while (suggestionLists.firstChild) {
        Array.from(suggestionLists).forEach(suggestionList =>{
            suggestionList.removeChild(suggestionList.firstChild);
        })
    }
}
