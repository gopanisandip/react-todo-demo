import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function CreatePost() {
    const postTitle = useRef("");
    const postBody = useRef("");

    const navigate = useNavigate();

    // create post logic here

    const addPostHandler = () => {

        const ptitle = postTitle.current.value;
        const pdesc = postBody.current.value;

        if (ptitle && pdesc !== '') {
            var payload = {
                title: postTitle.current.value,
                body: postBody.current.value,
            };
            axios.post("http://localhost:4000/posts", payload).then(() => {
                navigate("/");
            });
        }
        else {
            document.getElementById('error').innerHTML = "Please enter all fields...!"
        }
    };

    return (
        <>
            <Header />
            <hr />
            <div className="create-post-container flex pageBody">
                <fieldset>
                    <legend>Create Post</legend>
                    <form>
                        <div className="form-container">
                            <div className="input-title flex input-group">
                                <label>Title <span>*</span></label>
                                <input type="text" name="post_title" className="form-control" ref={postTitle} required />

                            </div>
                            <div className="input-des flex input-group">
                                <label>Body <span>*</span></label>
                                <textarea rows={6} ref={postBody} required className="form-control"></textarea>
                            </div>
                            <span id="error"></span>
                        </div>
                        <div className="save-post-btn">
                            <button type="button" onClick={addPostHandler}>Save Post</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </>
    );
}

export default CreatePost;