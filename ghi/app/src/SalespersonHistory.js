function SalespersonHistory({sales}){
    return (
        <>
            <h1>Salesperson History</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales?.map(sale => {
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
