const Post = (props) => {
  console.log(`arrow this value: ${this}`);

  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body || 'Default body, everything is awesome'}</p>
    </div>
  );
};

export default Post;