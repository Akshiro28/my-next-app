'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      <button onClick={() => console.log('Click')} className="px-5 py-2 text-[var(--foreground)] rounded ring ring-[var(--foreground-20)] bg-[var(--foreground-3)]">Add to Cart</button>
    </div>
  )
}

export default AddToCart