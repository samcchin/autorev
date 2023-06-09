import React, { useState, useEffect } from 'react';

function SalesForm() {
    const [price, setPrice] = useState('');
    const [autovins, setAutovins] = useState([]);
    const [salesPeople, setSalesPeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [autovin, setAutovin] = useState('');
    const [salesPerson, setSalesPerson] = useState('');
    const [customer, setCustomer] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();
        const data = {}
        data.price = price;
        data.automobile = autovin;
        data.customer = customer;
        data.salesperson = salesPerson;

        const salesUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const autoUrl = `http://localhost:8100/api/automobiles/${autovin}/`
        const putConfig = {
            method: "put",
            body: JSON.stringify({sold: true}),
            headers: {
              'Content-Type':'application/json',
            }
          };
        const auto_response = await fetch(autoUrl, putConfig);

        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok && auto_response.ok) {
            const newSale = await response.json();
            console.log(newSale);

            const updated_auto = await auto_response.json();
            console.log(updated_auto)

            setAutovin('');
            setPrice('');
            setCustomer('');
            setSalesPerson('');
            window.location.reload();
        }
    }

    const handleAutovinChange = (event) => {
      setAutovin(event.target.value);
    }

    const handleSalesPersonChange = (event) => {
      setSalesPerson(event.target.value);
    }

    const handleCustomerChange = (event) => {
      setCustomer(event.target.value);
    }

    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    }

    async function getAutomobiles() {
        const url = 'http://localhost:8090/api/automobiles/';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setAutovins(data.available_autos);
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
            setSalesPeople(data.salespeople);
        }
    }

    useEffect(() => {
        getCustomers();
        getAutomobiles();
        getSalespeople();
    }, [])


    return  (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Record a new sale</h1>
                        <form onSubmit={handleSubmit}>
                            <div className ="form-floating mb-3">
                                <select
                                onChange={handleAutovinChange}
                                required
                                value ={autovin}
                                name="vin"
                                id="vin"
                                className="form-select"
                                >
                                <option value=""> Choose an automobile VIN... </option>
                                {autovins?.map(auto=>{
                                    return (
                                        <option key={auto.vin} value={auto.vin}>
                                            {auto.vin}
                                        </option>
                                    );
                                })}
                                </select>
                            </div>
                            <div className ="form-floating mb-3">
                                <select onChange={handleSalesPersonChange}
                                value ={salesPerson}
                                required
                                name=""
                                id="salesperson"
                                className="form-select"
                                >
                                    <option value="">Choose a salesperson</option>
                                    {salesPeople?.map(salesperson => {
                                        return (
                                            <option key={salesperson.employee_id} value={salesperson.id}>
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
                                    name=""
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
                                placeholder='Price'
                                required
                                type="text"
                                name="price"
                                id="price"
                                className="form-control"
                                />
                                <label htmlFor="price">Price...</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SalesForm;
