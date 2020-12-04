import React from 'react';
import dates from './constants/dates';

export const getRow = (id, time, store) => {
    let rows = [time];
    dates.map(date => {
        const course = store.find((course) => course.date.day === date._id && course.date.time === id);
        if (course) {
            rows = [...rows, course.title];
        } else {
            rows = [...rows, '-'];
        }
    });

    return (
        <tr>
            {rows.map(element => <td >{element}</td>)}
        </tr>
    )
};
