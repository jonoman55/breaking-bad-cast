import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import ApiCredit from './components/ui/ApiCredit';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import Footer from './components/ui/Footer';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query])

  return (
    <div className='container'>
      <Header />
      <ApiCredit />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Footer />
    </div>
  );
}

export default App;
