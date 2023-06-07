import React, { useEffect, useState } from 'react';

function CustomerForm({getCustomers}) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            first_name,
            last_name,
            address,
            phone_number,
        };
        const url = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);
            getCustomers();
            setLastName('');
            setFirstName('');
            setAddress('');
            setPhoneNumber('');
        }
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    return  (
        <>
            <div className="row">
                <div className="offset col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a Customer</h1>
                        <form onSubmit={handleSubmit} id="create-customer-form">
                            <div className ="form-floating mb-3">
                                <input onChange={handleFirstNameChange}
                                value ={first_name}
                                placeholder='First Name'
                                required type="text"
                                name="first_name"
                                id="first_name"
                                className="form-control" />
                                <label htmlFor="first_name"> First name... </label>
                            </div>
                            <div className ="form-floating mb-3">
                                <input onChange={handleLastNameChange}
                                value ={last_name}
                                placeholder='Last Name'
                                required type="text"
                                name="last_name"
                                id="last_name"
                                className="form-control" />
                                <label htmlFor="last_name"> Last name... </label>
                            </div>
                            <div className ="form-floating mb-3">
                                <input onChange={handleAddressChange}
                                    placeholder="Address"
                                    required type="text"
                                    name="address"
                                    id="address"
                                    className="form-control"
                                />
                                <label htmlFor="address"> Address... </label>
                            </div>
                            <div className ="form-floating mb-3">
                                <input onChange={handlePhoneNumberChange}
                                    placeholder="Phone Number"
                                    required type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    className="form-control"
                                />
                                <label htmlFor="phone_number"> Phone Number (XXX)-XXX-XXXX </label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerForm;
