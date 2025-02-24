import React from 'react'
import ArticleList from '../components/articles/ArticleList'
import { articles } from '../data/article'

const Articles = () => {
  return (
    <div>
      <ArticleList articles={articles}/>
    </div>
  )
}

export default Articles
