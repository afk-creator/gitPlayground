function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#7c3aed',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1.5rem',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}

export default Button
