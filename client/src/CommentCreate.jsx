import axios from "axios";
import React, { useState } from "react";

const CommentCreate = (props) => {
    const [content, setContent] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${props.postId}/comments`,{
            content
        })
        setContent("");
    }

    return <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="">Enter comment</label>
            <input value={content} onChange={e => setContent(e.target.value)} type="text" className="form-control" />
        </div>
        <br />
        <button className="btn btn-primary">Add comment</button>
    </form>
}

export default CommentCreate;