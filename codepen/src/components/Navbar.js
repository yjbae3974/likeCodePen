import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand d-flex" href="#">
            <img src="./img\coolicon.png" alt="image" />
            <div className="ms-2 p-relative" style={{top: '-1px'}}>INSERT</div>
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav p-relative">
              <div className="under-bar"></div>
              <li className="nav-item">
                <Link onClick={()=>{setactive(1)}} className={`nav-link ${active === 1 ? 'active' : ''}`} to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={()=>{setactive(2)}} className={`nav-link ${active === 2 ? 'active' : ''}`} to="/member">
                  Member
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={()=>{setactive(3)}} className={`nav-link ${active === 3 ? 'active' : ''}`} to="/roadmap">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item">
                <Link  onClick={()=>{setactive(4)}} className={`nav-link ${active === 4 ? 'active' : ''}`} to="/qna">
                  Qna
                </Link>
              </li>
              <li className="nav-item">
                <Link  onClick={()=>{setactive(5)}} className={`nav-link ${active === 5 ? 'active' : ''}`} to="/notice">
                  Notice
                </Link>
              </li>
              <li className="nav-item nav-loginToProfile">
                {
                  isLoggedIn
                  ?
                  <>
                  <div className="user-name">
                    {userName}
                  </div>
                    <Link className="user-profile" to="/Profile">
                    &#128024;
                    </Link>
                  </>
                  :
                  <>

                    
                    <Link onClick={()=>setactive(1)} className="nav-link" to="/signup">
                      <button type="button" class="btn signup-btn">Login</button>

                    </Link>
                  </>
                }
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
