import React from "react";
import { Link } from "react-router-dom";

import listGroupSelection from "../constants/constants"

interface Date {
  _id: string,
    time: number,
    day: number
  }
  
  interface Teacher {
      _id: string,
      firstName: string,
      lastName: string,
      birthday: string,
  }
  
  interface Student {
      _id: string,
      firstName: string,
      lastName: string,
      birthday: string,
  }
  
  interface Courses {
      _id: string,
      title: string ,
      subject: string ,
      date: Date ,
      teacher: Teacher,
      listOfStudents: Student[]      
  }
  


interface Props {
  courses: Courses[],
  onSubscribe:  (arg:string) => void, 
  onUnsubscribe: (arg:string) => void,
  selectedItem:string
}


const StudentTable: React.FC<Props> = (props) => {
  const { courses, onSubscribe, onUnsubscribe, selectedItem } = props;
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Subject</th>
          <th scope="col">Teacher</th>

        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course._id}>
            <td>{course._id}</td>
            <td>{course.title}</td>
            <td>{course.subject}</td>
            <td>{course.teacher.lastName}</td>
            <td>
              {
                selectedItem === listGroupSelection.MY_COURSES
                &&
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => onUnsubscribe(course._id)}
                >
                  UnSubscribe
              </button>}
              {
                selectedItem === listGroupSelection.AVAILABLE_COURSES
                &&
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => onSubscribe(course._id)}
                >
                  Subscribe
              </button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
