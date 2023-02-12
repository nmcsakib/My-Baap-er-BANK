document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const passField = document.getElementById('user-password');
    const email = emailField.value;
    
    const pass = passField.value;
    console.log(email, pass);
    if(email === 'sakib@gmail.com' && pass === 'secret'){
        document.getElementById('bankAccount').style.display = 'block';
        document.getElementById('login').style.display = 'none';

    } else{
        alert('invalid user')
    }

})