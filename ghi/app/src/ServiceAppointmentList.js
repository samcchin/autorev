
function ServiceAppointmentList({appointments, getAppointments}){
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
        window.location.reload()
      }
    }

    const filteredAppointments = appointments.filter(
      (appointment) => appointment.status !== "completed" && appointment.status !== "canceled"
    );

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
                timeZone: "America/Los_Angeles"
              });

              const handleCompletedAppointment = () => {
                updateAppointmentStatus(appointment.id, "completed")
              };

              const handleCanceledAppointment = () => {
                updateAppointmentStatus(appointment.id, "canceled")
              }

              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip_status ? "Yes":"No"}</td>
                  <td>{appointment.customer}</td>
                  <td>{formattedDateTime}</td>
                  <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                  <td>{appointment.reason}</td>
                  <td></td>
                  <td>
                    {appointment.status !== "completed" && (
                    <button type="button" className="btn btn-success" onClick={handleCompletedAppointment}>Completed</button>)}
                    {appointment.status !== "canceled" && (
                    <button className="btn btn-danger" onClick={handleCanceledAppointment}>Canceled</button>)}
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
