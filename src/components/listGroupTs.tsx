import React from "react";

interface Props {
  items : [string, string],
  onItemSelect :  (arg0: string) => void,
  selectedItem : string
}


const ListGroup = (props : Props ) => {
  const {
    items,
    onItemSelect,
    selectedItem,
  } = props;
  return (
    <div className="list-group list-group-horizontal mb-5">
      {items.map((typ : string, index : number) => (
        <button
          key={index}
          onClick={() => onItemSelect(typ)}
          className={
            typ === selectedItem
              ? "list-group-item  list-group-item-action active"
              : "list-group-item  list-group-item-action"
          }
        >
          {typ}
        </button>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
