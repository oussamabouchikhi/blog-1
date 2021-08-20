import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentsList = (props) =>{
    const [comments, loadComments] = useState([]);

    const fetchComments = async ()=> {
        const res = await axios.get(`http://localhost:4001/posts/${props.postId}/comments`);
        loadComments(res.data);
    };
    // eslint-disable-next-line
    useEffect(() => {
        fetchComments();
    }, []);

    const renderedComments = comments.map((comment) => <li key={comment.id}> {comment.content} </li>);

    return <ul>
        {renderedComments}
    </ul>
}

export default CommentsList;