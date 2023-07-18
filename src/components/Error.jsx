const Error = ({status, msg}) => {
    return (
        <section className="card text-bg-danger mb-3 align-middle">
        <div className="card-header">What's wrong?</div>
        <div className="card-body">
            <h5 className="card-title">{status} error</h5>
            <p className="card-text">{msg}</p>
        </div>
        </section>
    )
}

export default Error