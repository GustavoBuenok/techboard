export function CardEvento({ evento }) {
  return (
    <div>
        <img src={evento.capa} alt={evento.titulo} />
        <div>
            <p className="">
                {evento.tema.nome}
            </p>
            <p>
                {evento.data.toLocaleDateString('pt-BR')}
            </p>
            <p>
                {evento.titulo}
            </p>
        </div>
    </div>
  )
}  