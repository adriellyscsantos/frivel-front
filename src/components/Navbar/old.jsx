import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <a className="navbar-brand text-primary mr-0">Company Logo</a>
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>
        {isOpen ? (
            <sidebar>
          <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
            <div className="sd-header">
              <h4 className="mb-0">Sidebar Header</h4>
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <i className="fa fa-times"></i>
              </div>
            </div>
            <div className="sd-body">
              <ul>
                <li>
                  <a className="sd-link">Menu Item 1</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 2</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 3</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 4</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 5</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 6</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 7</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 8</a>
                </li>
              </ul>
            </div>
          </div>
          </sidebar>
        ) : (
          <p>oi</p>
        )}
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>

      {isOpen ? <p>aberto</p> : <p>fechado</p>}
    </>
  );
};

export default Navbar;
