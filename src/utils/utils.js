export const articleVotesChanger = (article, vote) => {
    const newArticle = {...article}
    newArticle.votes += vote
    return newArticle
}