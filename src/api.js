import axios from "axios"

const ncNews = axios.create({baseURL:'https://northcoders-news-jduz.onrender.com/api'})

export const getAllArticles = () => {
    return ncNews
        .get('/articles')
        .then((res) => {
            return res.data;
        })
}