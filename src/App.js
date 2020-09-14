import React from 'react';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>

        <hr className="mt-5"/>

      <div className="row mt-5">
        <div className="col">
            <h2>Пости</h2>
          <Posts />
        </div>
        <div className="col">
            <h2>Асинхронні пости</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
