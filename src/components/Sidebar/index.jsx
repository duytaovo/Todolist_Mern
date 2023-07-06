import React from 'react'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import CustomLink from '../CustomLink'
import { IconButton, Tooltip } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PublicIcon from '@mui/icons-material/Public'
import OtherHousesIcon from '@mui/icons-material/OtherHouses'
import avt_meo from '../../assets/avatar-cute-meo-con-than-chet.jpg'
import avt_cute from '../../assets/avatar-cute-1.jpg'
import avt_koala from '../../assets/cute-koala-sleeping-cartoon-illustration_138676-2778.avif'

const sidebarLink = [
  {
    list_top: [
      {
        tiltle: 'Dashboard',
        id: 1,
        to: '/',
        icon: <AppsOutlinedIcon sx={{ fontSize: '20px' }} />
      },
      { tiltle: 'Favorite', id: 2, to: '/', icon: <StarIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Chat box', id: 3, to: '/', icon: <MarkChatUnreadIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Trend', id: 4, to: '/', icon: <TrendingUpIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Browser', id: 5, to: '/', icon: <PublicIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Other', id: 6, to: '/', icon: <OtherHousesIcon sx={{ fontSize: '20px' }} /> }
    ]
  }
]

const Sidebar = () => {
  // render list link
  const renderListLink = (list) => {
    return list.map((item) => {
      return (
        <CustomLink to={item.to} key={item.id}>
          <div className='text-[#c3cada]'>
            <Tooltip
              title={item.tiltle}
              sx={{
                fontSize: '5px'
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: 'white',
                  marginBottom: '5px',
                  borderRadius: '50%',
                  color: '#c3cada'
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          </div>
        </CustomLink>
      )
    })
  }

  // render sidebar item
  const renderSideberLinkTop = () => {
    return sidebarLink.map((item, index) => {
      const { list_top } = item
      return (
        <div key={item.id} className='text-xl text-[#c3cada]'>
          {renderListLink(list_top)}
        </div>
      )
    })
  }

  const renderSideberLinkBottom = () => {
    return sidebarLink.map((item, index) => {
      return (
        <div key={item.id} className='flex-col items-center justify-center text-center'>
          <IconButton>
            <img src={avt_meo} alt='' className='h-6 w-6 cursor-pointer rounded-full hover:bg-black' />
          </IconButton>
          <IconButton>
            <img src={avt_cute} alt='' className=' h-6 w-6 cursor-pointer rounded-full' />
          </IconButton>
          <IconButton>
            <img src={avt_koala} alt='' className=' h-6 w-6 cursor-pointer rounded-full' />
          </IconButton>
        </div>
      )
    })
  }

  return (
    <div className='sidebar flex-center mb-5 flex w-10 flex-col items-center justify-between '>
      <div>
        <ul className='text-[#768aad]'>{renderSideberLinkTop()}</ul>
      </div>
      <div>
        <ul>{renderSideberLinkBottom()}</ul>
      </div>
    </div>
  )
}

export default Sidebar
