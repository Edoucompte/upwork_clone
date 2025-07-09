function TypeButton({ label, value, onClick }) {
  return (
    <button
      onClick={() => onClick(value)}
      className="p-2 ms-10 w-1/2 text-black font-semibold"
    >
      {label}
    </button>
  )
}

export default TypeButton;