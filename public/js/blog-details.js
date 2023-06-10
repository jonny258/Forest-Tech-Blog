const mainBlog = document.querySelectorAll('.main-blog')
const commentSection = document.querySelectorAll('.comment-section')
const commentInput = document.querySelectorAll('.comment-input')
const commentSubmit = document.querySelectorAll('.comment-submit')


const displayComments = (i) => {
    if(commentSection[i].style.display === 'block'){
        commentSection[i].style.display = 'none'
    }
    else{
        commentSection[i].style.display = 'block'
    }
}


const addComment = (i) => {
    console.log(commentInput[i].value)
    fetch('/api/blog/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ 
            comment: commentInput[i].value,
            blog_id: i+1
         })
    })
    .then(data => {return data.json()})
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

for(let i=0; i< commentSection.length; i++){
    
    const call = () => {
        displayComments(i)
    }
    const add = () => {
        addComment(i)
    }

    commentSubmit[i].addEventListener('click', add)
    mainBlog[i].addEventListener('click', call)
}


