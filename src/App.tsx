import Navigation from './Components/Navigation/Navigation';
import RouterProvider from './Components/RouterProvider/RouterProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <RouterProvider />
      </>
    </Router>
  )
}

export default App
