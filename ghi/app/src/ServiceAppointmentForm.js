import React, { useEffect, useState } from "react";

function ServiceAppointmentForm(){
    const [technicians, setTechnicians] = useState([]);
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [technician, setTechnician] = useState('');
    const [reason, setReason] = useState('');

    async function getTechnicians(){
      const technicianUrl = '	http://localhost:8080/api/technicians/'
      const response = await fetch(technicianUrl);
      if (response.ok){
          const data = await response.json();
          setTechnicians(data.technicians);
      }
  }

    useEffect(() => {
        getTechnicians();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.vin = vin;
        data.customer = customer;
        data.date_time = dateTime;
        data.technician = technician;
        data.reason = reason;

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok){
            const newAppointment = await response.json();
            console.log(newAppointment)
            setVin('');
            setCustomer('');
            setDateTime('');
            setTechnician('');
            setReason('');
            window.location.reload()
        } else {
            console.log("Error creating appointment:", response.status)
        }
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value)
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value)
    }
    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value)
    }
    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value)
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value)
    }

    return (
        <>
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create an appointment</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
              <div className="form-floating mb-3">
                <input
                onChange={handleVinChange}
                placeholder="VIN"
                required value ={vin}
                type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input
                onChange={handleCustomerChange}
                placeholder="Customer"
                required value ={customer}
                type="text" name="customer" id="customer" className="form-control"/>
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="form-floating mb-3">
                <input
                onChange={handleDateTimeChange}
                placeholder="Date & Time"
                required value ={dateTime}
                type="datetime-local" name="dateTime" id="dateTime" className="form-control"/>
                <label htmlFor="dateTime">Date & Time</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleTechnicianChange}
                  required
                  value={technician}
                  name="technician"
                  id="technician"
                  className="form-select">
                  <option value="">Choose a technician</option>
                  {technicians.map(technician=>{
                    return (
                        <option key={technician.employee_id} value={technician.employee_id}>
                          {technician.first_name} {technician.last_name}
                        </option>
                    )
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                onChange={handleReasonChange}
                placeholder="Reason"
                required value ={reason}
                type="text" name="reason" id="reason" className="form-control"/>
                <label htmlFor="reason">Reason</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        </div>
        </>
    )
}

export default ServiceAppointmentForm
