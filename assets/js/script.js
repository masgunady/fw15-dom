import {
    dataEvent
} from './list.js';

const contIconEye = document.querySelector('.cust-container-icon-eye');
const contIconEye2 = document.querySelector('.cust-container-icon-eye2');
const passInput = document.querySelector('.cust-pass-input');
// const passInput = document.getElementsByName('password');
const passInput2 = document.querySelector('.cust-pass-input2');
const iconEye = document.querySelector('.cust-eye-icon');
const iconEye2 = document.querySelector('.cust-eye-icon2');

const loginForm = document.querySelector('.cust-form-login');
const signUpForm = document.querySelector('.cust-form-signup');
const forgotPassForm = document.querySelector('.cust-form-forgot-pass');


if (loginForm) {
    // iconEyeClass = iconEye.classList;
    contIconEye.addEventListener('click', function () {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            iconEye.classList.remove('fa-eye');
            iconEye.classList.add('fa-eye-slash');
        } else {
            passInput.type = 'password';
            iconEye.classList.remove('fa-eye-slash');
            iconEye.classList.add('fa-eye');
        }
    });
}

const usernameVal = 'gnd';
const emailVal = 'gnd@gmail.com';
const passwordVal = 'gnd123';
const messageWrong = document.querySelector('.cust-message-wrong-input');


if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        // console.log(event);
        if (event.target.username.value == usernameVal && event.target.email.value == emailVal && event.target.password.value == passwordVal) {
            window.location.href = 'index.html';
        } else {
            messageWrong.style.display = 'flex';
            messageWrong.innerText = 'Username or Email or Password Wrong!'
        }

        event.preventDefault();
    });
}

if (signUpForm) {

    contIconEye.addEventListener('click', function () {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            iconEye.classList.remove('fa-eye');
            iconEye.classList.add('fa-eye-slash');
        } else {
            passInput.type = 'password';
            iconEye.classList.remove('fa-eye-slash');
            iconEye.classList.add('fa-eye');
        }
    });

    contIconEye2.addEventListener('click', function () {
        if (passInput2.type === 'password') {
            passInput2.type = 'text';
            iconEye2.classList.remove('fa-eye');
            iconEye2.classList.add('fa-eye-slash');
        } else {
            passInput2.type = 'password';
            iconEye2.classList.remove('fa-eye-slash');
            iconEye2.classList.add('fa-eye');
        }
    });
}


if (signUpForm) {
    const chkBox = document.getElementById('chkBox').checked = false;
    const btnSubmit = document.getElementById('buttonSubmit').disabled = true;
}
if (signUpForm) {
    const chkBox = document.getElementById('chkBox');
    const btnSubmit = document.getElementById('buttonSubmit');

    chkBox.addEventListener('click', function () {
        if (chkBox.checked === true) {
            btnSubmit.disabled = false;
            btnSubmit.className = 'shadow-for-all-button w-full h-14 rounded-xl  text-base font-semibold tracking-[1px] text-white bg-[#4c3f91]'
        } else {
            btnSubmit.disabled = true;
            btnSubmit.className = 'shadow-for-all-button w-full h-14 rounded-xl  text-base font-semibold tracking-[1px] text-white bg-[#C1C5D0]'
        }
    })
}

if (signUpForm) {
    const usernameMessage = document.querySelector('.cust-message-username');
    const emailMessage = document.querySelector('.cust-message-email');
    const passwordMessage = document.querySelector('.cust-message-password');
    signUpForm.addEventListener('submit', function (event) {
        console.log(event);
        event.preventDefault();
        // return
        if (event.target.username.value == usernameVal) {
            // window.location.href = 'index.html';
            usernameMessage.style.display = 'flex';
            usernameMessage.innerText = 'Username has been registered!';
            if (event.target.email.value == emailVal) {
                emailMessage.style.display = 'flex';
                emailMessage.innerText = 'Email has been registered!';
                if (event.target.password.value != event.target.password2.value) {
                    passwordMessage.style.display = 'flex';
                    passwordMessage.innerText = 'Password not match!';
                }
            }
        } else if (event.target.email.value == emailVal) {
            emailMessage.style.display = 'flex';
            emailMessage.innerText = 'Email has been registered!';
        } else if (event.target.password.value != event.target.password2.value) {
            passwordMessage.style.display = 'flex';
            passwordMessage.innerText = 'Password not match!';

        } else {
            window.location.href = 'auth-login.html';
        }


    });
}

