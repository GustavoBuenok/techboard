import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import './index.css'
import { Tema } from './components/Tema'

//no react componentes são funções que retornam HTML, e o HTML é escrito em JSX, que é uma sintaxe do React que permite escrever HTML dentro do JavaScript.

function App() {

  const eventos = [
    {
     capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
     tema: temas[0],
     data: new Date(),
     titulo: 'Mulheres no Front' 
    }
    
  ]

  const temas = [
   { id: 1,
    nome: 'Front-end'
  },
  {
    id: 2,
    nome: 'Back-end'
  },
  {
    id: 3,
    nome: 'Devops'
  },  
  {
    id: 4,
    nome: 'Cloud'
  },
  {
    id: 5,
    nome: 'Intelgincia Artificial'
}];


  return(
    <main>
      <header className="bg-[#06151A] justify-center flex py-8">
        <img src="/logo.png" alt="Logo techboard"/>
      </header>
      <section className="flex justify-center bg-gradient-to-b from-[#17D9B1] to-[#06151A]">
        <img className="max-w-[90%]" src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
       <div>
      {temas.map((tema) => (
        <section key={tema.id} >          
          <Tema tema={tema} />
          <CardEvento evento={eventos[0]} />  
        </section>
      ))}
    </div>
    </main>
  )
}

export default App