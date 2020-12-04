import React, { Fragment, useState, useEffect } from "react";
import CourseList from "../components/CourseListTs";
import CourseForm from "../components/CourseFormTs";

const Courses = () => {

    const [visibleForm, setVisibleForm] = useState<boolean>(false);
    return (
        <>
            <button
                onClick={() => setVisibleForm(!visibleForm)}
                className="btn btn-primary"
                style={{ marginBottom: 40 }}
            >
                Add Course
            </button>
            {visibleForm ? <CourseForm setVisibleForm={setVisibleForm} /> : <CourseList />}
        </>
    );
}

export default Courses