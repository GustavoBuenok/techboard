export function Botao({ children }) {
    return (
        <button className="bg-[#17D9B1] border-none px-4 py-2 text-[#212121] text-base font-semibold rounded-lg hover:opacity-80 cursor-pointer">
            {children}
        </button>
    )
}