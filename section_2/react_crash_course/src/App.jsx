import Post from './components/Post';
import PostList from './components/PostList.jsx';

const names = ["Jonathan", "Manuel"]

function App() {
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

  return (
    <main>
     <PostList posts={posts} />
    </main>
  );
}

export default App;
