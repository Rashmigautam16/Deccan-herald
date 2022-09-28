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
            <SimpleGrid  className={styles.navbar} columns={[2, null, 3, 4, 7]} bg="#0087A8">
            
                <Image src="https://play-lh.googleusercontent.com/Prhy-5MPajJzjrTbvmdlhBTPNTFGtq1J0NTr01Lmzd5OJhfuYdbjmS7mba_uYpU4l0s=w240-h480-rw" alt="" width="50px" />
                <Box w='50%' 
                 >
                <Link to="/" className={styles.pages}  >Home</Link>
                </Box>
                <Box w='50%' 
                 >
                <Link to="/bengaluru" className={styles.pages} >Bengaluru</Link>
                </Box>
                <Box w='50%' 
                 >
                <Link to="/national" className={styles.pages} >National</Link>
                </Box>
                <Box w='50%' 
                 >
                <Link to="/business" className={styles.pages}>Business</Link>
                </Box>
                <Box w='50%' 
                 >
                <Link to="/sports" className={styles.pages} >Sports</Link>
                </Box>
                <Box w='50%' 
                 >
                <Link to="/feature" className={styles.pages} >Feature</Link>
                </Box>
              </SimpleGrid>
     
    )
}

export default Navbar;