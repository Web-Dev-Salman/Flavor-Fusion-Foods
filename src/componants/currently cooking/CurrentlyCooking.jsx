import React from 'react'

export default function CurrentlyCooking({wantoCook}) {
  return (
    <div>
      <h1>{wantoCook.recipe_name}</h1>
    </div>
  )
}
