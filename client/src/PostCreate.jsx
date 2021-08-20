import axios from "axios";
import React, { useState } from "react";

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onSubmit =async (event) => {
        event.preventDefault();

        await axios.post("http://localhost:4000/posts", {
            title
        });

        setTitle("");
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="">Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
            </div>
            <br />
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default PostCreate;