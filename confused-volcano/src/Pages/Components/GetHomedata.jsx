

function GetHomedata(props){
    const {img, title,des} = props;
    return (
        <div>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{des}</p>
        </div>
    )
}


export default GetHomedata;



