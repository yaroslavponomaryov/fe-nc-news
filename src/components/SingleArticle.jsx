import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleCard from "./ArticleCard";
import Error from "./Error";

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(undefined)


    useEffect(()=>{
        getArticleById(article_id)
        .then(({article}) => {
            setArticle(article)
        })
        .then(() => {
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
      </section>) : isError ? (<Error status={isError.status} msg={isError.msg}/>) : (
        <section className="card">
            <img src={article.article_img_url} className="card-img-top" alt={`Cover for "${article.title}" article`}/>
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.body}</p>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Author</b>: {article.author}</li>
                    <li className="list-group-item"><b>Posted:</b> {article.created_at}</li>
                    <li className="list-group-item"><b>Votes:</b> {article.votes}</li>
                </ul>
        </section>
      )

}

export default SingleArticle