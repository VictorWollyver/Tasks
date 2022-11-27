
import React from 'react'
import HeaderDashboardStyles from './HeaderDashboard.styled'
import Router from 'next/router';

interface HeaderDashboardProps {
  username?: string | string[];
  length: number;
  setModal: Function
}

const HeaderDashboard = ({ username, length = 0, setModal }:HeaderDashboardProps) => {

  function logOut() {
    window.localStorage.token = null
    Router.push('/') 
  }

  return (
    <HeaderDashboardStyles>
      <div>
        <h1 style={{textTransform: 'capitalize'}}>{ username }<span>|</span>{length} tasks</h1>
        <span className='separator'></span>
        <button className='logout' onClick={logOut}>Logout</button>
      </div>
      <button className='add-task' onClick={() => setModal((modal:boolean) => !modal )}>Add Task</button> 
    </HeaderDashboardStyles>
  )
}

export default HeaderDashboard