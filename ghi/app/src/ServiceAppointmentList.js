import { useState, useEffect } from 'react';

function ServiceAppointmentList({appointments, automobiles, getAppointments}){
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    useEffect(() => {
      const filtered = appointments.filter(
        activeAppointments => activeAppointments.status === "created"
      );
      setFilteredAppointments(filtered);
    }, [appointments]);


    if (!appointments || !Array.isArray(appointments)){
        return null;
    }

    const updateAppointmentStatus = async (appointmentId, status) => {
      const appointmentUrl = `http://localhost:8080/api/appointments/${appointmentId}/`;
      const fetchConfig = {
        method: "PUT",
        body: JSON.stringify({status}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await fetch(appointmentUrl, fetchConfig);
      if (response.ok){
        getAppointments()
      }
    }

    return (
      <>
        <h1>Service Appointments</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>Date & Time</th>
              <th>Technician</th>
              <th>Reason</th>

            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => {
              const formattedDateTime = new Date(appointment.date_time).toLocaleString("en-US", {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Los_Angeles'
              });

              const handleFinishedAppointment = (appointmentId) => {
                updateAppointmentStatus(appointmentId, "finished")
              };

              const handleCanceledAppointment = (appointmentId) => {
                updateAppointmentStatus(appointmentId, "canceled")
              }

              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vin ? "Yes":"No"}</td>
                  <td>{appointment.customer}</td>
                  <td>{formattedDateTime}</td>
                  <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                  <td>{appointment.reason}</td>
                  <td></td>
                  <td>
                    {appointment.status !== "finished" && (
                    <button type="button" className="btn btn-success" onClick={() => handleFinishedAppointment(appointment.id)}>Finished</button>)}
                    {appointment.status !== "canceled" && (
                    <button className="btn btn-danger" onClick={() => handleCanceledAppointment(appointment.id)}>Canceled</button>)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}

export default ServiceAppointmentList
