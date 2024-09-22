import Hello from './Hello';
import './App.css';
import Post from './components/Post';

let postArr = [
  {title: 'aaa', sub: 'sub aaa', content: 'aaa aaaa aaa'},
  {title: 'bbb', sub: 'sub bbb', content: 'asjcaskljaskdkasjd'},
  {title: 'ccc', sub: 'sub ccc', content: 'dsafilajslfjskfjd aasdsd'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to React</h2>
        <Hello title="Hello title 1" sub="subtitle 1" />
        <Hello title="Hello title 2" sub="subtitle 2" />
        {/* <Post title="aaa" sub="sub aaa" content="aaa aaaa aaa" />
        <Post title="bbb" sub="sub bbb" content="bbb bbbb bbb" /> */}
        {postArr.map((item, indx) => {
          return(
            <Post key={indx} title={item.title} sub={item.sub} content={item.content}/>
          );
        })
        }
      </header>
    </div>
  );
}

export default App;
