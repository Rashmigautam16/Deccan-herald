import { Routes,Route } from "react-router-dom";
import Bengaluru from "./Bengaluru"
import Business from "./Business"
import Feature from "./Feature"
import Home from "./Home"
import National from "./National";
import Sports from "./Sports"

function Allrouters(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/bengaluru" element={<Bengaluru/>} />
            <Route path="/national" element={<National/>} />
            <Route path="/business" element={<Business/>} />
            <Route path="/sports" element={<Sports/>} />
            <Route path="/feature" element={<Feature/>} />
        </Routes>
    )
}

export default Allrouters