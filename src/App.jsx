import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import './index.css'

//no react componentes são funções que retornam HTML, e o HTML é escrito em JSX, que é uma sintaxe do React que permite escrever HTML dentro do JavaScript.

function App() {
  return(
    <main>
      <header className="bg-[#06151A] justify-center flex py-8">
        <img src="/logo.png" alt="Logo techboard"/>
      </header>
      <section className="flex justify-center bg-gradient-to-b from-[#17D9B1] to-[#06151A]">
        <img className="max-w-[90%]" src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App