import React from 'react';

function ListaProdutosScreen({ produtos = [] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📋 Lista de Produtos</h2>
      <ul className="space-y-2">
        {produtos.map((produto, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <strong>{produto.nome}</strong><br />
            {produto.quantidade} {produto.unidade} — R$ {produto.preco.toFixed(2)}
          </li>
        ))}
        {produtos.length === 0 && <li className="italic text-gray-500">Nenhum produto adicionado ainda.</li>}
      </ul>
    </div>
  );
}

export default ListaProdutosScreen;
