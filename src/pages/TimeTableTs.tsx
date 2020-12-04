import React, { useState } from "react";
import { useObserver } from "mobx-react";

import Select from "../components/selectTs";
import dates from '../constants/dates';
import times from '../constants/times'
import { getRow } from '../util';
import students from '../constants/students'
import { useStore } from "../context/context";

const TimeTable = () => {
    const store = useStore();
    const [selectedStudent, setSelectedStudent] =  useState({_id : ''});


    const handleChange = ({ currentTarget: input  } : React.ChangeEvent<HTMLInputElement>) => {
        const currentSelectedStudent = { ...selectedStudent };
        currentSelectedStudent._id = input.value;
        setSelectedStudent(currentSelectedStudent);
    };

    const filteredCourses = () => {
        return selectedStudent && selectedStudent._id
            ? (store as any).courses.filter((m : {listOfStudents : []}) => (
                m.listOfStudents.some((student : {_id: string}) => student._id === selectedStudent._id))) :
                (store as any).courses;
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
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Time</th>

                        {dates.map((date, index) => (
                            <th key={index} scope="col">{date.day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {times.map(time => getRow(time._id, time.time, filteredCourses()))}
                </tbody>
            </table>
        </>
    ));
}

export default TimeTable;
