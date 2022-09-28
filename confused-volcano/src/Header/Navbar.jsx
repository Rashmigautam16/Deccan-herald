import {Link} from "react-router-dom"
import {Stack,Box} from "@chakra-ui/react"

function Navbar(){
    const style={
        color:"white", 
        textDecoration:"none",
        fontSize:"12px",
        fontWeight:"bold",
    }
    return (
     
            <Stack  direction={['column', 'row']} spacing='24' h="50px" bg="#0087A8">
                <img src="https://play-lh.googleusercontent.com/Prhy-5MPajJzjrTbvmdlhBTPNTFGtq1J0NTr01Lmzd5OJhfuYdbjmS7mba_uYpU4l0s=w240-h480-rw" alt="" width="50px" />
                <Box w='50%' h='40px' >
                <Link to="/"  style={style}>Home</Link>
                </Box>
                <Box w='50%' h='40px' >
                <Link to="/bengaluru"  style={style}>Bengaluru</Link>
                </Box>
                <Box w='50%' h='40px' >
                <Link to="/national"  style={style}>National</Link>
                </Box>
                <Box w='50%' h='40px' >
                <Link to="/business" style={style}>Business</Link>
                </Box>
                <Box w='50%' h='40px' >
                <Link to="/sports"  style={style}>Sports</Link>
                </Box>
                <Box w='50%' h='40px' >
                <Link to="/feature"  style={style}>Feature</Link>
                </Box>
             </Stack>
            
     
    )
}

export default Navbar;