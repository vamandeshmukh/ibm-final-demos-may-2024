import React from 'react';

const UpdateEmployee = () => {
    console.log('Update Employee');
    return (
        <div>
            <div className="modal fade" id="updateEmployeeModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Update Employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Update Employee
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Employee</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployee;
