import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/AdminNav'
import Sidebar from '../../components/Sidebar'
import TabOption from '../../components/TabOption'
import MainContent from './Main'
import { Grid } from '@mui/material'

const Home = (props) => {
  const [mode, setMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mui-mode') ?? 'dark'
    }
    return 'dark'
  })
  useEffect(() => {})
  const getValue = (value) => {
    setMode(value)
  }
  return (
    <div className={`h-[625px]  ${mode === 'dark' ? 'bg-slate-900' : '#f7f8fa'}`}>
      <div className={`border-b-2 `}>
        <AdminNav />
      </div>
      <Grid
        container
        spacing={1}
        sx={{
          height: '570px'
        }}
      >
        <Grid
          item
          md={0.7}
          sx={{
            borderRight: 'solid 0.5px white',
            marginTop: '10px',
            marginLeft: '5px'
          }}
        >
          <div className='  pt-2'>
            <Sidebar />
          </div>
        </Grid>
        <Grid
          item
          md={2.5}
          sx={{
            borderRight: 'solid 0.5px white',
            marginTop: '10px',
            marginLeft: '5px'
          }}
        >
          <div className=''>
            <TabOption />
          </div>
        </Grid>
        <Grid item md={8.5}>
          <div className=''>
            <MainContent onClick={getValue} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

Home.propTypes = {}

export default Home
