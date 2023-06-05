const newBlogTitle = document.querySelector('#new-blog-title')
const newBlogBody = document.querySelector('#new-blog-body')
const newBlogButton = document.querySelector('#new-blog-button')

const createNewBlog = () => {
    console.log(newBlogTitle.value)
    console.log(newBlogBody.value)
}

newBlogButton.addEventListener('click', createNewBlog)







//MODAL

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
});
