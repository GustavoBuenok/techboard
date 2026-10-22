export function Label({ children, htmlFor }) {
  return (
    <label className="text-white text-base font-normal" htmlFor={htmlFor}>
      {children}
    </label>
  )
}