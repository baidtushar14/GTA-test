import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import './App.css'

function App() {
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];


  return (
    <>
      <Typography>Hi</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="small" aria-label="Small button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="Medium-sized button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="Large button group">
          {buttons}
        </ButtonGroup>
      </Box>
    </>
  )
}

export default App
