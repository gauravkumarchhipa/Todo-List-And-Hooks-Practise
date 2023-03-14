import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Todo List</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Todo-List
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/todo">Todo</Link>
                            <Link className="dropdown-item" to="/todo1">Todo-1</Link>
                            <Link className="dropdown-item" to="/todo2">Todo-2</Link>
                            <Link className="dropdown-item" to="/">Todo-3</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Solutions
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/changestate">Change State</Link>
                            <Link className="dropdown-item" to="/togglebutton">Toggle Button</Link>
                            <Link className="dropdown-item" to="/rules">Rules</Link>
                            <Link className="dropdown-item" to="/array">Array using Hooks Use state</Link>
                            <Link className="dropdown-item" to="/usestateobject">Usestate Object</Link>
                            <Link className="dropdown-item" to="/shoercircuitevalation">Short Circuit Evaluation</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Forms
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link" to="/Login">Login Form</Link>
                            <Link className="nav-link" to="/Login2">Login Form with validation</Link>
                            <Link className="nav-link" to="/uncontrol">Uncontrol Form</Link>
                            <Link className="nav-link" to="/toastify">Toastify</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            UseEffect
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link" to="/useeffect1">UseEffect</Link>
                            <Link className="nav-link" to="/useeffect2">UseEffect2</Link>
                            <Link className="nav-link" to="/cleanupfunction">Cleanup_function</Link>
                            <Link className="nav-link" to="/usefectapi">Use Effect Api</Link>
                            <Link className="nav-link" to="/usefectapi2">Use Effect Api2</Link>
                            
                            
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hooks
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link" to="/AddSub1">Add Sub useState</Link>
                            <Link className="nav-link" to="/UseRefHooks">UseRefHooks</Link>
                            <Link className="nav-link" to="/UseRducerHooks">UseRducerHooks</Link>
                            <Link className="nav-link" to="/UseRducerHooks2">UseRducerHooks2</Link>
                            <Link className="nav-link" to="/CustomeHooks">CustomeHooks</Link>
                            <Link className="nav-link" to="/useCallbackHook1">useCallbackHook1</Link>
                            <Link className="nav-link" to="/useCallbackHook4">useCallbackHook2</Link>
                            <Link className="nav-link" to="/usememohook">UseMemoHook</Link>
                            
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            UseContext
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link" to="/UseContextHooks">UseContextHooks</Link>
                            <Link className="nav-link" to="/UseContextHooks2">UseContextHooks2</Link>
                            <Link className="nav-link" to="/UseContextHooks3">UseContextHooks3</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Redux
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="nav-link" to="/redux1">redux1</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About <span className="sr-only"></span></Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hooks Practice
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link" to="/usememo">UseMamo</Link>
                            </div>
                        </li>
                                
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        <ToastContainer/>
                    </form>
                </div>
            </nav>
        </div>
    )
}