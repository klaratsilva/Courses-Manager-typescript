interface Worker {
    _id: string,
    firstName: string,
    lastName: string,
    birthday: string
}

const students : Worker[] = [
    {
        _id: "200",
        firstName: "student1",
        lastName: "Ystudent1",
        birthday: "1990-05-21"
    },
    {
        _id: "201",
        firstName: "student2",
        lastName: "Astudent2",
        birthday: "19791-05-22"
    },

    {
        _id: "202",
        firstName: "student3",
        lastName: "Dstudent3",
        birthday: "1992-12-22"
    },
    {
        _id: "203",
        firstName: "student4",
        lastName: "Pstudent4",
        birthday: "1999-08-22"
    },
]

export default students;
