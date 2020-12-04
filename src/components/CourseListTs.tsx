import React from "react";
import { useObserver } from "mobx-react";
import { useStore } from "../context/context";

import CoursesTable from "./CourseTable";


const CourseList = () => {

    const store = useStore();

    const handleDelete = (_id : string) => {
       (store as any).removeCourse(_id)
    }

    return useObserver(() => (
        <>
            <CoursesTable
                courses={(store as any).courses}
                onDelete={handleDelete}
            />
        </>
    ));
};

export default CourseList;