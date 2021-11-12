let body = document.getElementById('bodyForPopup')

let buttonGetConsult = document.getElementById('consultation')

buttonGetConsult.addEventListener('click', function (){
    createPopup()
    body.style.overflow = "hidden"
})


let createPopup = function () {
    console.log('hello')
    let popupBody = document.createElement('div')
    popupBody.classList.add('popup-body')
    body.append(popupBody)

    let popupWrapper = document.createElement('div')
    popupWrapper.classList.add('popup-wrapper')
    popupBody.append(popupWrapper)

    let container = document.createElement('div')
    container.classList.add('container')
    popupWrapper.append(container)

    let consultingTitle = document.createElement('h2')
    consultingTitle.classList.add('consulting__title')
    consultingTitle.innerText = 'Консультация'
    container.append(consultingTitle)

    let consultingSubtitle = document.createElement('p')
    consultingSubtitle.classList.add('consulting__subtitle')
    consultingSubtitle.innerText = 'Если у Вас остались вопросы, мы с радостью на них ответим.\n'
    container.append(consultingSubtitle)

    let consultingForm = document.createElement('form')
    consultingForm.classList.add('consulting__form')
    // consultingForm.id = "form"
    // consultingForm.action = "mailer/smart.php"
    // consultingForm. method = "POST"
    container.append(consultingForm)

    let name = document.createElement('input')
    name.classList.add('consulting__name')
    // name.id = 'consulting__name'
    name.type = 'text'
    name.autocomplete = 'off'
    name.placeholder = 'Имя'
    consultingForm.append(name)

    let phone = document.createElement('input')
    phone.classList.add('consulting__name')
    // phone.id = 'consulting__phone'
    phone.name = 'user__phone'
    phone.type = 'phone'
    phone.autocomplete = 'off'
    phone.placeholder = 'Телефон'
    consultingForm.append(phone)

    let email = document.createElement('input')
    email.classList.add('consulting__name')
    email.type  = 'email'
    email.autocomplete = 'off'
    email.placeholder = 'Email'
    consultingForm.append(email)

    let label = document.createElement('label')
    label.setAttribute("for", "consulting__comments")
    label.innerText = 'Комментарий (не обязательно)'
    consultingForm.append(label)

    let comments = document.createElement('input')
    comments.classList.add('consulting__name')
    consultingForm.append(comments)


    let buttonSubmit = document.createElement('button')
    buttonSubmit.classList.add('button')
    buttonSubmit.innerText = 'Получить консультацию\n'
    consultingForm.append(buttonSubmit)


    // popupBody.addEventListener('click', function (){
    //     popupBody.remove();
    //
    // })

}