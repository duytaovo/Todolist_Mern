import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SortIcon from '@mui/icons-material/Sort'
import TimelineIcon from '@mui/icons-material/Timeline'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { IconButton, Tooltip } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

import './styles.css'
import { DndProvider } from 'react-dnd'
import ColumnTest from '../Draggable/Column'
import { HTML5Backend } from 'react-dnd-html5-backend'

const sidebarLink = [
  {
    list_top: [
      {
        tiltle: 'Tasks',
        id: 0,
        icon: <PlaylistAddCheckIcon sx={{ fontSize: '20px' }} />
      },
      { tiltle: 'Boards', id: 1, icon: <DashboardIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Calendars', id: 2, icon: <CalendarMonthIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Gantt', id: 3, icon: <SortIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Timeline', id: 4, icon: <TimelineIcon sx={{ fontSize: '20px' }} /> },
      { tiltle: 'Activity', id: 5, icon: <LocalActivityIcon sx={{ fontSize: '20px' }} /> }
    ]
  }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function TabMain({ onClick, dragType, returnItemsForColumn }) {
  const [value, setValue] = React.useState(1)
  const { mode, setMode } = useColorScheme()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const renderListLink = () => {
    return sidebarLink[0].list_top.map((item, index) => {
      return (
        <div
          key={item.id}
          className={`text-xs text-[#768aad] ${
            item.id === 1 && 'text-blue-600'
          } flex items-center justify-between hover:border-b-blue-600 hover:text-blue-600`}
        >
          <span className='font-semibold'> {item.icon}</span>
          <Tab
            label={item.tiltle}
            {...a11yProps(index)}
            sx={{
              fontSize: '10px',
              fontWeight: '600'
            }}
          ></Tab>
        </div>
      )
    })
  }

  // const [theme, setTheme] = useState('light')

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{
            borderBottom: 1,
            borderColor: 'divider'
          }}
        >
          {renderListLink()}
          <div>
            <Tooltip title='Save'>
              <IconButton sx={{ color: '#c3cada' }}>
                <SaveIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
              <IconButton sx={{ color: '#c3cada' }}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title='Dark mode'>
              <IconButton
                sx={{ color: '#c3cada' }}
                onClick={() => {
                  setMode(mode === 'light' ? 'dark' : 'light')
                  onClick ?? onClick(mode)
                }}
                color='inherit'
              >
                {mode === 'dark' ? <LightModeOutlinedIcon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </div>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1} className=''>
        <DndProvider backend={HTML5Backend}>
          <Box
            sx={{
              width: '100%',
              height: 'calc(100vh - 60px - 48px)'
            }}
          >
            <ColumnTest status={false} columntitle='Do it' dragType={dragType}>
              {returnItemsForColumn(false)}
            </ColumnTest>
          </Box>{' '}
          <Box
            sx={{
              width: '100%',
              height: 'calc(100vh - 60px - 48px)'
            }}
          >
            <ColumnTest status columntitle='Done' dragType={dragType}>
              {returnItemsForColumn(true)}
            </ColumnTest>
          </Box>{' '}
        </DndProvider>
      </TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
      <TabPanel value={value} index={5}></TabPanel>
    </Box>
  )
}
