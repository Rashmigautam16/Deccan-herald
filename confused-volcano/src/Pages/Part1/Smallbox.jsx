import GetSmallbox from "../Components/GetSmallbox"


function Smallbox(){
const getdata=[
    {
        img:"https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/tharoor-1149708-1664538036.jpg?itok=CgrURPDF",
        p:"Goof-up in Tharoor's manifesto; India's map distorted"
    },
    {
        img:"https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/screenshot-2022-09-30-154006-1149676-1664533547.jpg?itok=8fatR6HA",
        p:"Auto driver, who invited Kejriwal home, is 'Modi fan'..."
    }, {
        img:"https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/file7myzz7w220jm7wcgdke-1149654-1664531185.jpg?itok=3lmIua0B",
        p:"Tharoor aims to reform, re-energise & decentralise Cong..."
    },
]

    return(
        <div>
        <div style={{width:"400px",}}>
            {
                getdata.map((el)=>(
                    <GetSmallbox img={el.img} p={el.p} />
                ))
            }
        </div>
        </div>
    )
}

export default Smallbox;