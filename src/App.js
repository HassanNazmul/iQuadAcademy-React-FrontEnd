import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/home/Home";
import Student from "./components/student/Student";
import NewStudent from "./components/student/NewStudent";
import Teachers from "./components/teachers/Teachers";
import NewTeachers from "./components/teachers/NewTeachers";
import 'react-toastify/dist/ReactToastify.css'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/student" component={Student}/>
                <Route exact path="/newstudent" component={NewStudent}/>
                <Route exact path="/teacher" component={Teachers}/>
                <Route exact path="/newteacher" component={NewTeachers}/>
            </Switch>
        </Router>
    );
}

export default App;
