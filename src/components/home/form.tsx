'use client'
import { useRef } from 'react'
import { createWorld } from '~/actions'

const Form = () => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form>
      <input ref={ref} />
      <button
        type='submit'
        onClick={() => {
          createWorld(ref.current?.value)
        }}
      >
        Create World
      </button>
    </form>
  )
}

export default Form
