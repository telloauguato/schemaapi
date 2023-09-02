import Image from 'next/image'

export default function Home() {
  return (<div className="bg-gray-100 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-white">Seja Bem-Vindo à Nossa Página de Destino</h1>
        </div>
      </header>

      {/* Banner de Destaque */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Descubra Nosso Produto Incrível</h2>
          <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis dapibus elit.</p>
          <a href="#inscricao" className="bg-white text-blue-900 hover:bg-blue-700 py-2 px-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out">Inscreva-se Agora</a>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Inscreva-se para Obter Acesso</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-600 font-medium">Nome</label>
              <input type="text" id="nome" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="senha" className="block text-gray-600 font-medium">Senha</label>
              <input type="password" id="senha" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700">Inscrever-se</button>
          </form>
        </div>
      </section>
    </div>) 
}