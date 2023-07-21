import { useState } from "react";
import { Link } from "react-router-dom";
const ArticleSortDropdown = ({searchParams, setSearchParams}) => {


    const newParams = new URLSearchParams(searchParams);
    return (
        <>
        <section className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort by
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" onClick={(e)=>{
            e.preventDefault()
            newParams.set('sort_by', 'created_at')
            setSearchParams(newParams)

          }}>Date</Link></li>
          <li><Link className="dropdown-item" onClick={(e)=>{
              e.preventDefault()
              newParams.set('sort_by', 'votes')
              setSearchParams(newParams)
            }}>Votes</Link></li>
        </ul>
      </section>
      <section className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Order
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" onClick={(e)=>{
            e.preventDefault()
            newParams.set('order', 'desc')
            setSearchParams(newParams)

          }}>Descending</Link></li>
          <li><Link className="dropdown-item" onClick={(e)=>{
              e.preventDefault()
              newParams.set('order', 'asc')
              setSearchParams(newParams)
            }}>Ascending</Link></li>
        </ul>
      </section>
      </>
    )
}

export default ArticleSortDropdown