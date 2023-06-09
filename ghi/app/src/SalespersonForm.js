import React, { useEffect, useState } from 'react';

function SalespersonForm({getSalespeople}) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [employee_id, setEmployeeId] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            first_name,
            last_name,
            employee_id,
        };
        const url = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newSalesperson = await response.json();
            console.log(newSalesperson);
            getSalespeople();

            setLastName('');
            setFirstName('');
            setEmployeeId('');
            window.location.reload()
        }
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    }

    return  (
        <div className="row">
            <div className="offset col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit}>
                        <div className ="form-floating mb-3">
                            <input onChange={handleFirstNameChange}
                            value ={first_name}
                            placeholder='First Name'
                            required
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="form-control" />
                            <label htmlFor="first_name"> First name... </label>
                        </div>
                        <div className ="form-floating mb-3">
                            <input onChange={handleLastNameChange}
                            value ={last_name}
                            placeholder='Last Name'
                            required
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="form-control" />
                            <label htmlFor="last_name"> Last name... </label>
                        </div>
                        <div className ="form-floating mb-3">
                            <input onChange={handleEmployeeIdChange}
                                placeholder="Employee ID"
                                required
                                value={employee_id}
                                type="text"
                                name="employee_id"
                                id="employee_id"

                                className="form-control"
                            />
                            <label htmlFor="employee_id"> Employee ID... </label>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalespersonForm;
