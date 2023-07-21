function validateComment (str) {

    if(str.length < 20) {
        document.getElementsByClassName('comment-sender-btn')[0].classList.add('disabled')
        document.getElementsByClassName('comment-text')[0].classList.add('is-invalid')
    } else {
        document.getElementsByClassName('comment-sender-btn')[0].classList.remove('disabled')
        document.getElementsByClassName('comment-text')[0].classList.remove('is-invalid')
    }

}

export default validateComment