import React, { useState } from 'react'
import Post from "./PostItem";


const PostList = ({posts, title}) => {

  return (
    <div className="PostList">
      <h1 style={{ textAlign: "center" }}>{ title}</h1>
      {posts.map(item => (
        <Post post={item} key={item.id} />
      ))}
    </div>
  );
}

export default PostList;