import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { getAllArticles } from './api'
import Home from './components/Home'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesLst'
import SingleArticle from './components/SingleArticle'
import Error from './components/Error'

function App() {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
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
  }, []);


  return (
    <>
    <Nav/>
    <main className='container text-center main-body'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={ 
          isError ? (<p>Something is wrong</p>) : (
          isLoading? (<div className="row spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>) : (<ArticlesList articles={articles}/>)
        )
        }></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
        <Route path="*" element={<Error status={404} msg={"Page doesn't exist"}/>}></Route>
      </Routes>
    </main>
    </>
  )
}

export default App
