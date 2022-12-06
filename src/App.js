import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer/Footer'
import Men from "./components/pages/Men/Men";
import Women from './components/pages/Women/Women';
import Kids from './components/pages/Kids/Kids';
import Navbar from './components/layouts/Navbar/Navbar';

function App() {
    return (
      <Router>
        <div className='App'>
         <Navbar />
            <main>
              <Routes>
                <Route path='/' element={<Women />} />
                <Route path='/Men' element={<Men />} />
                <Route path='/Kids' element={<Kids />} />
              </Routes>
            </main>
          <Footer />
         </div>
        </Router>
    )
}

export default App