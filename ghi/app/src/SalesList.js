function SalesList({sales}){
    return (
        <>
            <h1>Sales</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales Person Name</th>
                        <th>Employee Number</th>
                        <th>Purchaser Name</th>
                        <th>Automobile VIN</th>
                        <th>Price of Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {sales?.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                                <td>{ sale.salesperson.employee_id }</td>
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

export default SalesList;
