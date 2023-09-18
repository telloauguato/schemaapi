import { useEffect, useState } from 'react';

function ApiData({ data }) {
  const [apiData, setApiData] = useState(data);

  useEffect(() => {
    // Use esta função para buscar dados da API.
    async function fetchData() {
      try {
        const response = await fetch('https://schemaapi.vercel.app/api/schemaapi@telloauguato/fivery'); // Substitua pela URL da sua API.
        const newData = await response.json();
        setApiData(newData);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    }

    // Chame a função de busca de dados.
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dados da API:</h1>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
}

export default ApiData;
