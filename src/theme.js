import { purple, blue } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const HEADER_HEIGHT = '60px'
const TAB_MAIN_HEIGHT = '48px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${TAB_MAIN_HEIGHT})`

export const theme = extendTheme({
  todolist: {
    headerHeight: HEADER_HEIGHT,
    tabMain: TAB_MAIN_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[500]
        }
      }
    }
  },
  dark: {
    palette: {
      primary: {
        main: purple
      }
    }
  }
})
