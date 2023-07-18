import { Link } from "react-router-dom";

const ArticleCard = ({title, author, date, img, comments, votes, id, text}) => {
    return (
    <section className="card mb-3">
    <div className="row g-0">
        <div className="col-md-4">
        <img src={img} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <ul className="row align-items-start">
            <li className="list-group-item col"><b>Author</b>: {author}</li>
            <li className="list-group-item col"><b>Comments:</b> {comments}</li>
            <li className="list-group-item col"><b>Votes:</b> {votes}</li>
        </ul>
            <div className="card-body">
                <Link to={`/articles/${id}`} className="btn btn-primary">Read more...</Link>
            </div>


            <p className="card-text"><small className="text-body-secondary">Last updated {date}</small></p>
        </div>
        </div>
    </div>

    </section>
    )
}


export default ArticleCard