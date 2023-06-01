const loginUsername = document.querySelector('#login-username')
const loginPassword = document.querySelector('#login-password')
const loginButton = document.querySelector('#login-button')



loginButton.addEventListener('click', async () => {
  const username = loginUsername.value.trim()
  const password = loginPassword.value.trim()


  if (username && password) {
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
      document.location.replace('/')
    } else {
      alert('Login Failed')
    }
  } else {
    alert('Please fill in all fields')
  }

  //why is this not clearing
  loginUsername.value = ''
  loginPassword.value = ''
})

