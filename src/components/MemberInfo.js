import Avatar from "./Avatar";

function MemberInfo(props){
    return (
        <div className="member-info">
            <Avatar image={props.image}/>
            <h3>Tên: {props.name}</h3>
            <h3>Tuổi: {props.age}</h3>
        </div>
    );
}

export default MemberInfo;