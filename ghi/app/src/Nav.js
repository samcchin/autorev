import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">AutoRev</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-auto-close="true" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownManufacturerLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownManufacturerLink">
              <li><NavLink className="dropdown-item" to="/manufacturers/">List of Manufacturers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/models/">List of Models</NavLink></li>
              <li><NavLink className="dropdown-item" to="/automobiles/">List of Automobiles</NavLink></li>
              <li><NavLink className="dropdown-item" to="/manufacturers/new">Create a Manufacturer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/models/new">Create a Model</NavLink></li>
              <li><NavLink className="dropdown-item" to="/automobiles/new">Create an Automobile</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownModelsLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownModelsLink">
              <li><NavLink className="dropdown-item" to="/sales/new">Create a Sale</NavLink></li>
              <li><NavLink className="dropdown-item" to="/salespeople/">List of Salespeople</NavLink></li>
              <li><NavLink className="dropdown-item" to="/customers/">List of Customers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/">List of Sales</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/history">Sales History</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownAutomobileLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownAutomobileLink">
              <li><NavLink className="dropdown-item" to="/appointments/new">Create a Service Appointment</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments/">List of Service Appointments</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink></li>
              <li><NavLink className="dropdown-item" to="/technicians/">List of Technicians</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownSalespersonLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Employees</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownSalespersonLink">
              <li><NavLink className="dropdown-item" to="/customers/new">Create a Customer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/salespeople/new">Create a Salesperson</NavLink></li>
              <li><NavLink className="dropdown-item" to="/technicians/new">Create a Technician</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav;
