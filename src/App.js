import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout/layout';
import Counter from './components/Counter/Counter';
import ToDo from './components/ToDo/ToDo';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Counter/>}/>
            <Route path="/todo" element={<ToDo/>}/>
            <Route path="/table" element={<Table/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
