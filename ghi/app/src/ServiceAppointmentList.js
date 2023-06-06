
function ServiceAppointmentList({appointments}){
    if (!appointments || !Array.isArray(appointments)){
        return null;
    }
    const deleteAppointment = async ({appointments, getAppointments}) => {
      const appointmentUrl = "http://localhost:8080/api/appointments/"
      const fetchConfig ={
        method:"delete",
      }
      const response = await fetch(appointmentUrl, fetchConfig)
      if (response.ok){
        getAppointments();
      }
    }
    // UPDATE WITH BUTTON FUNCTIONALITY WITH CANCEL AND FINISH STATUS
    // UPDATE WITH VIP STATUS

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
            {appointments?.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip_status.toString()}</td>
                  <td>{appointment.customer}</td>
                  <td>{appointment.date_time}</td>
                  <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                  <td>{appointment.reason}</td>
                  <td></td>
                  <td>
                    <button type="button" className="btn btn-success" onClick={() => deleteAppointment(appointment)}>Complete</button>
                    <button className="btn btn-danger" onClick={() => deleteAppointment(appointment)}>Cancel</button>
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
