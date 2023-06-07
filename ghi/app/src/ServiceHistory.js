import React, { useState } from "react";

function ServiceHistory({appointments}){
  const [searchVin, setSearchVin] = useState('');
  const [searchClick, setSearchClick] = useState(false)



  const handleSearchClick = (event) => {
    event.preventDefault();
    setSearchClick(true);

  }

  const handleVinSearch = (event) => {
    setSearchVin(event.target.value)
  }

  const filteredAppointments = searchClick?
    appointments.filter(appointment =>
    appointment.vin.includes(searchVin))
    : appointments;


  return (
    <>
      <h1>Service History</h1>
      <form onSubmit={handleSearchClick}>
      <input
        placeholder="Search by VIN..."
        value={searchVin}
        onChange={handleVinSearch}
      />
      <button type="submit" className="btn-primary btn-search">Search</button>
      </form>
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
          {filteredAppointments?.map((appointment) => {
              const formattedDateTime = new Date(appointment.date_time).toLocaleString("en-US", {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: "America/Los_Angeles"
              });
            return (
              <tr key={appointment.id}>
                <td>{appointment.vin}</td>
                <td>{appointment.vip_status ? "Yes":"No"}</td>
                <td>{appointment.customer}</td>
                <td>{formattedDateTime}</td>
                <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
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
