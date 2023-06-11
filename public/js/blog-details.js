const mainBlog = document.querySelectorAll('.main-blog')
const commentSection = document.querySelectorAll('.comment-section')
const commentInput = document.querySelectorAll('.comment-input')
const commentSubmit = document.querySelectorAll('.comment-submit')


const displayComments = (i) => { //this switchs the display on the comment section
    if (commentSection[i].style.display === 'block') {
        commentSection[i].style.display = 'none'
    }
    else {
        commentSection[i].style.display = 'block'
    }
}

const format_date = (date) => { //formats the date on the frontend
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
}


const addCommentHTML = (commentData, i) => { //makes a comment without having to hard refresh
    const date = format_date(commentData.createdAt);
    const card = document.createElement('section');
    const header = document.createElement('div');
    const author = document.createElement('h6');
    const createdAt = document.createElement('h6');
    const body = document.createElement('p');
  
    card.setAttribute('class', 'comment-card');
    header.setAttribute('class', 'comment-header');
    author.textContent = commentData.author;
    createdAt.textContent = date;
    body.textContent = commentData.body;
  
    header.append(author, createdAt);
    card.append(header, body);
  
    commentSection[i].append(card);
  };
  



const addComment = (i) => { //sends the post request to add a comment to the database
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
                addCommentHTML(data.comment, i) //this function creates a temporary comment to display with out a hard refresh
            }
        })
        .catch(err => console.log(err))
}

for (let i = 0; i < commentSection.length; i++) { //adds event listeners to all the blogs and comment boxes

    const call = () => {
        displayComments(i)
    }
    const add = () => {
        addComment(i)
    }

    commentSubmit[i].addEventListener('click', add)
    mainBlog[i].addEventListener('click', call)
}


