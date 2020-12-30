import React from "react";

export default function Header() {
  return (
    <header className="app-header">
      <div className="content">
        <h2>Good Morning!</h2>
        <h1 className="l-heading">Welcome to React Clock</h1>
        <a href="#clock" className="btn btn-primary">
          See the time <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </header>
  );
}
