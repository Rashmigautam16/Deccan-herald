import Downdata from "./Components/Downdata"

function Footerdown(){
    const getdata=[
        {
            title:"DH PICKS",
            p1:"Ashok Gehlot to not contest Congress presidential poll",
            p2:"Married or not, all women entitled to safe abortion: SC",
            p3:"Focus shifts to Delhi as Congress prez race heats up",
            p4:"Pakistan's economy is in a fatal nosedive, again",
            p5:"SDPI looks to cash in on ‘sympathy’ after PFI ban",
        },
        {
            title:"LATEST STORIES",
            p1:"Reliance launches first in-house premium fashion store",
            p2:"Hostel warden arrested in PSI exam scam",
            p3:"India is a frontliner in fight against terrorism: Murmu",
            p4:"Deadline for holding NExT exam extended to Sept 2024",
            p5:"Sachin Pilot to meet Sonia Gandhi later today",
        },
        {
            title:"TRENDING NEWS",
            p1:"Govt excludes Marathahalli from Namma Metro plans",
            p2:"Police solve mystery of B'luru boy's filmy style kidnap",
            p3:"Why should my US-born-and-bred son know about caste?!",
            p4:"Bill for London-like transport authority in Bengaluru",
            p5:"Demolition drive alarms property buyers in Bengaluru",
        },
    ]

    const foot={
        width:"65%",
        display:"flex",
        marginLeft:"7%",
        textAlign:"left",
        fontSize:"14px",
        color:"#424242",
       
    }
    return (
        <div style={{display:"flex",}}>
            <div  style={foot}>
                {
                    getdata.map((el)=>(
                        <Downdata title={el.title} p1={el.p1} 
                        p2={el.p2} p3={el.p3} p4={el.p4} p5={el.p5} p6={el.p6}/>
                     ))
                }
            </div>
            <div style={{ borderRight:"1px solid #424242",margin:"20px"}}></div>
            <div style={{fontSize:"14px",color:"#424242",textAlign:"left", width:"15%", paddingTop:"15px"} }>
                <h4>DOWNLOAD DH APP</h4>
                <hr/>
                <h4>SERVICES</h4>
                <hr/>
                <p>About Epaper Archives Sitemap Classifieds Contact</p>
                <h4>OUR GROUP SITES</h4>
                <hr/>
                <p>Printers Mysore Prajavani Sudha Mayura Exam Mastermind</p>
            </div>
          
        </div>

    )
}

export default Footerdown







