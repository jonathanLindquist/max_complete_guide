import Post from './components/Post';

const names = ["Jonathan", "Manuel"]

function App() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <main>
      <Post author={chosenName} body={"Hello, world!"} />
      <Post author={chosenName} />
      <Post author={chosenName} />
      <Post author={chosenName} />
    </main>
  );
}

export default App;
