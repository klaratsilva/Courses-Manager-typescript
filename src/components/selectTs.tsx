import React from "react";


  interface Worker {
      _id: string,
      firstName: string,
      lastName: string,
      birthday: string,
  }
  
interface Props {
  name: string,
   label: string,
    options: Worker[],
    onChange: any
}


const Select = ({ name, label, options, onChange} : Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select onChange={onChange} name={name} id={name} className="form-control">
        <option value="" />
        {options.sort((a , b ) => {
          if (a.lastName < b.lastName) { return -1; }
          if (a.lastName > b.lastName) { return 1; }
          return 0;
        }).map(option => (
          <option key={option._id} value={option._id}>
            {option.lastName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
