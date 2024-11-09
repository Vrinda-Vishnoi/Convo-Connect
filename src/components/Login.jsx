import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import Companies from './companies'
import Candidates from './Candidates'
import Interview from './Interview'
import Lower from './Lower'

const login = () => {
  return (
    <>
      <div className='app'>
        <Header1 />
        <Header2 />
        <div className='shubhi'>
          <Companies />
          <Candidates />
          <Interview />
        </div>
        <Lower />

      </div>
    </>
  )
}

export default login
