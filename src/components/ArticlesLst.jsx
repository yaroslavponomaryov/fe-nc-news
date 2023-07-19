import ArticleCard from "./ArticleCard";

const ArticlesList = ({articles}) => {
    return (
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
}


export default ArticlesList;