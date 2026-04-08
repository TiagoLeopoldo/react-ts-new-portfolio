import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ScrollToHash from './components/atoms/ScrollToHash/ScrollToHash';

const App = () => {

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:slug" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  )
}

export default App;
