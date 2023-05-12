import axios from "axios";
import { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function UpdatePost() {

    const postTitle = useRef("");
    const postDesc = useRef("");

    const { id } = useParams();

    const navigate = useNavigate();

    // get default data of specific post_ID from API

    useEffect(() => {
        axios.get(`http://localhost:4000/posts/${id}`).then((response) => {
            postTitle.current.value = response.data.title;
            postDesc.current.value = response.data.body;
        });
    }, []);

    // Update post logic here

    const updatePostHandler = () => {

        const ptitle = postTitle.current.value;
        const pdesc = postDesc.current.value;

        if (ptitle && pdesc !== '') {
            var payload = {
                title: postTitle.current.value,
                body: postDesc.current.value,
            };

            axios.put(`http://localhost:4000/posts/${id}`, payload).then((response) => {
                navigate("/");
            })
        }
        else {
            document.getElementById('error').innerHTML = "Please enter all fields...!"
        }

    };

    return (
        <>
            <Header />
            <div className="create-post-container flex pageBody">
                <fieldset>
                    <legend>Update Post</legend>
                    <form>
                        <div className="form-container">
                            <div className="flex">
                                <Link to={"/"}>
                                    <div>
                                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"></path></g>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                            <div className="input-title flex input-group">
                                <label>Title <span>*</span></label>
                                <input type="text" name="post_title" className="form-control" ref={postTitle} required />

                            </div>
                            <div className="input-des flex input-group">
                                <label>Body <span>*</span></label>
                                <textarea rows={6} ref={postDesc} required className="form-control"></textarea>
                            </div>
                            <span id="error"></span>
                        </div>
                        <div className="save-post-btn">
                            <button type="button" onClick={updatePostHandler}>Update Post</button>
                        </div>
                    </form>

                </fieldset>
            </div>
        </>
    );
}

export default UpdatePost;