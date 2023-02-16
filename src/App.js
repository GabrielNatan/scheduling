import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Default } from './pages/Default';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Default/>}>
            <Route path='user' />
            <Route path='doctor' />
            <Route path='consultas' />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
