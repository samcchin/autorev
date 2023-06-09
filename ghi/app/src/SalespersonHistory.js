import { useState, useEffect } from "react";

function SalespersonHistory(){
    const [salesList, setSalesList] = useState([]);
    const [salesPeopleList, SetSalesPeopleList] = useState([]);
    const [salesPerson, setSalesPerson] = useState('');
    const [filteredSalesList, setFilteredSalesList] = useState([]);

    async function handleSalesPersonChange(event){
        const value = event.target.value;
        setSalesPerson(value);
    }

    async function getSales() {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesList(data.sales);
        }
    }

    function filterSales(){
        const filtered = salesList.filter( sale => sale.salesperson.id == salesPerson);
        setFilteredSalesList(filtered);
      }

    async function getSalespeople() {
        const response = await fetch('http://localhost:8090/api/salespeople/');
        if (response.ok) {
            const data = await response.json();
            SetSalesPeopleList(data.salespeople);
        }
    }

    useEffect(() => {
        getSales();
        getSalespeople();
    }, []);

    useEffect(() => {
        filterSales();
      }, [salesPerson]);



    return (
        <>
            <h1>Salesperson History</h1>
            <div className ="form-floating mb-3">
                <select onChange={handleSalesPersonChange}
                value ={salesPerson}
                required
                name="salesperson"
                id="salesperson"
                className="form-select"
                >
                    <option value="">Choose a salesperson</option>
                    {salesPeopleList?.map(salesperson => {
                        return (
                            <option key={salesperson.employee_id} value={salesperson.id}>
                                {salesperson.first_name} {salesperson.last_name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales Person Name</th>
                        <th>Customer Name</th>
                        <th>Automobile VIN</th>
                        <th>Sale Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSalesList.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                                <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                                <td>{ sale.automobile.vin }</td>
                                <td>${ sale.price }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default SalespersonHistory;
