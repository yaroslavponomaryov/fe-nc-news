import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { getAllArticles, getAllTopics } from './api'
import Home from './components/Home'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesLst'
import SingleArticle from './components/SingleArticle'
import Error from './components/Error'

function App() {

  const [topics, setTopics] = useState([])


  useEffect(()=>{
      getAllTopics()
          .then(({topics})=>{
              setTopics(topics)
          })
  },[]);


  return (
    <>
    <Nav topics={topics}/>
    <main className='container text-center main-body'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/" >
          <Route path="" element={<ArticlesList/>}/>
          <Route path=':article_id' element={<SingleArticle />}/>
      </Route>
        <Route path="*" element={<Error status={404} msg={"Page doesn't exist"}/>}></Route>
      </Routes>
    </main>
    </>
  )
}

export default App
