
import { Container } from 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import AboutUs from './screens/AboutUs'
import ProductScreen from './screens/ProductScreen'

function App() {
    return (

        <Router>
            <Header />
            <main className="py-3 mt-4 pt-4">
                <Container>
                    <Routes>
                        {/* <Route path='/' component={HomeScreen} exact /> */}
                        <Route path='/' element={<HomeScreen />} exact />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/product/:id' element={<ProductScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>

    );
}

export default App;