function ServiceAppointmentList({appointments, getAppointments}){
  if (!appointments || !Array.isArray(appointments)){
      return null;
  }

  const handleFinishedAppointment = async (appointment) => {
    const finishAppointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/finish`;
    const fetchConfig = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(finishAppointmentUrl, fetchConfig);
    if (response.ok){
      getAppointments()
      window.location.reload()
    }
  }

  const handleCanceledAppointment = async (appointment)=>{
    const cancelAppointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/cancel`;
    const fetchConfig = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(cancelAppointmentUrl, fetchConfig);
    if (response.ok){
      getAppointments()
      window.location.reload()
    }
  }


  const filteredAppointments = appointments.filter(
    appointment => appointment.status !== "finished" && appointment.status !== "canceled"
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

            const handleFinishedAppointment = () => {
              updateAppointmentStatus(appointment.id, "finished")
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
                  {appointment.status !== "finished" && (
                  <button type="button" className="btn btn-success" onClick={() => handleFinishedAppointment(appointment)}>Finish</button>)}
                  {appointment.status !== "canceled" && (
                  <button className="btn btn-danger" onClick={() => handleCanceledAppointment(appointment)}>Cancel</button>)}
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
