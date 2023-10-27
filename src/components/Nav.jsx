import React, { Component } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Links from "./Links";

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(user);
  return (
    <div>
      <nav className="navbar fixed-top  navbar-expand-lg bg-light " >
        <div className="container-fluid">
          <div className="navbar-brand ">
            GuNews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-newspaper"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
              <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
            </svg>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ alignItems: "center" }}
            >
              {isAuthenticated && <Links />}
                {isAuthenticated && <li style={{color:'rgb(255 32 32 / 42%)'}}>{user.nickname} </li>}
            </ul>
              <div className="container " style={{
                display: "flex",
                justifyContent: "flex-end",
                
                right: 0,
              }}>
                {isAuthenticated ? (
                 
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      className="btn btn-dark"
                    >
                      Log Out
                    </button>
                 
                ) : ( 
                 <button
                      onClick={() => loginWithRedirect()}
                      className="btn btn-dark "
                      style={{color:'white'}}
                    >
                      Log In
                    </button>
                  
                )}
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
