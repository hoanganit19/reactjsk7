import React from "react";

// const Avatar = (props) => {
//     return (
//         <div className="avatar-box">
//             <img src={props.image}/>
//         </div>
//     );
// }

class Avatar extends React.Component{
    render(){
        return (
            <div className="avatar-box">
                <img src={this.props.image}/>
            </div>
        );
    }
}


export default Avatar;