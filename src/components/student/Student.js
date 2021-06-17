import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import './StyleStudent.css'

import {GiCrossMark} from 'react-icons/gi'
import {toast} from "react-toastify";

toast.configure()

function Student() {

    const history = useHistory();

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/student").then(response => {
            if (response.status !==200) {
                return Promise.reject("ERROR")
            }
            return response.json();
        }).then(json => setStudents(json)).catch(console.log)
    })

    const removeStudent = (studentID) => {
        fetch("http://localhost:8080/student/"+studentID, { method: "DELETE" })
            .then(response => {
                if (response.status === 204) {
                    setStudents(students.filter(student => student.studentID !== studentID));
                } else if (response.status === 404) {
                    return Promise.reject("STUDENT NOT FOUND");
                } else {
                    return Promise.reject(`DELETED WITH STATUS: ${response.status}`);
                }
            })
            .catch(console.log);
    }

    const notify = () => {
        toast.success("Student Removed Successful!")
    }

    return (
        <div className="container">
            <h1 className="student-title">iQuad Academy Students</h1>
            <table className="student-table">
                <thead className="student-table-title">
                <tr className="tr-heading">
                    <td>Student ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>DOB</td>
                    <td>Department ID</td>
                    <td></td>
                </tr>
                </thead>
                <tbody className="student-table-content">
                {
                    students.map(student => (
                        <tr key={student.studentID}>
                            <td>{student.studentID}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.dob}</td>
                            <td>{student.depID}</td>
                            <td><button className="btn btn-outline-warning"  onClick={() => {
                                removeStudent(student.studentID)
                                notify()
                            }}><GiCrossMark/></button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <br/><br/>
            <div className="text-center">
                <button className="btn btn-outline-warning student-btn" onClick={() => {history.push('/')}}>HOME</button>
                <button className="btn btn-outline-warning student-btn" onClick={() => {history.push('/newstudent')}}>NEW STUDENT</button>
            </div>
        </div>
    );
}

export default Student;