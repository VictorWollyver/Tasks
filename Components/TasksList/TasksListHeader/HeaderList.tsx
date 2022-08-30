import React from 'react'
import HeaderListStyles from './HeaderListTasks.styled'

const HeaderList = () => {
  return (
    <HeaderListStyles>
      <span>TASK NAME</span>
      <span>CREATED DATA</span>
      <span>DESCRIPTION TASK</span>
    </HeaderListStyles>
  )
}

export default HeaderList