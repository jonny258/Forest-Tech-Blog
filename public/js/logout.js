const logoutButton = document.querySelector('#logout-button')

logoutButton.addEventListener('click', async () => {
    try{
      console.log('this runs')
      const responce = await fetch('/api/user/logout', { //sends a POST to logout the user
        method: 'POST',
        headers: {
          'Content-Type': 'application/javascript',
        },
      })
      if (responce.ok) {
        document.location.replace('/') //Sends you to the homepage
      } else {
        alert('Logout Failed')
      }
    }
    
    catch(err) {
      console.error(err)
    }
    
  
  })