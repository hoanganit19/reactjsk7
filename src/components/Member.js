import MemberInfo from "./MemberInfo";

function Member(props){

    //  const addressShipping = props.addressShipping!=='' && props.addressShipping!==undefined?<h3>Địa chỉ giao hàng: {props.addressShipping}</h3>:false;

    return (
    //    <div className="member-box">
    //        <h2>Tên: {props.name}</h2>
    //        <h3>Tuổi: {props.age}</h3>    
    //        {addressShipping}
    //        <p>Bình luận mới nhất: </p> 
    //        {props.comment} 

    //    </div>

      <div className="member-box">
          <MemberInfo image={props.image} name={props.name} age={props.age}/>
      </div>  
    );

}

export default Member;