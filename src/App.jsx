import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import ListaProdutosScreen from './screens/ListaProdutosScreen';
import ProductFormScreen from './screens/ProductFormScreen';

function App() {
  const [tela, setTela] = useState('home');
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
    setTela('lista');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🛒 SuperLista Deluxe</h1>
      <div className="flex justify-around mb-6 text-lg">
        <button onClick={() => setTela('home')}>🏠 Home</button>
        <button onClick={() => setTela('lista')}>📋 Lista</button>
        <button onClick={() => setTela('form')}>➕ Produto</button>
      </div>
      {tela === 'home' && <HomeScreen />}
      {tela === 'lista' && <ListaProdutosScreen produtos={produtos} />}
      {tela === 'form' && <ProductFormScreen onAdd={adicionarProduto} />}
    </div>
  );
}

export default App;
