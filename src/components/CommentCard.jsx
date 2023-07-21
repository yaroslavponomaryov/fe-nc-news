const CommentCard = ({comment, index}) => {
    return (
        <li className="card border-dark mb-3 comment-card">
        <div className="card-header">Comment #{index}</div>
        <div className="card-body">
            <h5 className="card-title">@{comment.author}</h5>
            <p className="card-text">{comment.body}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item ">
                <div className="row align-items-start">
                    <div className="list-group-item col"><b>Votes:</b> {comment.votes}</div>
                    <div className="list-group-item col"><b>Posted:</b> {comment.created_at}</div>
                </div>
            </li>
        </ul>
        </li>
    )
}

export default CommentCard