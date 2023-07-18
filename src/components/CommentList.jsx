import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import { getCommentsForArticle } from "../api"

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
    }, [])
    return isLoading ? (
        <section className="row spinner-border" role="status">
            <span className="visually-hidden"></span>
        </section>
    ) : isError ? (<Error status={isError.status} msg={isError.msg}/>) : (
        <ul className="comment-list">
            {
                articleComments.map((comment, index) => {
                    return <CommentCard key={index} comment={comment} index={index+1}/>
            })
            }
        </ul>
    )

}

export default CommentList