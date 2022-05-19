import React from 'react'

const headerStyle = {
  color: 'hsl(150, 100%, 66%)',
  textTransform: 'uppercase',
  letterSpacing: '0.5rem',
  textAlign: 'center',
  fontSize: '1.4rem',
  fontWeight: 800,
  paddingTop: '1.2rem'
}

export const Header = ({id}) => {
  return (
    <h1 style={headerStyle}>{`Advice #${id}`}</h1>
  )
}
