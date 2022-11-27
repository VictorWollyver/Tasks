import React from 'react'
import HeaderListStyles from './HeaderListTasks.styled'

const HeaderList = () => {
  return (
    <HeaderListStyles>
      <span>TASK NAME</span>
      <span>DESCRIPTION</span>
      <span>STATUS</span>
    </HeaderListStyles>
  )
}

export default HeaderList