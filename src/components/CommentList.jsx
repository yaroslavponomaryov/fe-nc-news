import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import { getCommentsForArticle } from "../api"
import Error from "./Error"
import CommentAddForm from "./CommentAddForm"

const CommentList = ({article_id}) => {

    const [articleComments, setArticleComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(undefined)

    useEffect(()=>{
        getCommentsForArticle(article_id)
            .then(({comments})=>{
                setArticleComments(comments)
            })
            .then(()=>{
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsError({status: err.response.data.status, msg: err.response.data.msg})
            })
    }, [articleComments])
    return (
    <>
    <CommentAddForm article_id={article_id} setArticleComments={setArticleComments}/>
    {isLoading ? (
        <section className="row spinner-border" role="status">
            <span className="visually-hidden"></span>
        </section>
    ) : isError ? (isError.status === 404 ? (<p>No one commented this article yet. Be first!</p>) : (<Error status={isError.status} msg={isError.msg}/>)) : (
        <section className="accordion accordion-flush" id="comments">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
                    Show/Hide Comments
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#comments">
                <div className="accordion-body">
                    <ul className="comment-list">{
                        
                        articleComments.map((comment, index) => {
                            return <CommentCard key={index} comment={comment} index={index+1}/>
                        })}
                    </ul>
                </div>
                </div>
            </div>
        </section>
    )}
    </> 
    )
}

export default CommentList