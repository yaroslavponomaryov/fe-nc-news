import { useState } from "react"
import { Link } from "react-router-dom"
import { getCommentsForArticle, postComment } from "../api"
const CommentAddForm = ({article_id, setArticleComments}) => {
    const [comment, setComment] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(article_id, comment)
            .then(() => {
                return getCommentsForArticle(article_id)
            })
            .then(({comments})=>{
                setArticleComments(comments)
                setComment('')
            })
            .catch((err) => {
                alert(`We've got ${err.response.data.status} error: ${err.response.data.msg} :(`)
            })

    }
    return (
            <form className="form-floating mb-3 comment-box" onSubmit={(event)=>{
                handleSubmit(event);
            }}>
                <textarea className="form-control comment-text" id="floatingInput"  placeholder="This is a fab article! I like it very much!" value={comment} onChange={(event)=>{setComment(event.target.value)}}/>
                <label htmlFor="floatingInput">Your comment goes here:</label>
                <button type="button comment-button" className="btn btn-outline-primary">Post a comment!</button>
            </form>
    )
}

export default CommentAddForm