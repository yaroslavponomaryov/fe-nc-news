import axios from "axios"

const ncNews = axios.create({baseURL:'https://northcoders-news-jduz.onrender.com/api'})

export const getAllArticles = (topic) => {
    return ncNews
        .get('/articles/', {params: {
            topic
        }})
        .then((res) => {
            return res.data;
        })
}

export const getArticleById = (id) => {
    return ncNews
        .get(`/articles/${id}`)
        .then((res) => {
            return res.data
        })

}

export const getCommentsForArticle = (article_id) => {
    return ncNews
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data
    })
}

export const updateArticleVotes = (article_id, vote) => {
    
    return ncNews
        .patch(`/articles/${article_id}`, {inc_votes: vote})
}

export const getAllTopics = () => {
    return ncNews
        .get('/topics/')
        .then(({data})=>{
            return data
        })
}