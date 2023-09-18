import { useEffect, useState } from 'react';

function ApiData({ data }) {
  const [apiData, setApiData] = useState(data);
  const result = [];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  for (let i = 0; i < 5; i++) {
    if (arr.length === 0) {
      break
    }
    const i = Math.floor(Math.random() * arr.length);
    const s = arr.splice(i, 1)[0];
    result.push(s);
  }

  useEffect(() => {
    // Use esta função para buscar dados da API.
    async function fetchData() {
      try {
        const response = await fetch('https://schemaapi.vercel.app/api/schemaapi@telloauguato/fivery'); // Substitua pela URL da sua API.
        const newData = await response.json();
        setApiData(newData.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    }

    // Chame a função de busca de dados.
    fetchData();
  }, []);

  return (
    <div>
      <h1>{result.sort((a, b)=>a-b).join(' — ')}</h1>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
}

export default ApiData;