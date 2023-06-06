import React, {useState} from 'react'

function ServiceHistory(props){
    const [searchVin, setSearchVin] = useState('');
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    if (!props.appointments || !Array.isArray(props.appointments)){
        return null;
    }

    // UPDATE WITH BUTTON FUNCTIONALITY WITH CANCEL AND FINISH STATUS
    // UPDATE WITH VIP STATUS

    const handleSearch = (e) =>{
        e.preventDefault();
    }
        const vinAppointments = props.appointments.filter((appointment) =>
        appointment.vin.toLowerCase().includes(searchVin.toLowerCase())
        );

        setFilteredAppointments(vinAppointments);


    return (
      <>
        <h1>Service History</h1>
        <div className="search-bar-container">
            <form onSubmit={handleSearch}>
                <input
                type="text"
                placeholder="Search by VIN"
                value={searchVin}
                name="vin_search" id="vin_search"
                onChange={(event) => {setSearchVin(event.target.value)}}/>
                <button type="submit">Search</button>
            </form>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>Date & Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.appointments.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>Placeholder for VIP</td>
                  <td>{appointment.customer}</td>
                  <td>{appointment.date_time}</td>
                  <td>{appointment.technician}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}

export default ServiceHistory
