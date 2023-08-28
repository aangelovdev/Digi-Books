import logo from './assets/img/logo.png';

function Navbar() {
  
  return (
    <nav>
        <div className="navbar">
          <img id="lib-logo" src={logo} />

          <ul className="menu">
              <li className="active"><a href="lib">LIBRARY</a></li>
              <li className="active"><a href="settings">SETTINGS</a></li>
          </ul>
          
          <i id="profile-logo" className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
    </nav>
  );
  
}

export default Navbar;
