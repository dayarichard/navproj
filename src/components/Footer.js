import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const state = useSelector(s=>s)
  return (
    <footer>length :{state.checkElements.length}</footer>
  )
}

export default Footer