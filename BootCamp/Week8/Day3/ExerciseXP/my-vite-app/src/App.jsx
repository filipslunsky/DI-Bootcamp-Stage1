import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import { FavoriteColor, Child } from './components/FavoriteColor';

function App() {
  return (
    <>
      {/* <h1>Simulation 1</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <br />
      <h1>Simulation 2</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <br />
      <h1>Simulation 3</h1>
      <BuggyCounter /> */}
      <FavoriteColor />

    </>
  )
}

export default App
