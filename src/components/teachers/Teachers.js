import React, {useEffect, useState} from 'react';
import {GiCrossMark} from "react-icons/gi";
import {useHistory} from "react-router-dom";
import './StyleTeachers.css'
import {toast} from "react-toastify";

toast.configure()

function Teachers(props) {

    const history = useHistory();

    const [teachers, setTeaschers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/teachers").then(response => {
            if (response.status !==200) {
                return Promise.reject("ERROR")
            }
            return response.json();
        }).then(json => setTeaschers(json)).catch(console.log)
    })

    const notify = () => {
        toast.error("Cannot delete for foreign key constraint :(")
    }

    return (
        <div className="container">
            <h1 className="teachers-title">iQuad Academy Teachers</h1>
            <table className="teachers-table">
                <thead className="teachers-table-title">
                <tr className="tr-heading">
                    <td>Teachers ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td> </td>
                </tr>
                </thead>
                <tbody className="teachers-table-content">
                {
                    teachers.map(teacher => (
                        <tr key={teacher.teachersID}>
                            <td>{teacher.teachersID}</td>
                            <td>{teacher.firstName}</td>
                            <td>{teacher.lastName}</td>
                            <td>
                                <button className="btn btn-outline-warning"
                                        onClick={() => notify()}><GiCrossMark/></button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <br/><br/>
            <div className="text-center">
                <button className="btn btn-outline-warning teachers-btn" onClick={() => {
                    history.push('/')
                }}>HOME
                </button>
                <button className="btn btn-outline-warning teachers-btn" onClick={() => {
                    history.push('/newteacher')
                }}>NEW TEACHER
                </button>
            </div>
        </div>
    );
}

export default Teachers;