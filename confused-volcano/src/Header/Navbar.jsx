import {Link} from "react-router-dom"
import {Stack,Box, SimpleGrid,Image} from "@chakra-ui/react"
import styles from "./Navbar.module.css"


function Navbar(){
    // const style={
    //     color:"white", 
    //     textDecoration:"none",
    //     fontSize:"12px",
    //     fontWeight:"bold",
    // }
    return (
        <Stack bg="#0087A8" className={styles.header}>
            <SimpleGrid  className={styles.navbar} columns={[2,3, 3, 4, 7,8]} >
               
               <Box  
                 >
                <Link to="/" className={styles.pages}  >
                <Image to="/"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv29Xo2xvrCGfhdIqH2yqOhR224GgblpvceA&usqp=CAU" alt="" gap="10px"  width="160px" /></Link>
                </Box>
                <Box  
                 >
                <Link to="/" className={styles.pages}  >Home</Link>
                </Box>
                <Box  
                 >
                <Link to="/bengaluru" className={styles.pages} >Bengaluru</Link>
                </Box>
                <Box  
                 >
                <Link to="/national" className={styles.pages} >National</Link>
                </Box>
                <Box  
                 >
                <Link to="/business" className={styles.pages}>Business</Link>
                </Box>
                <Box  
                 >
                <Link to="/sports" className={styles.pages} >Sports</Link>
                </Box>
                <Box  
                 >
                <Link to="/feature" className={styles.pages} >Feature</Link>
                </Box>
                <Box  bg="#ffb300">
                <Link to="/news" className={styles.pages} >
                   <p style={{color:"red"}}>NEWS</p>
                   <p style={{color:"black"}}>Newsletters</p>
                </Link>
                </Box>
              </SimpleGrid>
                
              </Stack>
     
    )
}

export default Navbar;