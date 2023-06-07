import React, { useState, useEffect } from 'react';

function SalesForm({ getSales }) {
    const [automobile, setAutomobile] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('');
    const [automobiles, setAutomobiles] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);


    async function getAutomobiles() {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setAutomobiles(data.automobiles);
        }
    }
    async function getCustomers() {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
        }
    }

    async function getSalespeople() {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    }

    useEffect(() => {
        getCustomers();
        getAutomobiles();
        getSalespeople();
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {}
        data.automobile_id = automobile;
        data.price = price;
        data.customer_id = customer;
        data.salesperson_id = salesperson;

        const salesUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const newSale = await response.json();
            console.log(newSale);
            getSales();

            setAutomobile('');
            setPrice('');
            setCustomer('');
            setSalesperson('');
        }
    }

    const handleAutomobileChange = (event) => {
      setAutomobile(event.target.value);
    }

    const handleSalespersonChange = (event) => {
      setSalesperson(event.target.value);
    }

    const handleCustomerChange = (event) => {
      setCustomer(event.target.value);
    }

    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    }

    return  (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Record a new sale</h1>
                        <form onSubmit={handleSubmit}>
                            <div className ="form-floating mb-3">
                                <select onChange={handleAutomobileChange} value ={automobile} required type="text" name="automobile" id="automobile" className="form-select" >
                                <option value=""> Choose an automobile VIN... </option>
                                {automobiles?.map(automobile => {
                                    return (
                                        <option key={automobile.id} value={automobile.id}>
                                            {automobile.vin}
                                        </option>
                                    );
                                })}
                                </select>
                            </div>
                            <div className ="form-floating mb-3">
                                <select onChange={handleSalespersonChange} value ={salesperson} required type="text" name="salesperson" id="salesperson" className="form-select" >
                                    <option value="">Choose a salesperson</option>
                                    {salespeople?.map(salesperson => {
                                        return (
                                            <option key={salesperson.id} value={salesperson.id}>
                                                {salesperson.first_name} {salesperson.last_name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className ="form-floating mb-3">
                                <select
                                    onChange={handleCustomerChange}
                                    value ={customer}
                                    required
                                    name="customer"
                                    id="customer"
                                    className="form-select" >
                                    <option value="">Choose a customer...</option>
                                    {customers?.map(customer => {
                                        return (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.first_name} {customer.last_name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className ="form-floating mb-3">
                                <input onChange={handlePriceChange}
                                    value ={price}
                                    placeholder='Sale Price'
                                    required
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="form-control"
                                    default="0"
                                />
                                <label htmlFor="price">Price...</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SalesForm;
