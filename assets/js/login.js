function postLogin() {
    event.preventDefault();
    
    const url = 'https://5f30c512373bc7001635ede4.mockapi.io/asm/users';
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value; 

    axios.get(url)
        .then(function(response){
            response.data.forEach(function(user) {
                if (user.email === email && user.password === password) {
                    window.location.href = 'index.html';
                } else {
                    document.querySelector('.err-login').innerText = 'Email hoặc mật khẩu không chính xác';
                }
            });
            
        })
}