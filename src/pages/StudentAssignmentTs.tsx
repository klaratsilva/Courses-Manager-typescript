import React, { useState } from "react";
import { useObserver } from "mobx-react";

import Select from "../components/selectTs";

import { useStore } from "../context/context";

import ListGroup from "../components/listGroupTs";
import StudentTable from "../components/studentTableTs";
import listGroupSelection from "../constants/constants"
import students from '../constants/students'

const StudentAssignment = () => {
    const store = useStore();
    const [selectedStudent, setSelectedStudent] =  useState({_id : ''});
    const [selectedType, setSelectedType] = useState(listGroupSelection.MY_COURSES);


    const handleChange = ({ currentTarget: input  } : React.ChangeEvent<HTMLInputElement>) => {
        const currentSelectedStudent = { ...selectedStudent };
        currentSelectedStudent._id = input.value;
        setSelectedStudent(currentSelectedStudent);
    };

    const handleTypeSelect = (type : string)  => {
        setSelectedType(type);
    };

    const filteredCourses = () => {
     
        return selectedStudent && selectedStudent._id && selectedType === listGroupSelection.MY_COURSES
            ? (store as any).courses.filter((m : {listOfStudents : []}) => (
                m.listOfStudents.some((student : {_id: string}) => student._id === selectedStudent._id))) :
            selectedStudent._id && selectedType === listGroupSelection.AVAILABLE_COURSES
                ? (store as any).courses.filter((m : {listOfStudents : []}) => (
                    m.listOfStudents.every((student : {_id: string}) => student._id !== selectedStudent._id))) :
                    (store as any).courses;
    }

    const handleUnsubscribe = (_id : string) => {
        (store as any).unsubscribeStudent(_id, selectedStudent._id)
    }

    const handleSubscribe = (_id : string) => {
        (store as any).subscribeStudent(_id, selectedStudent._id)
    }

    return useObserver(() => (
        <>
            <form>
                <Select
                    name={'students'}
                    options={students}
                    onChange={handleChange}
                    label={'students'}
                />
            </form>
            <ListGroup
                items={[listGroupSelection.MY_COURSES, listGroupSelection.AVAILABLE_COURSES]}
                onItemSelect={handleTypeSelect}
                selectedItem={selectedType}
            />
            <StudentTable
                selectedItem={selectedType} onUnsubscribe={handleUnsubscribe} onSubscribe={handleSubscribe}
                courses={filteredCourses()}
            />
        </>
    ));
};

export default StudentAssignment