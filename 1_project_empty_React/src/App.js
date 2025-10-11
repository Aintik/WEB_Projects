import React, { useState } from "react";
import Counter from "./Components/Counter";
import Post from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" },
    { id: 4, title: "JavaScript", body: "Description" },
  ]);

  return (
    <div className="App">
      {/*<Counter/>*/}
      {/*<Post value={'222' } item={{title: 0}} number={1} />*/}

      <form>
        <input type="text" placeholder="Name of post" />
        <input type="text" placeholder="Description of post" />
        <MyButton>Create</MyButton>
      </form>

      <PostList posts={posts} title="List of 1" />
    </div>
  );
}

export default App;
