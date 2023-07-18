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
          <ArticleCard 
              title={article.title} 
              text={article.body}
              img={article.article_img_url}
              author={article.author}
              date={article.created_at}
              comments={article.comment_count}
              votes={article.votes} id={article.article_id} className="p-2 flex-grow-2"/>
      )

}

export default SingleArticle