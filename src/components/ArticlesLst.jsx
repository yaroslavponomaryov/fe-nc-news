import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";

const ArticlesList = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    let topic = searchParams.get("topic")
    topic ? null : topic=''

    console.log(topic)
    const [articles, setArticles] = useState([]);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllArticles(topic)
        .then(({articles}) => {
          setArticles(articles)
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        })
      }, []);


    return (
        isError ? (<p>Something is wrong</p>) : 
              (
                isLoading ? 
                (
                  <div className="row spinner-border" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                ) : 
                (
        <ul className="d-flex flex-column articles-list">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} 
            title={article.title} 
            img={article.article_img_url}
            author={article.author}
            date={article.created_at}
            comments={article.comment_count}
            votes={article.votes} id={article.article_id} className="p-2 flex-grow-2"/>
        })}
        </ul>
                )
              )
    )
}


export default ArticlesList;