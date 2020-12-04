interface Worker {
    _id: string,
    firstName: string,
    lastName: string,
    birthday: string
}

const teachers : Worker[] = [
    {
        _id: "101",
        firstName: "John",
        lastName: "Smith",
        birthday: "1960-05-21",
    },
    {
        _id: "102",
        firstName: "Mary",
        lastName: "Johns",
        birthday: "1972-05-22",
    },
    {
        _id: "103",
        firstName: "Peter",
        lastName: "Pan",
        birthday: "1984-12-22",
    },
    {
        _id: "104",
        firstName: "Bob",
        lastName: "White",
        birthday: "1954-08-22",
    },
]

export default teachers;