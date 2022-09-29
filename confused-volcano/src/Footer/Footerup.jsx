import FooterDataUp from "./Components/FooterDataUp"
import InsideData from "./Components/Insidedata"

function Footerup(){

    const getdata=[
        {
            heading:"NATIONAL",
            p1:"politics",
            p2:"North and Central",
            p3:"South",
            p4:"East and NOrtheast",
            p5:"West"
        },
        {
            heading:"KARNATAKA",
            p1:"Top Stories",
            p2:"Politics",
            p3:"Districts",
           
        },
        {
            heading:"BENGALURU",
            p1:"Top Stories",
            p2:"Bengaluru Crime",
            p3:"Politics",
            p4:"Infrastructure",
            p5:"Life in the City"
        },
        {
            heading:"SPORTS",
            p1:"Cricket",
            p2:"Formula 1 with DH",
            p3:"Football",
            p4:"Tennis",
            p5:"Other Sports"
        },

        {
            heading:"BUSINESS",
            p1:"Business News",
            p2:"Family Finance",
            p3:"Technology",
            p4:"DH Wheels",
            p5:"Life in the City"
        },
        {
            heading:"MULTIMEDIA",
            p1:"Vidose",
            p2:"Photos",
           
        },
        {
            heading:"OPINION",
            p1:"DH Views",
            p2:"Editorials",
            p3:"Panorama",
            p4:"Comments",
            p5:"In Perspective",
            p6:"Right in theMiddle"
        },
        {
            heading:"ENTERTAINMENT",
            p1:"Entertainments News",
            p2:"Family Finance",
            p3:"DH Showtime",
            p4:"DH Talkies",
            p5:"Arts, Books & Culture"
        },
    
    ]

    const inside=[
        {
            text:"GEHLOT OUT OF CONG PREZ RACE",
        },
        {
            text:"BUMRAH RULED OUT OF T20 WC",
        },
        {
            text:"SC UPHOLDS RIGHT OF UNMARRIED WOMAN TO ABORT",
        },
        {
            text:"DH PHOTO GALLERIES",
        }
    ]

    const main={
        width:"100%",
        backgroundColor:"#0087A8",
        height:"300px",
    }
    const footer={
        width:"80%",
        display:"flex",
        margin:"auto",
        color:"white",
        textAlign:"left",
        gap:"30px",
        fontSize:"14px",
        lineHeight:"10px",
        paddingTop:"30px",
       
    }
    
        return (
            <div style={main}>
               <div style={footer}>
               {
                 getdata.map((el)=>(
                    <FooterDataUp heading={el.heading} p1={el.p1} 
                    p2={el.p2} p3={el.p3} p4={el.p4} p5={el.p5} p6={el.p6}/>
                 ))
               }  
              </div>
              <div style={{display:"flex",marginLeft:"10%", gap:"8px"}}>
               {
                inside.map((el)=>(
                    <InsideData text={el.text}/>
                ))
               }
              </div>
            </div>
        )
    }
    export default Footerup