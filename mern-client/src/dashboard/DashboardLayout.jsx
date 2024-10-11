import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import { SideBar } from './Sidebar'
import { useGetUserInfo } from '../hooks/useGetUserInfo'

const DashboardLayout = () => {

  const { isAuth } = useGetUserInfo();
    if (!isAuth) {
      return <Navigate  to="/login" />;
    }
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
