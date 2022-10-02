import React from 'react';
import {Box,useDisclosure,DrawerCloseButton,Button,Drawer, DrawerBody,DrawerOverlay,DrawerContent,DrawerHeader} from "@chakra-ui/react";
import Sidedropdown from './Sidedropdown';

export default function SizeExample() {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const padding={
    paddingLeft:"20px",
  }
  const sizes = ['xs']
  
  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
          style={{border:"none"}}
        ><img src="https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552744384er3xmq5ix5.png" alt="logo" width="20px" height="20px" /></Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size} placement={placement}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton w="50px" pr="20%"  mt="20px" fontSize="20px" ml="30px" border="none" bg="#0087A8" color="white"/>
          <DrawerHeader  bg="#0087A8" w="20%"  color="white" pt="50px"    fontSize="18px"  fontWeight="700" ></DrawerHeader>
          <DrawerBody bg="#0087A8" w="20%"  color="white" fontSize="16px" fontWeight="700" height="1000px" >

            <p style={padding}>BENGALURU <Sidedropdown/><hr color="#d8e2d2"/></p>
            
            <p style={padding}>KARNATAKA <Sidedropdown/><hr color="#d8e2d2"/></p>
            <p style={padding}>NATIONAL  <Sidedropdown/><hr color="#d8e2d2"/></p>
            <p style={padding}>SPORTS    <Sidedropdown/><hr color="#d8e2d2"/></p>
            <p style={padding}>BUSINESS  <Sidedropdown/><hr color="#d8e2d2"/></p>
            
            <p style={padding}>OPINION   <Sidedropdown/><hr color="#d8e2d2"/></p>
            <p style={padding}>ENTERTAINMENT<Sidedropdown/><hr color="#d8e2d2"/></p>
            

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}