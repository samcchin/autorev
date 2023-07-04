function SalespeopleList({salespeople}){
    return (
        <>
            <h1>Salespeople</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople?.map(salesperson => {
                    return (
                        <tr key={salesperson.id}>
                        <td>{ salesperson.employee_id }</td>
                        <td>{ salesperson.first_name }</td>
                        <td>{ salesperson.last_name }</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default SalespeopleList;
