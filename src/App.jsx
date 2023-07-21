import { useEffect, useState } from 'react'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import './App.css'
import { getAllArticles, getAllTopics } from './api'
import Home from './components/Home'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesLst'
import SingleArticle from './components/SingleArticle'
import Error from './components/Error'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [topics, setTopics] = useState([])


  useEffect(()=>{
      getAllTopics()
          .then(({topics})=>{
              setTopics(topics)
          })
  },[]);
  console.log()
  return (
    <>
    <Nav setSearchParams={setSearchParams} searchParams={searchParams} setQuery={setQuery} topics={topics}/>
    <main className='container text-center main-body'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/articles' >
          <Route path='' element={<ArticlesList setSearchParams={setSearchParams} searchParams={searchParams}/>}/>
          <Route path=':article_id' element={<SingleArticle />}/>
      </Route>
        <Route path="*" element={<Error status={404} msg={"Page doesn't exist"}/>}></Route>
      </Routes>
    </main>
    </>
  )
}

export default App
