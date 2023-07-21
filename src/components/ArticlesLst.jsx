import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import ArticleSortDropdown from "./ArticleSortDropdown";

const ArticlesList = ({setSearchParams, searchParams}) => {

    let topic = searchParams.get("topic")
    let sort_by = searchParams.get("sort_by")
    let order = searchParams.get("order")
    
    const [articles, setArticles] = useState([]);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllArticles(topic, sort_by, order)
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
      }, [topic, sort_by, order]);


    return (
        isError ? (<p>Something is wrong</p>) : 
              (
                isLoading ? 
                (
                  <section className="row spinner-border" role="status">
                    <span className="visually-hidden"></span>
                  </section>
                ) : 
                (
        <>
        <ArticleSortDropdown setSearchParams={setSearchParams} searchParams={searchParams}/>
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
        </>
                )
              )
    )
}


export default ArticlesList;