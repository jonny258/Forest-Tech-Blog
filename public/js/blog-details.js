const mainBlog = document.querySelectorAll('.main-blog')
const commentSection = document.querySelectorAll('.comment-section')
const commentInput = document.querySelectorAll('.comment-input')
const commentSubmit = document.querySelectorAll('.comment-submit')


const displayComments = (i) => {
    if (commentSection[i].style.display === 'block') {
        commentSection[i].style.display = 'none'
    }
    else {
        commentSection[i].style.display = 'block'
    }
}

const format_date = (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
}

//Will need to change when I style it
const addCommentHTML = (commentData, i) => {
    const date = format_date(commentData.createdAt)
    const card = document.createElement('section')
    const author = document.createElement('h4')
    const createdAt = document.createElement('h4')
    const body = document.createElement('p')

    card.setAttribute('class', 'comment-card')
    author.textContent = commentData.author
    createdAt.textContent = date
    body.textContent = commentData.body

    card.append(author, createdAt, body)

    commentSection[i].append(card)
}



const addComment = (i) => {
    fetch('/api/blog/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            comment: commentInput[i].value,
            blog_id: i + 1
        })
    })
        .then(data => { return data.json() })
        .then(data => {

            if (data.alert) {
                alert(data.alert);
            } else {
                addCommentHTML(data.comment, i)
            }
        })
        .catch(err => console.log(err))
}

for (let i = 0; i < commentSection.length; i++) {

    const call = () => {
        displayComments(i)
    }
    const add = () => {
        addComment(i)
    }

    commentSubmit[i].addEventListener('click', add)
    mainBlog[i].addEventListener('click', call)
}


