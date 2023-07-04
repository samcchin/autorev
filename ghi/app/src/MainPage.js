import AutoRevLogo from './/assets/images/autorev_logo.png'
import { NavLink } from 'react-router-dom';
import ".//mainpage.css"

function MainPage() {
  return (
    <div className="background-main-page">
      <div className="logo"></div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold"><img src={AutoRevLogo} alt="" className="autorev_logo"/></h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 caption">
            The premier one-stop-shop for automobile dealership management
          </p>
        </div>
      </div>
      <div className="appt-button"><button type="button" className="btn btn-primary book-appt-btn"><NavLink className="book-appt-btn" to="/appointments/new">Book Appointment</NavLink></button>
    </div>
    </div>
  );
}

export default MainPage;
