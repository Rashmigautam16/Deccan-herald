import Footerdown from "./Footerdown"
import Footerup from "./Footerup"

function FooterPart(){
const footer={
    width:"100%",
    height:"680px",
}

    return (
        <div style={footer}>
            <Footerup/>
            <Footerdown/>
            <div style={{backgroundColor:"#0087A8",
            width:"100%",
            height:"30px",
            color:"white",
            textAlign:"left",
            fontSize:"14px",}}>
            © 2022 The Printers (Mysore) Private Ltd.</div>
        </div>
    )
}

export default FooterPart