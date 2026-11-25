
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Shop from './components/Shop';
import Footer from './components/Footer';


function App() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Navbar />

            <main className="page-content">

                <Hero />

<Categories categories={categories} />
<Shop />
<Footer />

            </main>
        </>
    );
}

export default App;
