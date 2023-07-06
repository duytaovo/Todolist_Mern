import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Tooltip, IconButton, Badge, Icon } from '@mui/material'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import NotesIcon from '@mui/icons-material/Notes'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SettingsIcon from '@mui/icons-material/Settings'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import SmsIcon from '@mui/icons-material/Sms'
import CustomLink from '../CustomLink'

const TabOption = (props) => {
  const TabLink = [
    {
      list_top: [
        {
          tiltle: 'Dashboard',
          id: 1,
          to: '/',
          icon: <AppsOutlinedIcon />
        },
        { tiltle: 'Notes', id: 2, icon: <NotesIcon /> },
        { tiltle: 'Tasks', id: 3, icon: <FormatListNumberedIcon /> },
        { tiltle: 'Emails', id: 4, icon: <MarkEmailUnreadIcon /> },
        { tiltle: 'Calendars', id: 5, icon: <CalendarMonthIcon /> },
        { tiltle: 'Settings', id: 6, icon: <SettingsIcon /> }
      ],
      list_bottom: [
        {
          id: 7,
          to: '/',
          color: 'red',
          icon: <LocalPhoneIcon />
        },
        {
          id: 8,
          to: '/',
          color: 'green',
          icon: <MailIcon />
        },
        {
          id: 9,
          to: '/',
          color: 'blue',
          icon: <LinkedInIcon />
        },
        {
          id: 10,
          to: '/',
          color: 'orange',
          icon: <TelegramIcon />
        },
        {
          id: 11,
          to: '/',
          color: 'purple',
          icon: <SmsIcon />
        }
      ]
    }
  ]
  const renderListLinkTop = (list) => {
    return list.map((item) => {
      return (
        <CustomLink key={item.id}>
          <div
            className={`flex w-20 flex-col items-center rounded border-2 p-2 pr-2 text-xs text-[#c3cada] shadow hover:scale-125 hover:bg-white  ${
              item.id === 2 ? 'scale-125 bg-white text-blue-600' : ''
            } hover:text-blue-600`}
          >
            {item.icon}
            <span className=''>{item.tiltle}</span>
          </div>
        </CustomLink>
      )
    })
  }

  const renderSideberLinkBottom = (list) => {
    return list.map((item, index) => {
      return (
        <div key={item.id} className={`m-1 flex flex-col items-center text-sm hover:scale-110 text-[${item.color}]`}>
          <Tooltip
            title={item.tiltle}
            sx={{
              fontSize: '25px',
              color: `${item.color}`
            }}
          >
            {item.icon}
          </Tooltip>
        </div>
      )
    })
  }
  return (
    <div className='h-full  pr-2 pt-2'>
      <div className='item-center flex w-full justify-between '>
        <Tooltip title='My-page'>
          <IconButton className='' sx={{ color: '#c3cada', backgroundColor: 'white', margin: '0 5px' }}>
            <Badge>
              <PersonIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title='Setting'>
          <IconButton className='' sx={{ color: '#c3cada', backgroundColor: 'white', margin: '0 5px' }}>
            <Badge>
              <MoreHorizIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </div>
      <div className='item-center flex justify-center'>
        <img
          src='https://galaxylands.com.vn/wp-content/uploads/2022/10/ca-si-son-tung-mtp-4.jpg'
          alt=''
          className='h-16 w-16 rounded-full'
        />
      </div>
      <div className='my-3 flex w-full flex-col items-center justify-between text-[#4f5f7b]'>
        <p>Sơn Tùng</p>
        <p className=''>mtp.entertainment</p>
      </div>
      <div className='flex items-center justify-center'>
        <ul className='flex w-40 flex-wrap items-center justify-between '>{renderListLinkTop(TabLink[0].list_top)}</ul>
      </div>
      <div>
        <ul className='ml-6 mt-2 flex w-40 cursor-pointer items-center justify-center rounded-full border-2 text-center'>
          {renderSideberLinkBottom(TabLink[0].list_bottom)}
        </ul>
      </div>
    </div>
  )
}

TabOption.propTypes = {}

export default TabOption
