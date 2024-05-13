import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import DeleteEmployee from "./DeleteEmployee";
import EmpList from "./EmpList";
import FindEmployeeByName from "./FindEmployeeByName";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Employee = () => {

    const [showEmpList, setShowEmpList] = useState(false);
    const [showEmpButtonText, setshowEmpButtonText] = useState('View Employees');

    const viewEmpList = () => {
        setShowEmpList(!showEmpList);
        setshowEmpButtonText(!showEmpList ? 'Hide Employees' : 'View Employees');
    };

    return (
        <>
            <div className="container">
                <p className="display-4 text-primary pt-3 pb-3">Employee Component</p>
                <div className="d-flex gap-2">
                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#findEmployeeByNameModal">
                        Find Employee
                    </button>
                    <FindEmployeeByName />
                    <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                        Add Employee
                    </button>
                    <AddEmployee />
                    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#updateEmployeeModal">
                        Update Employee
                    </button>
                    <UpdateEmployee />
                    <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal">
                        Delete Employee
                    </button>
                    <DeleteEmployee />
                    <button type="button" class="btn btn-outline-primary" onClick={viewEmpList}>
                        {showEmpButtonText}
                    </button>
                </div>
                {showEmpList && <EmpList />}
            </div>
        </>

    );
};

export default Employee;


// import AddEmployee from "./AddEmployee";
// import UpdateEmployee from "./UpdateEmployee";
// import DeleteEmployee from "./DeleteEmployee";
// import EmpList from "./EmpList";
// import FindEmployeeByName from "./FindEmployeeByName";

// const Employee = () => {

//     return (
//         <div className="container">
//             <h1>Employee Component</h1>
//             <div className="border col-4 mx-3 my-3 px-2 py-3">
//                 <p className="lead">Create these functionalties: </p>
//                 <p>View All Employees</p>
//                 <p>Find Employee by Name</p>
//                 <p>Add New Employee</p>
//                 <p>Update Employee</p>
//                 <p>Delete Employee</p>
//                 <p>(Modify springboot code, if needed)</p>
//             </div>
//             <FindEmployeeByName />
//             <AddEmployee />
//             <UpdateEmployee />
//             <DeleteEmployee />
//             <EmpList />
//         </div>

//     );
// };

// export default Employee;



// import { useState } from "react";

// const Employee = () => {

//     // let firstName = ''; // does not work
//     const [firstName, setFirstName] = useState(''); // works

//     const handleNameInput = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         // firstName = evt.target.value; // does not work
//         setFirstName(evt.target.value); // works
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee name is {firstName}.</p>
//             <form>
//                 <input type="text" name="firstName" value={firstName} onChange={handleNameInput} />
//             </form>
//         </>
//     );
// };

// export default Employee;

// const Employee = () => {

//     const employee = {
//         id: 101,
//         firstName: 'Sonu',
//         salary: 10.5,
//         isIndian: true,
//         phone: 98765544310 // ''
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {employee.firstName}.</p>
//             <p>Employee salary is ₹{employee.salary}/-.</p>
//             <>
//                 {
//                     employee.phone &&
//                     <p>Employee primary phone is {employee.phone}.</p>
//                 }
//             </>
//         </>
//     );
// };

// export default Employee;


// const Employee = () => {

//     const salary = 50000;
//     const firstName = 'Sonu';

//     return (
//         <>
//             <h1>Employee component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {firstName}.</p>
//             <p>Employee salary is ₹{salary}/-.</p>
//             <p>But the take home is ₹{salary - 10000}/-.</p>
//         </>
//     );
// };

// export default Employee;
