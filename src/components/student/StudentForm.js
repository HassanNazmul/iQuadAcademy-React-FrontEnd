import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './StyleStudent.css'

import { toast } from "react-toastify";

toast.configure()

function StudentForm(props) {

    const [firstName, setfirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [dob, setdob] = useState('');

    const [depID, setdepID] = useState('');

    const history = useHistory();

    const handleFirstName = e => {
        setfirstName(e.target.value);
    };

    const handleLastName = e => {
        setLastName(e.target.value);
    };

    const handledob = e => {
        setdob(e.target.value);
    };

    const handledepID = e => {
        setdepID(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            depID: depID
        });

        setfirstName('');
        setLastName('');
        setdob('');
        setdepID('');
    }

    const notify = () => {
        toast.success("Student Added Successful!")
    }

    return (

        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1 className="student-title">iQuad New Student Form</h1>

                <div className=" form-group row">
                    <div className="col-2"> </div>
                    <div className="col-2 col-form-label"><label>First Name</label></div>
                    <div className="col-6"><input className="form-control" type='text' placeholder="First Name" value={firstName}
                                                  onChange={handleFirstName}/></div>
                    <div className="col-2"> </div>

                    <br/><br/>
                    <div className="col-2"> </div>
                    <div className="col-2 col-form-label"><label>Last Name</label></div>
                    <div className="col-6"><input className="form-control" type='text' placeholder="Last Name" value={lastName}
                                                  onChange={handleLastName}/></div>
                    <div className="col-2"> </div>

                    <br/><br/>
                    <div className="col-2"> </div>
                    <div className="col-2 col-form-label"><label>Date of Birth</label></div>
                    <div className="col-2"><input className="form-control" type='text' placeholder="YYYY-MM-DD" value={dob}
                                                  onChange={handledob}/></div>

                    <div className="col-2 col-form-label"><label>Department ID</label></div>
                    <div className="col-2"><input className="form-control" type='text' placeholder="Department ID" value={depID}
                                                  onChange={handledepID}/></div>
                    <div className="col-2"> </div>
                </div>

                <div className="row">
                    <div className="col-2"> </div>
                    <div className="col-8">
                        <div className="text-end">
                            <button className="btn btn-outline-warning submit-btn" type="submit" onClick={notify}>Submit</button>
                        </div>
                    </div>
                    <div className="col-2"> </div>
                </div>

            </form>
            <br/><br/>
            <div className="text-center">
                <button className="btn btn-outline-warning student-btn" onClick={() => {
                    history.push('/student')
                }}>STUDENT
                </button>
                <button className="btn btn-outline-warning student-btn" onClick={() => {
                    history.push('/')
                }}>HOME
                </button>
            </div>
        </div>


    );
}

export default StudentForm;