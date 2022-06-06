function Comment(props){

    return (
        <div className="comment-info">
            <h4>Subject: {props.subject}</h4>
            <h4>Content: {props.content}</h4>
        </div>
    );

}

export default Comment;