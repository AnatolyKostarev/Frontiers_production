let buttonGetConsult = document.getElementById('consultation')

buttonGetConsult.addEventListener('click', function (){
    createPopup()
    document.body.style.overflow = "hidden"
})

document.getElementById('getСonsultation').addEventListener('click', function (){
    createPopup()
    document.body.style.overflow = "hidden"
})


const createPopup = function () {

    let popupBody = document.createElement('div')
    popupBody.classList.add('popup-body')
    document.body.append(popupBody)

    const popupWrapper = document.createElement('div')
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

    const name = document.createElement('input')
    name.classList.add('consulting__name')
    // name.id = 'consulting__name'
    name.type = 'text'
    name.autocomplete = 'off'
    name.placeholder = 'Имя'
    consultingForm.append(name)

    const phone = document.createElement('input')
    phone.classList.add('consulting__name')
    // phone.id = 'consulting__phone'
    phone.name = 'user__phone'
    phone.type = 'phone'
    phone.autocomplete = 'off'
    phone.placeholder = 'Телефон'
    consultingForm.append(phone)

    const email = document.createElement('input')
    email.classList.add('consulting__name')
    email.type  = 'email'
    email.autocomplete = 'off'
    email.placeholder = 'Email'
    consultingForm.append(email)

    const label = document.createElement('label')
    label.setAttribute("for", "consulting__comments")
    label.innerText = 'Комментарий (не обязательно)'
    consultingForm.append(label)

    const comments = document.createElement('input')
    comments.classList.add('consulting__name')
    comments.type="text"
    comments.name="user__message"
    comments.autocomplete="off"
    comments.maxlength="150"
    consultingForm.append(comments)


    let buttonSubmit = document.createElement('button')
    buttonSubmit.classList.add('button')
    buttonSubmit.type = 'submit'
    buttonSubmit.innerText = 'Получить консультацию\n'
    consultingForm.append(buttonSubmit)

    let closePopupButton = document.createElement('div')
    closePopupButton.classList.add('closePopupButton')
    consultingForm.append(closePopupButton)

    closePopupButton.addEventListener('click', function (){
        popupBody.remove();
        document.body.style.overflowY = "auto"
        document.body.style.overflowX = "hidden"

    })

}