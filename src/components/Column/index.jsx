import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const _Column = (props) => {
  return (
    <Box
      sx={{
        minWidth: '250px',
        maxWidth: '250px',
        bgcolor: 'white',
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: `calc(60px-5px)`
      }}
    >
      <Box
        sx={{
          color: 'black',
          height: '60px',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography>Todo(4)</Typography>
        <IconButton
          sx={{
            color: 'black'
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: `calc(60px-5px)`
        }}
      >
        <Card sx={{ bgcolor: 'rgb(179 179 179 / 20%)', mb: 0 }}>
          <CardContent>
            <Typography sx={{ fontSize: 12 }} color='black'>
              Task
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          color: 'black',
          height: '60px',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button startIcon={<AddIcon />}>Add Task</Button>
        <IconButton>
          <MoreVertIcon
            sx={{
              color: 'black'
            }}
          />
        </IconButton>
      </Box>
    </Box>
  )
}

_Column.propTypes = {}

export default _Column
