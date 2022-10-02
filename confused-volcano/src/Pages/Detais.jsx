
function Details(props){
    const {img, title,des} = props;

    const mindata={
        backgroundColor:"#fafafa",
    }
    return (
        <div style={mindata}>
            <img src={img} alt="" width="90%" />
            <div>
            <h4>{title}</h4>
            <p>{des}</p>
            </div>
         </div>
    )
}


export default Details;
