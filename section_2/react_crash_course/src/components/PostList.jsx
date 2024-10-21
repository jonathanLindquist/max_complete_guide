import Post from './Post';
import NewPost from './NewPost.jsx';

import classes from './PostList.module.css';
import { useState } from 'react';

const posts = [
  {
    author: "Jonathan",
    body: "This is a post by Jonathan"
  },
  {
    author: "Manuel",
    body: "This is a post by Manuel"
  }
]

const PostList = () => {

  const [bodyData, setBodyData] = useState('');
  const [authorData, setAuthorData] = useState('');

  function bodyChangeHandler(event) {
    console.log(event.target.value);
    setBodyData(event.target.value);
  }

  function authorChangeHandler(event) {
    console.log(event.target.value);
    setAuthorData(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={classes.posts}>
        <Post author={authorData} body={bodyData} />
        {posts.map((post) =>
          <Post author={post.author} body={post.body} />
        )}
      </ul>
    </>
  );
};

export default PostList;