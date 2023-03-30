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
    iconEyeClass = iconEye.classList;
    contIconEye.addEventListener('click', function () {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            iconEyeClass.remove('fa-eye');
            iconEyeClass.add('fa-eye-slash');
        } else {
            passInput.type = 'password';
            iconEyeClass.remove('fa-eye-slash');
            iconEyeClass.add('fa-eye');
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
    iconEyeClass = iconEye.classList;
    iconEyeClass2 = iconEye2.classList;

    contIconEye.addEventListener('click', function () {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            iconEyeClass.remove('fa-eye');
            iconEyeClass.add('fa-eye-slash');
        } else {
            passInput.type = 'password';
            iconEyeClass.remove('fa-eye-slash');
            iconEyeClass.add('fa-eye');
        }
    });

    contIconEye2.addEventListener('click', function () {
        if (passInput2.type === 'password') {
            passInput2.type = 'text';
            iconEyeClass2.remove('fa-eye');
            iconEyeClass2.add('fa-eye-slash');
        } else {
            passInput2.type = 'password';
            iconEyeClass2.remove('fa-eye-slash');
            iconEyeClass2.add('fa-eye');
        }
    });
}

if (signUpForm) {
    const usernameMessage = document.querySelector('.cust-message-username');
    const emailMessage = document.querySelector('.cust-message-email');
    const passwordMessage = document.querySelector('.cust-message-password');
    signUpForm.addEventListener('submit', function (event) {
        // console.log(event);
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

        event.preventDefault();
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