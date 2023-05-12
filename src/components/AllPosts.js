import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AllPosts() {
    const navigate = useNavigate();

    const [allPosts, setAllPosts] = useState([]);
    const [ogdata, setOGdata] = useState([])

    const searchvalue = useRef("");

    // get data from API to show all posts

    useEffect(() => {
        axios.get("http://localhost:4000/posts").then((response) => {
            setAllPosts(response.data);
            setOGdata(response.data);
        });
    }, []);


    // delete functionlity

    const confirmDeleteHandler = (id) => {
        if (window.confirm("Sure Delete?")) {
            axios
                .delete(`http://localhost:4000/posts/${id}`)
                .then((response) => {
                    setAllPosts((previousState) => {
                        return previousState.filter((_) => _.id !== id);
                    });
                    setOGdata((previousState) => {
                        return previousState.filter((_) => _.id !== id);
                    });
                });
        }
    };

    // searching on post title & body

    const arraySearch = (array, keyword) => {
        const searchTerm = keyword.toLowerCase()
        return array.filter(value => {
            return value.title.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
                value.body.toLowerCase().match(new RegExp(searchTerm, 'g'))
        })
    }

    const handleOnChange = async (e) => {
        let value = searchvalue.current.value;
        if (value) {
            let search = await arraySearch(ogdata, value);
            setAllPosts(search)
        }
        else {
            setAllPosts(ogdata)
        }
    }

    return (
        <>
            <div className="post-search flex">
                <input type="text" className="search-val" ref={searchvalue} onChange={handleOnChange} placeholder="Search..." />
            </div>
            <div className="post-container">
                {
                    allPosts.length === 0 ?
                        <h1>No Posts!</h1>
                        :
                        allPosts.map((item) => (
                            <div className="post-content flex" key={item.id}>
                                <Link to={`/view-post/${item.id}`}>
                                    <div className="post-title">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <hr />
                                    <div className="post-description">
                                        <p>
                                            {item.body}
                                        </p>
                                    </div>
                                </Link>
                                <div className="post-btns flex">
                                    <div>
                                        <button className="btnEdit" onClick={() => navigate(`/update-post/${item.id}`)}>Edit</button>
                                    </div>
                                    <div>
                                        <button className="btnDelete" onClick={() => confirmDeleteHandler(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    );
}

export default AllPosts;