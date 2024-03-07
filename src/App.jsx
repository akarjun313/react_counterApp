import React, { useState } from 'react'
import "./App.css"
import {Box, Button, Container, Stack} from "@mui/material"
 


export default function App() {

  let [counter, setCounter] = useState(0)
  let [disableBtn, setdisableBtn] = useState(true)
  let [errMSg, seterrMsg] = useState(true)


  const counterMinus = (e)=>{

    if (counter !== 0) {
      setdisableBtn(false)
      setCounter(--counter)
      seterrMsg(false)
      
      if (counter === 0) {
        setdisableBtn(true)
        console.log('reached min value possible')
        seterrMsg(true)
      }

    }  
  };


  const counterPlus = (e)=>{
    
    setCounter(++counter)
    setdisableBtn(false)
    seterrMsg(false)
  
  };

  return (
    <>
      <Box sx={{m:2}}>
        <Container fixed>
          <Box 
            width={313}
            height={200}
            mt={17}
            display={'grid'}
            pl={15}
            sx={{ border: '2px solid grey' }}
            >
              
                <Box mt={5}>

                  <Stack direction={'row'} spacing={2}> 
                  
                    <h1>{counter}</h1>

                    {errMSg ? 
                    <p
                    
                    >(Reached minimum value possible !)</p>
                    : null}
                
                  </Stack>
              
                  <Stack direction={'row'} spacing={2}>
                  
                    <Button variant='contained' disabled={disableBtn} onClick={counterMinus}>-</Button>
                    <Button variant='contained' onClick={counterPlus}>+</Button>
                  
                  </Stack>
                
                </Box>
             
            

            
          </Box>
        </Container>
      </Box>
    
    </>
  )
}
