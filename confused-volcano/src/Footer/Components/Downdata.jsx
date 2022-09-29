

function Downdata(props){
    const {title,p1,p2,p3,p4,p5} = props
    return (
        <dir>
            <h4 style={{color:"black"}}>{title}</h4>
            <hr/>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
            <p>{p5}</p>
        </dir>
    )
}
export default Downdata;