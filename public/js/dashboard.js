

const newBlogTitle = document.querySelector('#new-blog-title')
const newBlogBody = document.querySelector('#new-blog-body')
const newBlogButton = document.querySelector('#new-blog-button')

const updateBlogTitle = document.querySelectorAll('.update-blog-title')
const updateBlogBody = document.querySelectorAll('.update-blog-body')
const updateBlogButton = document.querySelectorAll('.update-blog-button')
const deleteBlogButton = document.querySelectorAll('.delete-blog-button')

const blogSections = document.querySelectorAll('.dashboard-blog');
const modals = document.querySelectorAll('.modal');

const blogRender = document.querySelector('#blog-render')

const updateBlog = async (title, body, id) => {
  try {
    const update = document.getElementById(id)
    update.children[0].children[0].innerText = title
    const response = await fetch('/api/blog/', {
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

    if (response.ok) {
      console.log(response)
    }
  }


  catch (err) {
    console.error(err)
  }
}

const deleteBlog = async (title, body, id) => {
  try {
    document.getElementById(id).remove()
    const response = await fetch('/api/blog/', {
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

    if (response.ok) {
      console.log(response)
    }
  }
  catch (err) {
    console.error(err)
  }
}


for (let i = 0; i < updateBlogTitle.length; i++) {
  updateBlogButton[i].addEventListener('click', () => {
    updateBlog(updateBlogTitle[i].value, updateBlogBody[i].value, updateBlogTitle[i].name)
    modals[i].style.display = 'none'
  })

  deleteBlogButton[i].addEventListener('click', () => {
    deleteBlog(updateBlogTitle[i].value, updateBlogBody[i].value, updateBlogTitle[i].name)
    modals[i].style.display = 'none'
  })
}


//Will need to change once I style
const createBlogHTML = (id, title, body) => {
  const section = document.createElement('section');
  section.id = id;

  const blogSection = document.createElement('section');
  blogSection.classList.add('dashboard-blog');
  blogSection.setAttribute('data-modal-target', id);

  const h2 = document.createElement('h2');
  h2.textContent = title;
  blogSection.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = 'Click to edit';
  blogSection.appendChild(p);

  section.appendChild(blogSection);

  const modalDiv = document.createElement('div');
  modalDiv.id = 'modal-' + id;
  modalDiv.classList.add('modal');

  const modalContentDiv = document.createElement('div');
  modalContentDiv.classList.add('modal-content');

  const h4 = document.createElement('h4');
  h4.textContent = 'Edit blog';
  modalContentDiv.appendChild(h4);

  const closeButtonEl = document.createElement('span');
  closeButtonEl.classList.add('close');
  closeButtonEl.textContent = '×';
  modalContentDiv.appendChild(closeButtonEl);

  const titleDiv = document.createElement('div');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title';
  titleDiv.appendChild(titleLabel);
  const titleInput = document.createElement('input');
  titleInput.classList.add('update-blog-title');
  titleInput.value = title;
  titleInput.name = id;
  titleDiv.appendChild(titleInput);
  modalContentDiv.appendChild(titleDiv);

  const bodyDiv = document.createElement('div');
  const bodyLabel = document.createElement('label');
  bodyLabel.textContent = 'Body';
  bodyDiv.appendChild(bodyLabel);
  const bodyTextArea = document.createElement('textarea');
  bodyTextArea.classList.add('update-blog-body');
  bodyTextArea.textContent = body;
  bodyDiv.appendChild(bodyTextArea);
  modalContentDiv.appendChild(bodyDiv);

  const buttonDiv = document.createElement('div');
  const updateButton = document.createElement('button');
  updateButton.classList.add('update-blog-button');
  updateButton.textContent = 'Update';
  buttonDiv.appendChild(updateButton);
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-blog-button');
  deleteButton.textContent = 'Delete';
  buttonDiv.appendChild(deleteButton);
  modalContentDiv.appendChild(buttonDiv);

  modalDiv.appendChild(modalContentDiv);
  section.appendChild(modalDiv);
  blogRender.append(section)
}




const createNewBlog = async () => {
  try {
    const response = await fetch('/api/blog/newblog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newBlogTitle.value,
        body: newBlogBody.value,
      }),
    });

    const data = await response.json();
    const id = data.blog.blog_id;

    createBlogHTML(id, newBlogTitle.value, newBlogBody.value);
    modal.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};


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



