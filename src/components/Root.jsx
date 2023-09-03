import React from 'react';
import App from "./App";
import About from "./pages/About";
import {Navbar} from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import {BlogPost} from "./BlogPost";
import {NoMatch} from "./NoMatch";

function Root(props) {
    console.log()
    const routes = [
        { path: '/', name: 'Home', Component: App, exact: true },
        { path: '/about', name: 'About', Component: About, exact: false },
        { path: '/contact', name: 'Contact', Component: Contact, exact: false },
        { path: '/blog', name: 'Blog', Component: Blog, exact: true },
        { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
        { path: '*', name: 'No Match', Component: NoMatch, exact: false },
    ];
    return (
        <Router>
            <div className="todo-app-container">
                <Navbar/>
                <div className="content">
                    <Routes>
                        {routes.map(({path, Component, exact}) => (
                            <Route key={path} path={path} exact={exact} element={<Component />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Root;