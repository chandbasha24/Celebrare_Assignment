const loginBtn = document.getElementById('login-btn');
const logo = document.getElementById('logo');
const houseImage = document.getElementById('house-image');


const onlineIdInput = document.getElementById('online-id');
const passwordInput = document.getElementById('password');

function checkForm() {
    if (onlineIdInput.value && passwordInput.value) {
        loginBtn.classList.add('active');
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.classList.remove('active');
        loginBtn.setAttribute('disabled', true);
    }
}

onlineIdInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);


loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    
    if (loginBtn.classList.contains('active')) {
        loginBtn.classList.add('loading');
        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        loginBtn.appendChild(spinner);
        
      
        logo.style.animation = 'rotateLogo 2s linear forwards';
        
        houseImage.style.animation = 'expandHomeImage 3s ease forwards';

        setTimeout(() => {
            logo.style.position = 'absolute';
            logo.style.animation = 'logoToCenter 1.5s ease forwards';
        }, 2000);
        
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }
});
