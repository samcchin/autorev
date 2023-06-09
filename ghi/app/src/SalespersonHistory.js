import { useState, useEffect } from "react";

function SalespersonHistory(){
    const [salesList, setSalesList] = useState([]);
    const [salesPersonList, setSalesPersonList] = useState([]);
    const [salesPerson, setSalesPerson] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    async function handleSalesPersonChange(event){
        const value = event.target.value;
        setSalesPerson(value);
    }

    async function fetchData() {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesList(data.sales);
        }
    }

    function filterData(){
        const filtered = salesList.filter( sale => sale.salesperson.id === salesPerson);
        setFilteredList(filtered);
      }

    async function SalesPeopleData() {
        const response = await fetch('http://localhost:8090/api/salespeople/');
        if (response.ok) {
            const data = await response.json();
            setSalesPersonList(data.salespeople);
        }
    }

    useEffect(() => {
        fetchData();
        SalesPeopleData();
    }, []);
    
    useEffect(() => {
        filterData();
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
                    {salesPersonList?.map(salesper => {
                        return (
                            <option key={salesper.employee_id} value={salesper.id}>
                                {salesper.first_name} {salesper.last_name}
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
                    {filteredList?.map(sale => {
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
