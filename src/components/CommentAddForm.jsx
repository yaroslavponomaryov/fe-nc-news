import { useState } from "react"
import { Link } from "react-router-dom"
import { getCommentsForArticle, postComment } from "../api"
import validateComment from "../../utils/utils"
const CommentAddForm = ({article_id, setArticleComments}) => {

    const [comment, setComment] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setArticleComments((currentComments)=> {
            return [...currentComments, {
                comment_id: currentComments[currentComments.length-1].comment_id,
                body: comment,
                article_id: article_id,
                author: 'tickle122',
                votes: 0,
                created_at: new Date().toLocaleString()
            }]
        })
        postComment(article_id, comment)
            .catch((err) => {

                setArticleComments((currentComments)=> {
                    const removeLastComment = [...currentComments]
                    removeLastComment.pop()
                    return removeComment})
                
                alert(`We've got ${err.response.data.status} error: ${err.response.data.msg} :(`)
            })

    }
    return (
            <form className="form-floating mb-3 comment-box" onSubmit={(event)=>{
                handleSubmit(event);
                document.getElementsByClassName('comment-sender-btn')[0].classList.add('disabled')
                setComment('')
            }}>
                <textarea className="form-control comment-text" id="floatingInput"  placeholder="This is a fab article! I like it very much!" value={comment} onChange={(event)=>{
                    setComment(event.target.value)
                    validateComment(comment)
                }}/>
                <label htmlFor="floatingInput">Your comment goes here:</label>
                <p id="validationServer05Feedback" className="invalid-feedback">
                Comment should be at least 20 characters long.
                </p>
                <button type="button comment-button" className="btn btn-outline-primary comment-sender-btn disabled">Post a comment!</button>
            </form>
    )
}

export default CommentAddForm