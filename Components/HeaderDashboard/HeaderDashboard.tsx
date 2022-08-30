
import React from 'react'
import HeaderDashboardStyles from './HeaderDashboard.styled'

interface HeaderDashboardProps {
  username: string;
  length: number;
  setModal: Function
}

const HeaderDashboard = ({ username, length, setModal }:HeaderDashboardProps) => {
  return (
    <HeaderDashboardStyles>
      <div>
        <h1 style={{textTransform: 'capitalize'}}>{ username }<span>|</span>{length} tasks</h1>
      </div>
      <button onClick={() => setModal((modal:boolean) => !modal )}>Add Task</button> 
    </HeaderDashboardStyles>
  )
}

export default HeaderDashboard