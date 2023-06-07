import React, { useState } from "react";

function ServiceHistory({appointments}){
  const [searchVin, setSearchVin] = useState('');

  const filteredAppointments = appointments.filter(
    appointment => appointment.vin.includes(searchVin))

  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.value
    setSearchVin(value);
  }

  return (
    <>
      <h1>Service History</h1>
      <form onSubmit={handleSearch}>
      <input
        placeholder="Search by VIN..."
        value={searchVin}
        onChange={handleSearch}
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
