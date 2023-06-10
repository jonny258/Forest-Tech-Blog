const newBlogTitle = document.querySelector('#new-blog-title')
const newBlogBody = document.querySelector('#new-blog-body')
const newBlogButton = document.querySelector('#new-blog-button')

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
.then(data => {return data.json()})
.then(data => console.log(data))
.catch(err => console.log(err))
}

newBlogButton.addEventListener('click', createNewBlog)







//MODALs

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



const blogSections = document.querySelectorAll('.dashboard-blog');
const modals = document.querySelectorAll('.modal');

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



