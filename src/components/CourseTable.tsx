import React from "react";

interface Props {
    courses : [],
    onDelete : (arg0: string) => void
}
const CourseTable = ({ courses, onDelete } : Props  ) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Teacher</th>
                    <th scope="col">Num Students</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course : {
                    _id : string,
                     title: string,
                    subject: string,
                    teacher: {lastName : string},
                    listOfStudents: [],}
           ) => (
                    <tr key={course._id}>
                        <td>{course._id}</td>
                        <td>{course.title}</td>
                        <td>{course.subject}</td>
                        <td>{course.teacher.lastName}</td>
                        <td>{course.listOfStudents.length}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => onDelete(course._id)}
                            >Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default CourseTable;