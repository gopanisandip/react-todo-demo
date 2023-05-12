import { Link } from "react-router-dom";
import { useParams, useLocation } from 'react-router-dom';
import React from 'react';

function Header() {

    const location = useLocation();

    const { id } = useParams();

    return (
        <>
            <div className='header flex'>
                <div className='title'>
                    <p>Blogs</p>
                </div>
                <div className='blog-action'>
                    <div className="action-btns flex">
                        {
                            location.pathname === `/create-post` || location.pathname === `/update-post/${id}` ?
                                <Link to={"/"}  >
                                    <button className='blog-action-btn'>View Posts</button>
                                </Link>
                                :
                                ""
                        }
                        <Link to={"/create-post"}  >
                            <button className='blog-action-btn'>Create Post</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Header;