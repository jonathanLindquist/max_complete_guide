import Post from './Post';

const PostList = (props) => {

  return (
    <li>
      {props.posts.map((post) =>
        <Post author={post.author} body={post.body} />
      )}
    </li>
  );
};

export default PostList;