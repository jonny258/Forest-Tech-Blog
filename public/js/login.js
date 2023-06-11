const loginUsername = document.querySelector('#login-username')
const loginPassword = document.querySelector('#login-password')
const loginButton = document.querySelector('#login-button')



loginButton.addEventListener('click', async () => {
  const username = loginUsername.value.trim()
  const password = loginPassword.value.trim()

  if (username && password) { //checks to see if both the login and password are filled out
    const responce = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    if (responce.ok) {
      document.location.replace('/') //redirects you to the homepage
    } else {
      alert('Login Failed')
    }
  } else {
    alert('Please fill in all fields')
  }
  
  loginUsername.value = ''
  loginPassword.value = ''
})

