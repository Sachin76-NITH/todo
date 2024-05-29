import React from 'react'
import Left from './Left'

import AuthForm from './AuthForm'
function Main() {
  return (
    <div className='all'>
     <div className='left'> <Left/></div>
     <div className='right'>    <AuthForm/></div>
    </div>
  )
}

export default Main