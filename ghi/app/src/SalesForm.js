import React, { useState, useEffect } from 'react';

function SalesForm({getSales, getAutomobiles, getCustomers, getSalespeople}) {
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
        getSalespeople();
        getAutomobiles();
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            automobile,
            price,
            customer,
            salesperson: salesperson,
        };

        const url = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
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

    function handleAutomobileChange (event) {
      const value = event.target.value;
      setAutomobile(value);
    }

    function handleSalespersonChange (event) {
      const value = event.target.value;
      setSalesperson(value);
    }

    function handleCustomerChange (event) {
      const value = event.target.value;
      setCustomer(value);
    }

    function handlePriceChange (event) {
      const value = event.target.value;
      setPrice(value);
    }

    return  (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit}>
                        <div className ="form-floating mb-3">
                            <select onChange={handleAutomobileChange} value ={automobile} required type="text" name="automobile" id="automobile" className="form-select" >
                            <label htmlFor="name"> Choose an automobile... </label>
                            {automobiles?.map(state => {
                                return (
                                    <option key={automobile.vin} value={automobile.vin}>
                                        {automobile.year} {automobile.color} {automobile.model.manufacturer.name} {automobile.color}
                                    </option>
                                );
                            })}
                            </select>
                        </div>
                        <div className ="form-floating mb-3">
                            <select onChange={handleSalespersonChange} value ={salesperson} required type="text" name="salesperson" id="salesperson" className="form-select" >
                            <label htmlFor="name"> Choose a salesperson... </label>
                            {salespeople?.map(state => {
                                return (
                                    <option key={salesperson.employee_id} value={salesperson.employee_id}>
                                        {salesperson.name}
                                    </option>
                                );
                                })}
                            </select>
                        </div>
                        <div className ="form-floating mb-3">
                            <select onChange={handleCustomerChange} value ={customer} required type="text" name="customer" id="customer" className="form-select" >
                            <label htmlFor="name"> Choose a customer... </label>
                            {customers?.map(state => {
                                return (
                                    <option key={customer.id} value={customer.id}>
                                    {customer.name}
                                    </option>
                                );
                                })}
                            </select>
                        </div>
                        <div className ="form-floating mb-3">
                            <input onChange={handlePriceChange} value ={price} placeholder='Sale Price' required type="number" name="price" id="price" className="form-control" />
                            <label htmlFor="name"> Sale Price... </label>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    );
}
export default SalesForm;
