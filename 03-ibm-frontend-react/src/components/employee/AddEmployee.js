import { useState } from 'react';
import EmployeeService from '../../services/EmployeeService';

const AddEmployee = () => {
    console.log('Add Employee');

    const [empData, setEmpData] = useState('');
    const [errors, setErrors] = useState('');

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const handleSubmit = (evt) => {
        console.log(empData);
        evt.preventDefault();
        if (validateForm()) {

            EmployeeService.addEmployee(empData)
                .then((response) => {
                    console.log(response);
                    alert(`Employee added `);
                    setEmpData('');
                })
                .catch((error) => {
                    console.log(error);
                    setEmpData('');
                });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (

        <div>
            <div className="modal fade" id="addEmployeeModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addModalLabel">Add Employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form form-group" onSubmit={handleSubmit} >
                                <label htmlFor="firstName">First Name:</label>
                                <input className="form-control" type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
                                {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                                <label htmlFor="aadhaar">Aadhaar:</label>
                                <input className="form-control" type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
                                {errors.aadhaar && <span className="text-danger">{errors.aadhaar}</span>}
                                <label htmlFor="salary">Salary:</label>
                                <input className="form-control" type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
                                {errors.salary && <span className="text-danger">{errors.salary}</span>}
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" >Add Employee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;


// import axios from "axios";
// import { useState } from "react";

// const AddEmployee = () => {
//     const backendUrl = 'https://jsonplaceholder.typicode.com/users';
//     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
//     const [errors, setErrors] = useState({});

//     const handleChange = (evt) => {
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//         setErrors({ ...errors, [evt.target.name]: '' });
//     };

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         if (!empData.firstName.trim()) {
//             newErrors.firstName = "First name is required";
//             isValid = false;
//         }

//         if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
//             newErrors.email = "Invalid email address";
//             isValid = false;
//         }

//         if (!/^\d{12}$/.test(empData.aadhaar)) {
//             newErrors.aadhaar = "Aadhaar must be a 12-digit number";
//             isValid = false;
//         }

//         if (empData.salary <= 0 || isNaN(empData.salary)) {
//             newErrors.salary = "Salary must be a positive number";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         if (validateForm()) {
//             axios.post(backendUrl, empData)
//                 .then((resp) => {
//                     alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
//                     setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//                 })
//                 .catch(error => {
//                     console.error("Error adding employee:", error);
//                 });
//         }
//     };

//     return (
//         <>
//             <h1>Add Employee Component</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                 {errors.firstName && <span className="error">{errors.firstName}</span>}
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 {errors.email && <span className="error">{errors.email}</span>}
//                 <br />
//                 <label htmlFor="aadhaar">Aadhaar:</label>
//                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
//                 <br />
//                 <label htmlFor="salary">Salary:</label>
//                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 {errors.salary && <span className="error">{errors.salary}</span>}
//                 <br />
//                 <input type="submit" value="Add Employee" />
//             </form>
//         </>
//     );
// };

// export default AddEmployee;

// // import axios from "axios";
// // import { useState } from "react";

// // const AddEmployee = () => {

// //     const backendUrl = 'https://jsonplaceholder.typicode.com/users';
// //     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });

// //     const handleChange = (evt) => {
// //         console.log(evt.target);
// //         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
// //     };

// //     const handleSubmit = (evt) => {
// //         evt.preventDefault();
// //         console.log(empData);
// //         axios.post(backendUrl, empData)
// //             .then((resp) => {
// //                 console.log(resp.data);
// //                 alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
// //                 setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
// //             });
// //     };

// //     return (
// //         <>
// //             <h1>Add Employee Component</h1>
// <form onSubmit={handleSubmit} >
//     <label htmlFor="firstName">First Name:</label>
//     <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//     <br />
//     <label htmlFor="email">Email:</label>
//     <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//     <br />
//     <label htmlFor="aadhaar">Aadhaar:</label>
//     <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//     <br />
//     <label htmlFor="salary">Salary:</label>
//     <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//     <br />
//     <input type="submit" value="Add Employee" />
// </form>
// //         </>
// //     );
// // };

// // export default AddEmployee;






