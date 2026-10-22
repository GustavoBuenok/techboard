import { CampoDeFormulario } from "../CampoDeFormulario"
import { CampoDeInput } from "../CampoDeEntrada"
import { Label } from "../Label"
import { TituloFormulario } from "../TituloFormulario"
import { Botao } from "../Botao"
import { ListaSuspensa } from "../ListaSuspensa"


export function FormularioDeEvento() {
  return (
    <form className="bg-[#212121] py-8 px-7 flex flex-col justify-center rounded-2xl w-96 max-w-[90%] mx-auto my-16 gap-8">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="flex flex-col gap-4">
        <CampoDeFormulario>
        <Label htmlFor="nomeEvento">
          Qual o nome do evento?
        </Label>
        <CampoDeInput 
          type="text" 
          name="nomeEvento" 
          id="nomeEvento" 
          placeholder="Summer dev hits"
        />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do evento
        </Label>
        <CampoDeInput 
          type="date" 
          name="dataEvento" 
          id="dataEvento" 
          placeholder="Summer dev hits"
        />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do evento
        </Label>
        <ListaSuspensa/>
      </CampoDeFormulario>
      </div>
      <div className="flex justify-center">
        <Botao>
            Criar evento
        </Botao>
      </div>
      
      
    </form>
  )
}