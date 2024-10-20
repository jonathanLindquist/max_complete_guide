function Post(props) {
  return <div>
    <p>{props.author}</p>
    <p>{props.body || "Default body, everything is awesome"}</p>
  </div>;
}

export default Post;