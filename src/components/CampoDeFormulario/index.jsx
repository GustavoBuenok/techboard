export function CampoDeFormulario({ children }) {
  return (
    <fieldset className="flex flex-col gap-2 p-0 m-0">
      {children}
    </fieldset>
  )
}