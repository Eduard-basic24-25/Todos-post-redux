import HomePage from './components/HomePage'
import Todos from './components/Todos'
import Posts from './components/Posts'
import NavBar from './components/NavBar'

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar/>
          <Routes>
            <Route path='/todos' element={<Todos/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
    </div>
  );
}

export default App;
