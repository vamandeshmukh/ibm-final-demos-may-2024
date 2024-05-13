import React, { useState } from 'react';
import EmployeeService from '../../services/EmployeeService';



const DeleteEmployee = () => {
    console.log('Delete Employee');

    const [eidToDelete, setEidToDelete] = useState('');

    const handleChange = (evt) => {
        setEidToDelete(evt.target.value)
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(eidToDelete);
        EmployeeService.deleteEmployee(eidToDelete)
            .then((response) => {
                console.log(response);
                alert('Success!');
                setEidToDelete('');
            })
            .catch((error) => {
                console.log(error);
            })
    };
    return (

        <div>
            <div className="modal fade" id="deleteEmployeeModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Delete Employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form form-group" onSubmit={handleSubmit}>
                                <input className='form-control mb-3' type='text' name='eidToDelete' id='eidToDelete' 
                                value={eidToDelete} onChange={handleChange} placeholder='Enter employee id...' required autoFocus />
                                <input className='form-control btn btn-outline-danger' type='submit' value='Delete Employee' />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteEmployee;



// import axios from "axios";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const DeleteEmployee = () => {
//     const backendUrl = 'http://localhost:8090/emp/delete-emp/';
//     const [empToDelete, setEmpToDelete] = useState('');
//     const [afterDeleteMessage, setAfterDeleteMessage] = useState('');


//     const handleChange = (evt) => {
//         setEmpToDelete({ ...empToDelete, [evt.target.name]: evt.target.value });
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         axios.delete(`${backendUrl}/${empToDelete.employeeId}`)
//             .then((resp) => {
//                 setAfterDeleteMessage(`${resp.data.firstName} with id ${resp.data.employeeId} deleted successfully!`);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     return (
//         <>
//             <h1>Delete Employee Component</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="employeeId">Empoyee id:</label>
//                 <input type="text" id="employeeId" name="employeeId"
//                     value={empToDelete.employeeId} onChange={handleChange}
//                     placeholder="Enter..." required autoFocus />
//                 <input type="submit" value="Delete Employee" />
//             </form>
//         </>
//     );
// };

// export default DeleteEmployee;