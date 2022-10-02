import React from 'react';
import {Box,useDisclosure,Button,Collapse} from "@chakra-ui/react";


export default function Sidedropdown() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} bg="#0087A8" color="white" ml="50%" fontSize='30px' border="none" h="30px" w="45%" cursor="pointer">+</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            py='40px'
            px='20px'
            color='white'
            mt='4'
            bg='#0097a7'
            rounded='md'
            shadow='md'
          >
            <p>Top Stories</p>
            <p>Crime</p>
            <p>Entertainment</p>
            <p>Politics</p>

          </Box>
        </Collapse>
      </>
    )
  }