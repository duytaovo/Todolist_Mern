import React from 'react'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import { Tooltip, IconButton } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Search from '../Search'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const AdminNav = () => {
  return (
    <>
      <div className='mr-2 flex h-12 items-center justify-between'>
        <div className='item-center flex justify-between pl-2 pr-2'>
          <div className='flex w-9 items-center justify-center rounded-full bg-white'>
            <DensityMediumIcon
              sx={{
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                transform: '',
                cursor: 'pointer',
                color: '#c3cada',

                ':hover': {
                  color: 'blue'
                }
              }}
            />
          </div>
          <h4 className='flex cursor-pointer items-center pl-2 pr-2 text-sm font-semibold text-[#4f5f7b] '>
            Constructor
          </h4>
          <ul className='flex cursor-pointer items-center text-sm font-bold'>
            <li className='mr-2 text-sm font-normal text-[#768aad] hover:text-blue-600 '>Dashboard</li>
            <li className='mr-2 text-sm font-normal text-[#768aad] hover:text-blue-600'>About us</li>
            <li className='mr-2 text-sm font-normal text-[#768aad] hover:text-blue-600'>News</li>
            <li className='mr-2 text-sm font-normal text-[#768aad] hover:text-blue-600'>User Policy</li>
            <li className='mr-2 text-sm font-normal text-[#768aad] hover:text-blue-600'>Contacts</li>
          </ul>
          <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-600'>
            <MoreHorizIcon
              sx={{
                color: '#768aad',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>

        <div className=' flex content-center items-center justify-between'>
          <div>
            <Search placeholder={'Search product or other ...'} width={'300px'} />
          </div>
          <div className='flex items-center justify-between'>
            <div
              style={{
                alignItems: 'center',
                width: '90px',
                padding: '0 7px'
              }}
              className='w-30 item-center ml-2 flex h-8 cursor-pointer rounded-2xl bg-white text-xs hover:text-blue-600'
            >
              <PermIdentityIcon
                sx={{
                  width: '20px',
                  height: '20px',
                  color: '#c3cada'
                }}
              />
              <span
                style={{
                  marginLeft: '5px'
                  // color: '#c3cada'
                }}
              >
                Admin
              </span>
            </div>
            <Tooltip title='Notification' sx={{ backgroundColor: 'black' }}>
              <IconButton sx={{ color: 'black', backgroundColor: 'white', margin: '0 5px' }}>
                <NotificationsActiveOutlinedIcon
                  sx={{
                    width: '20px',
                    height: '20px',
                    color: '#c3cada'
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title='Close'>
              <IconButton
                sx={{
                  backgroundColor: 'white',
                  marginRight: '5px'
                }}
              >
                <HighlightOffIcon
                  sx={{
                    width: '20px',
                    height: '20px',
                    color: '#c3cada'
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminNav
