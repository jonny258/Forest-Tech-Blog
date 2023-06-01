const logoutButton = document.querySelector('#logout-button')

logoutButton.addEventListener('click', async () => {
    try{
      console.log('this runs')
      const responce = await fetch('/api/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/javascript',
        },
      })
      if (responce.ok) {
        document.location.replace('/')
      } else {
        alert('Logout Failed')
      }
    }
    
    catch(err) {
      console.error(err)
    }
    
  
  })