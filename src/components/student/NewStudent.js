import React, {useState} from 'react';
import StudentForm from "./StudentForm";

function NewStudent() {

    const [students, setStudents] = useState('');

    const addStudent = (student) => {

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(student)
        };

        fetch("http://localhost:8080/student", init)
            .then(response => {
                if (response.status !== 201) {
                    return Promise.reject("ERROR");
                }
                return response.json();
            })
            .then(json => setStudents([...students, json])) // Spread new state
            .catch(console.log);
    };

    return (
        <div>
            <StudentForm onSubmit={addStudent}/>
        </div>
    );
}

export default NewStudent;