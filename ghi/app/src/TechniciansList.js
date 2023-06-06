function TechniciansList(props){
    if (!props.technicians || !Array.isArray(props.technicians)){
        return null;
    }

    return(
    <div>
        <h1>Technicians</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {props.technicians.map(technician => {
                return(
                    <tr key={technician.id}>
                        <td>{technician.employee_id}</td>
                        <td>{technician.first_name}</td>
                        <td>{technician.last_name}</td>
                    </tr>
                );
                })}
        </tbody>
        </table>
    </div>
    );
    }

export default TechniciansList
