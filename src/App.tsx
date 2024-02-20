import { FC, Fragment, useState } from "react";

interface Item {
  name: string;
  color: string;
}

export const App: FC<{ items: Item[] }> = ({ items = [] }) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const toggleSelection = (itemName: string) => {
    setSelectedItems((prevSelectedItems) => {
      const itemIndex = prevSelectedItems.findIndex(
        (item) => item.name === itemName
      );
      if (itemIndex !== -1) {
        const updateItem = [...prevSelectedItems];
        updateItem.splice(itemIndex, 1);
        return updateItem;
      } else {
        const selectedItem = items.find((item) => item.name === itemName);
        return selectedItem
          ? [...prevSelectedItems, selectedItem]
          : prevSelectedItems;
      }
    });
  };

  const selectAllItems = () => {
    setSelectedItems([...items]);
  };

  const deselectAllItems = () => {
    setSelectedItems([]);
  };

  console.log(selectedItems);

  return (
    <Fragment>
      <div>
        {selectedItems.length > 0 && (
          <div>
            <h2>Selected Items:</h2>
            <ul>
              {selectedItems.map((selectedItem) => (
                <li key={selectedItem.name}>{selectedItem.name}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={selectAllItems}>Select All</button>
        <button onClick={deselectAllItems}>Deselect All</button>
      </div>
      <ul className="List">
        {items.map((item) => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color} ${
              selectedItems.some(
                (selectedItem) => selectedItem.name === item.name
              ) && "selected"
            }`}
            onClick={() => toggleSelection(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