if (forgotPassForm) {
    forgotPassForm.addEventListener('submit', function (event) {
        console.log(event);
        event.preventDefault();
        if (event.target.email.value !== emailVal) {
            messageWrong.style.display = 'flex';
            messageWrong.style.color = 'red';
            // messageWrong.innerText = 'Email not registered, please ';
            messageWrong.innerHTML = `  <div class="flex gap-2">
                                            <p>Email not registered, please</p>
                                            <a class="text-[#4c3f91] font-medium" href="../../auth-register.html"> Register</a>
                                        </div>      
                                    `;
        } else {
            messageWrong.innerText = 'Link reset has been sent. Please check your email!'
        }


    });
}

// index
const btnShowNavMobile = document.getElementById('btnShowNavMobile');
const indexPage = document.querySelector('.indexPage');
const mainIndex = document.querySelector('.main-index');

if (indexPage) {
    const navIndexPageMobile = document.querySelector('.cust-nav-mobile');
    navIndexPageMobile.style.display = 'none';

    btnShowNavMobile.addEventListener('click', function () {
        if (navIndexPageMobile.style.display === 'none') {
            navIndexPageMobile.style.display = 'flex';
        } else {
            navIndexPageMobile.style.display = 'none';
        }
    });

    mainIndex.addEventListener('click', function () {
        if (navIndexPageMobile.style.display === 'flex') {
            navIndexPageMobile.style.display = 'none';
        }
    })
}




// import the exports
if (indexPage) {
    const eventContainer = document.querySelector('.event-banner-container');
    const data = dataEvent;
    let html = '';
    data.forEach((event) => {
        html += `<div class="event-banner">
        <img src="${event.banner}" alt="" class="src" />
        <div class="text">
        <div class="date">${event.event_date}</div>
        <div class="title"><a href="./event-detail.html?id=${event.id}">${event.event_name}</a></div>
        <div class="attendance">
            <div class="img-profile">
            <img src="${event.attendance.user1}" alt="" />
            </div>
            <div class="img-profile">
            <img src="${event.attendance.user2}" alt="" />
            </div>
            <div class="img-profile">
            <img src="${event.attendance.user3}" alt="" />
            </div>
            <div class="img-profile">
            <img src="${event.attendance.user4}" alt="" />
            </div>
        </div>
        </div>
        <div class="dissolve-black"></div>
    </div> `;

        eventContainer.innerHTML = html;
    });

}

const eventHandlingPage = document.querySelector('.cust-event-handle');

if (eventHandlingPage) {
    const url = window.location.href;
    const id = url.split('?')[1].split('=')[1];
    const imgContainer = document.querySelector('.cust-img-container');
    const eventLocContainerM = document.querySelector('.cust-event-location-mobile');
    const eventLocContainer = document.querySelector('.cust-event-location');
    const eventDateContainerM = document.querySelector('.cust-event-date-mobile');
    const eventDateContainer = document.querySelector('.cust-event-date');
    const eventTitleContainerM = document.querySelector('.cust-event-title-mobile');
    const eventTitleContainer = document.querySelector('.cust-event-title');


    const data = dataEvent;
    const eventArr = data[id - 1];
    imgContainer.innerHTML = `<img class="w-full h-full object-cover" src="${eventArr.banner}" alt="" />`
    eventLocContainer.innerHTML = `${eventArr.event_location}`
    eventLocContainerM.innerHTML = `${eventArr.event_location}`
    eventDateContainerM.innerHTML = `${eventArr.event_date}`
    eventDateContainer.innerHTML = `${eventArr.event_date}`
    eventTitleContainerM.innerHTML = `${eventArr.event_name}`
    eventTitleContainer.innerHTML = `${eventArr.event_name}`


    // const getItemID = linkSeparate[1].split('=')[1];
}