const newBlogTitle = document.querySelector('#new-blog-title')
const newBlogBody = document.querySelector('#new-blog-body')
const newBlogButton = document.querySelector('#new-blog-button')

const updateBlogTitle = document.querySelectorAll('.update-blog-title')
const updateBlogBody = document.querySelectorAll('.update-blog-body')
const updateBlogButton = document.querySelectorAll('.update-blog-button')
const deleteBlogButton = document.querySelectorAll('.delete-blog-button')

const blogSections = document.querySelectorAll('.dashboard-blog');
const modals = document.querySelectorAll('.modal');

const updateBlog = (title, body, id) => {
  fetch('/api/blog/', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({ 
        title: title,
        body: body,
        id: id
     })
})
.then(data => {return data.json()})
.then(data => console.log(data))
.catch(err => console.log(err))
}

const deleteBlog = (title, body, id) => {
  fetch('/api/blog/', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({ 
        title: title,
        body: body,
        id: id
     })
})
.then(data => {return data.json()})
.then(data => console.log(data))
.catch(err => console.log(err))
}


for(let i=0; i<updateBlogTitle.length; i++){
  updateBlogButton[i].addEventListener('click', () => {
    updateBlog(updateBlogTitle[i].value, updateBlogBody[i].value, updateBlogTitle[i].name)
    modals[i].style.display = 'none'
  })

  deleteBlogButton[i].addEventListener('click', () => {
    deleteBlog(updateBlogTitle[i].value, updateBlogBody[i].value, updateBlogTitle[i].name)
    modals[i].style.display = 'none'
  })
}

const createNewBlog = () => {
  fetch('/api/blog/newblog', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({ 
        title: newBlogTitle.value,
        body: newBlogBody.value

     })
})
.then(data =>  data.json())
.then(data => console.log(data))
.catch(err => console.log(err))

modal.style.display = 'none';
}

newBlogButton.addEventListener('click', createNewBlog)








//MODALS STUFF

const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
})





blogSections.forEach((section, index) => {
  section.addEventListener('click', () => {
    modals[index].style.display = 'block';

    // Add click event listener to the window to close the modal when clicking outside of it
    window.addEventListener('click', closeModalOutside);
  });
});

modals.forEach(thismodal => {
  const closeBtn = thismodal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    thismodal.style.display = 'none';

    // Remove the event listener from the window when the modal is closed
    window.removeEventListener('click', closeModalOutside);
  });
});

// Function to close the modal when clicking outside of it
function closeModalOutside(event) {
  modals.forEach(thismodal => {
    if (event.target === thismodal) {
      thismodal.style.display = 'none';

      // Remove the event listener from the window when the modal is closed
      window.removeEventListener('click', closeModalOutside);
    }
  });
}



