const mainBlog = document.querySelectorAll('.main-blog')
const commentSection = document.querySelectorAll('.comment-section')

const displayComments = (i) => {
    console.log(mainBlog[i])
    console.log(commentSection[i])
}

for(let i=0; i< commentSection.length; i++){
    const call = () => {
        displayComments(i)
    }
    mainBlog[i].addEventListener('click', call)
}


