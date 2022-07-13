import React from "react";
import Article from "./Article";

function ArticleList({posts}){
  const createArticle = posts.map((post) => {
    return (
      <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    )
  })
  return(
    <main>
      {createArticle}
    </main>
  )
}


export default ArticleList


// title date and preview