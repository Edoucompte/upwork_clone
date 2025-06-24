import React from 'react'

export default function Searchbar() {
  return (
    <form className='border-2 p-2 rounded-xl'
      onSubmit={
        (e) => {
            e.preventDefault()
        }
    }>
        <span>Icon</span>
        <input type="text" />
        <button type="submit">Talent</button>
    </form>
  )
}
