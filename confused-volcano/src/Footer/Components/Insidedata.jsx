

function InsideData({text}){
    const button={
        color:"white",
        fontSize:"12px",
        fontWeight:"bold",
        backgroundColor:"#00788E",
        border:"none",
        height:"25px",
        borderRadius:"5px",
    }
    return (
        <div>
            <button style={button} >{text}</button>
        </div>
    )
}
export default InsideData