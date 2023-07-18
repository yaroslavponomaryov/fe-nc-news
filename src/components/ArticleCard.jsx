import { Link } from "react-router-dom";

const ArticleCard = ({title, author, date, img, comments, votes, id, text}) => {
    return (
    <section className="card article-card text-center">
    <img src={img} className="card-img-top" alt={`Cover for "${title}" article`}/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {text ? (<p className="card-text">{text}</p>) : null}
    </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Author</b>: {author}</li>
            <li className="list-group-item"><b>Posted:</b> {date}</li>
            <li className="list-group-item"><b>Comments:</b> {comments}</li>
            <li className="list-group-item"><b>Votes:</b> {votes}</li>
        </ul>
        {text ? (null) : (
            <div className="card-body">
                <Link to={`/articles/${id}`} className="btn btn-primary">Read more...</Link>
            </div>
        )}

    </section>
    )
}


export default ArticleCard