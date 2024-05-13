import React from 'react';

const FindEmployeeByName = () => {
    console.log('Find Employee');
    return (
        <div>
            <div className="modal fade" id="findEmployeeByNameModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="dfindEmployeeByNameModalLabel">Find Employee by Name</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Find Employee by Name
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Find Employee by Name</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindEmployeeByName;



