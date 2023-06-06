function ServiceAppointmentList(props){
    if (!props.appointments || !Array.isArray(props.appointments)){
        return null;
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
              <th> </th>
              <th> </th>
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
                  {/* <td><button onClick={()=>cancelAppointment(appointment.id)}>Cancel</button></td>
                  <td><button onClick={()=>finishAppointment(appointment.id)}>Finish</button></td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}

export default ServiceAppointmentList
