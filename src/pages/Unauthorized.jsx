import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header/Header'

function Unauthorized(props) {
  const {} = props

  return (
    <> 
      <Header />
      <h1> 
        You need to sign in to access this page!
      </h1>
    </>
  )
}

Unauthorized.propTypes = {

}

export default Unauthorized
