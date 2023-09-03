import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Blog(props) {
    return (
        <div className={"container"}>
            <ul>
                <li><Link to="/blog/1">Post One</Link></li>
                <li><Link to="/blog/2">Post Two</Link></li>
            </ul>
        </div>
    );
}

export default Blog;