import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";

toast.configure()

function TeachersForm(props) {

    const [firstName, setfirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const history = useHistory();

    const handleFirstName = e => {
        setfirstName(e.target.value);
    };

    const handleLastName = e => {
        setLastName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            firstName: firstName,
            lastName: lastName,
        });

        setfirstName('');
        setLastName('');
    }

    const notify = () => {
        toast.success("Student Added Successful!")
    }

    return (
        <div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1 className="student-title">iQuad New Teacher Form</h1>

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
                    <button className="btn btn-outline-warning teachers-btn" onClick={() => {
                        history.push('/teacher')
                    }}>TEACHER
                    </button>
                    <button className="btn btn-outline-warning teachers-btn" onClick={() => {
                        history.push('/')
                    }}>HOME
                    </button>
                </div>
            </div>

        </div>
    );
}

export default TeachersForm;