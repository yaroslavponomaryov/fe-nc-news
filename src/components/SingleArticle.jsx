import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../api";
import Error from "./Error";
import CommentList from "./CommentList";
import CommentAddForm from "./CommentAddForm";

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(undefined)
    const [userVotes, setUserVotes] = useState(0)

    useEffect(()=>{
        getArticleById(article_id)
        .then(({article}) => {
            setArticle(article)
        })
        .then(() => {
            setIsLoading(false)
        })
        .catch(() => {
            setIsLoading(false)
            setIsError({status: err.response.data.status, msg: err.response.data.msg})
        })
    }, [])

    const handleClick = (vote) => {
        setUserVotes((currentVotes) => {return currentVotes + vote})
        updateArticleVotes(article_id, vote)
            .catch((err) => {
                setUserVotes((currentVotes) => {return currentVotes + -vote})
                alert('Something went wrong...')
            })
    }

    return isLoading ? (
        <section className="row spinner-border" role="status">
        <span className="visually-hidden"></span>
      </section>) : isError ? (<Error status={isError.status} msg={isError.msg}/>) : (
        <>
        <section className="card single-article">
            <img src={article.article_img_url} className="card-img-top" alt={`Cover for "${article.title}" article`}/>
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.body}</p>
            </div>
                <ul className="row align-items-start single-article-ul">
                    <li className="col list-group-item"><b>Author</b>: {article.author}</li>
                    <li className="col list-group-item">
                        <div className="likes-container">

                            <button type="button" className="btn btn-outline-primary like" aria-label="like" onClick={(e) => {handleClick(1)
                            e.target.classList.add('disabled')
                            document.getElementsByClassName("dislike")[0].classList.remove('disabled')
                            }}>👍{article.votes + userVotes >= 0 ? (" " + (article.votes + userVotes)) : (null)}</button>
                            
                            <button type="button" className="btn btn-outline-primary dislike " aria-label="dislike" onClick={(e) => {handleClick(-1)
                            e.target.classList.add('disabled')
                            document.getElementsByClassName("like")[0].classList.remove('disabled')
                            }}>👎 {article.votes + userVotes < 0 ? (" " + ((article.votes + userVotes)*-1)) : (null)}</button>

                        </div>
                        </li>
                        
                    <li className="col list-group-item"><b>Posted:</b> {article.created_at}</li>
                </ul>
        </section>
            <CommentList article_id={article_id} />
        </>
      )

}

export default SingleArticle