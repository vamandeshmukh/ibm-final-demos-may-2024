import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeService";
import { useDispatch, useSelector } from "react-redux";
import { setEmpList } from "../../redux/EmpSlice";



const EmpList = () => {

    const dispatch = useDispatch();
    const empList = useSelector(store => store.emp.empList);

    useEffect(() => {
        console.log('useEffect');
        EmployeeService.getAllEmployees()
            .then((response) => {
                console.log(response.data);
                dispatch(setEmpList(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <p className="display-4 text-primary mt-3 mb-3 pt-3 pb-3">List of All the Employees</p>
            <>
                <p className="lead">Number of Employees: {empList.length}</p>
            </>
            <table className="table table-striped">
                <thead>
                    <th>Employee Id</th> <th>First Name</th> <th>Email</th> <th>Aadhaar</th> <th>Salary</th>
                </thead>
                <tbody>
                    {empList && empList.map(emp =>
                        <tr key={emp.employeeId}>
                            <td >{emp.employeeId}</td>
                            <td >{emp.firstName}</td>
                            <td >{emp.email}</td>
                            <td >{emp.salary}</td>
                            <td >{emp.aadhaar}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default EmpList;


// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;

