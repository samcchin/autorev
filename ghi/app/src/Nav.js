import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">CarCar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-auto-close="true" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownManufacturerLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Manufacturer</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownManufacturerLink">
              <li><NavLink className="dropdown-item" to="/manufacturers/">List of Manufacturers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/manufacturers/new">Create a Manufacturer</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownModelsLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Models</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownModelsLink">
              <li><NavLink className="dropdown-item" to="/models/">List of Models</NavLink></li>
              <li><NavLink className="dropdown-item" to="/models/new">Create a Model</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownAutomobileLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Automobiles</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownAutomobileLink">
              <li><NavLink className="dropdown-item" to="/automobiles/">List of Automobiles</NavLink></li>
              <li><NavLink className="dropdown-item" to="/automobiles/new">Create an Automobile</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownSalespersonLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Salespeople</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownSalespersonLink">
              <li><NavLink className="dropdown-item" to="/salespeople/">List of Salespeople</NavLink></li>
              <li><NavLink className="dropdown-item" to="/salespeople/new">Create a Salesperson</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownCustomerLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Customers</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownCustomerLink">
              <li><NavLink className="dropdown-item" to="/customers/">List of Customers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/customers/new">Create a Customer</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownSalesLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownSalesLink">
              <li><NavLink className="dropdown-item" to="/sales/">List of Sales</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/new">Create a Sale</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/history">Sales History</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownCustomerLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Technicians</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownCustomerLink">
              <li><NavLink className="dropdown-item" to="/technicians/">List of Technicians</NavLink></li>
              <li><NavLink className="dropdown-item" to="/technicians/new">Create a Technician</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownCustomerLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service Appointments</NavLink>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownCustomerLink">
              <li><NavLink className="dropdown-item" to="/appointments/">List of Service Appointments</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments/new">Create a Service Appointment</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav;




// import { NavLink } from 'react-router-dom';

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">CarCar</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {/* Manufacturer */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/manufacturers/">Manufacturers</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/manufacturers/new">Create a Manufacturer</NavLink>
//             </li>

//             {/* Models */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/models">Models</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="models/new">Create a Model</NavLink>
//             </li>

//             {/* Automobiles */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/automobiles">Automobiles</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/automobiles/new">Create an automobile</NavLink>
//             </li>

//             {/* Salespeople */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/salespeople">Salespeople</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/salespeople/new">Add a Salesperson</NavLink>
//             </li>

//             {/* Customers */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/customers">Customers</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/customers/new">Add a Customer</NavLink>
//             </li>

//             {/* Sales */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/sales">Sales</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/sales/new">Add a Sale</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/sales/history">Sales History</NavLink>
//             </li>

//             {/* Technicians */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/technicians">Technicians</NavLink>
//             </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/technicians/new">Add a Technician</NavLink>
//             </li>

//             {/* Appointments */}
//             <li className="nav-item">
//               <NavLink className="nav-link" aria-current="page" to="/appointments">Service Appointments</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/appointments/new">Create a Service Appointment</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/appointments/history">Service History</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav;
