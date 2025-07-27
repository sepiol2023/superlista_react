import React, { useState } from 'react';

function ProductFormScreen({ onAdd }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [unidade, setUnidade] = useState('kg');
  const [preco, setPreco] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome) return;
    onAdd({ nome, quantidade, unidade, preco });
    setNome('');
    setQuantidade(1);
    setUnidade('kg');
    setPreco(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <div>
        <label className="block mb-1">Nome do produto</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} className="border p-2 w-full rounded" />
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block mb-1">Quantidade</label>
          <input type="number" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} className="border p-2 w-full rounded" />
        </div>
        <div className="flex-1">
          <label className="block mb-1">Unidade</label>
          <input value={unidade} onChange={(e) => setUnidade(e.target.value)} className="border p-2 w-full rounded" />
        </div>
        <div className="flex-1">
          <label className="block mb-1">Preço</label>
          <input type="number" value={preco} onChange={(e) => setPreco(Number(e.target.value))} className="border p-2 w-full rounded" />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Adicionar</button>
    </form>
  );
}

export default ProductFormScreen;
