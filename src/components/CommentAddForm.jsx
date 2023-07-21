import { useEffect, useState } from "react"
import { postComment } from "../api"
import validateComment from "../../utils/utils"
const CommentAddForm = ({article_id, setArticleComments}) => {

    const [comment, setComment] = useState('')
    const [isSending, setIsSending] = useState(false)

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
            .then(()=>{
                setIsSending(false)
                alert('Thanks for commenting this article!')
            })
            .catch((err) => {
                setIsSending(false)
                setArticleComments((currentComments)=> {
                    const removeLastComment = [...currentComments]
                    removeLastComment.pop()
                    return removeLastComment
                })
                
                alert(`We've got ${err.response.data.status} error: ${err.response.data.msg} :(`)
            })

    }
    
    return isSending ? (<p>Your comment is on its way to be seen...</p>) : (
            <form className="form-floating mb-3 comment-box" onSubmit={(event)=>{
                setIsSending(true)
                handleSubmit(event);
                document.getElementsByClassName('comment-sender-btn')[0].classList.add('disabled')
                setComment('')
            }}>
                <textarea className="form-control comment-text" id="floatingInput" placeHolder="This is a comment" value={comment} onChange={(event)=>{
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