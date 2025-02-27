import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main d-flex">
        <div className="SidebarWrapper">
          <SideBar/>
        </div>

        <div className="content">
          <Routes>
            <Route path='/' exact={true} element={<Dashboard />} />
            <Route path='/dashboard' exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
