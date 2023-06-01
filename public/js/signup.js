const signupUsername = document.querySelector('#signup-username')
const signupPassword = document.querySelector('#signup-password')
const signupButton = document.querySelector('#signup-button')

signupButton.addEventListener('click', async () => {
    const username = signupUsername.value.trim()
    const password = signupPassword.value.trim()

    if(username && password){
        const responce = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
    
        if (responce.ok){
            document.location.replace('/')
        }else{
            alert('Signup failed')
        }
    }
    
    //why is this not clearing
    signupUsername.value = ''
    signupPassword.value = ''
})