import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./components/navBarTs";

import Courses from "./pages/CoursesTs";
import StudentAssignment from "./pages/StudentAssignmentTs";
import NotFoundP from "./pages/notFoundPageTs";
import TimeTable from "./pages/TimeTableTs";
import { StoreProvider } from "./context/context";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/student-assignment" component={StudentAssignment} />
          <Route path="/timetable" component={TimeTable} /> 
          <Route path="/courses" component={Courses} />
          <Route path="/not-found" component={NotFoundP} />
          <Redirect from="/" exact to="/courses" />
          <Redirect to="/not-found" />
        </Switch>

      </main>
    </StoreProvider>
  );
}
export default App