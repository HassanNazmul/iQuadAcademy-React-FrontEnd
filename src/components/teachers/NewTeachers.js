import React, {useState} from 'react';
import TeachersForm from "./TeachersForm";

function NewTeachers() {

    const [teachers, setTeachers] = useState('');

    const addTeacher = (teacher) => {

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(teacher)
        };

        fetch("http://localhost:8080/teachers", init)
            .then(response => {
                if (response.status !== 201) {
                    return Promise.reject("ERROR");
                }
                return response.json();
            })
            .then(json => setTeachers([...teachers, json])) // Spread new state
            .catch(console.log);
    };
    return (
        <div>
            <div>
                <TeachersForm onSubmit={addTeacher}/>
            </div>
        </div>
    );
}

export default NewTeachers;