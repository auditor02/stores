import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer/Footer'
import Men from "./components/pages/Men/Men";
import Women from './components/pages/Women/Women';
import Kids from './components/pages/Kids/Kids';
import Checkout from './components/Extras/Checkout/Checkout';
import Navbar from './components/layouts/Navbar/Navbar';
import React from "react";

function App() {

    return (
      <>
        <Router>
          <div className='App'>
            <Navbar />
              <main>
                <Routes>
                  <Route path='/Women' element={<Women />} />
                  <Route path='/Men' element={<Men />} />
                  <Route path='/Kids' element={<Kids />} />
                  <Route path='/Checkout' element={<Checkout />} />
                </Routes>
              </main>
            <Footer />
          </div>
        </Router>
      </>
    )
}

export default App