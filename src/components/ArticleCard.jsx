import { Link } from "react-router-dom";

const ArticleCard = ({title, author, date, img, comments, votes}) => {
    return (
    <div className="card article-card text-center">
    <img src={img} className="card-img-top" alt={`Cover for "${title}" article`}/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Author</b>: {author}</li>
            <li className="list-group-item"><b>Posted:</b> {date}</li>
            <li className="list-group-item"><b>Comments:</b> {comments}</li>
            <li className="list-group-item"><b>Votes:</b> {votes}</li>
        </ul>
        <Link to="#" className="btn btn-primary">Read more...</Link>
    </div>
    </div>
    )
}


export default ArticleCard