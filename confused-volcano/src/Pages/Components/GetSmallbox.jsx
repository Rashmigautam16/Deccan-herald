
function GetSmallbox(props){
    const {img, p}=props
    return (
        <div style={{display:"flex",width:"380px",gapBottom:"30px"}}>
            <div style={{padding:"8px"}}><img src={img} alt="" width="100px"/></div>
            <div><p>{p}</p></div>
        </div>
    )
}

export default GetSmallbox