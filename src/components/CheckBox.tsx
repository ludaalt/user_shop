import { useState } from "react";

const CheckBox = ({ item, addBrand, deleteBrand }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkboxHandleChange = () => {
    if (!isChecked) {
      addBrand(item.title);
    } else {
      deleteBrand(item.title);
    }

    setIsChecked((prev) => !prev);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={checkboxHandleChange}
        value={item.title}
      />
      {item.title}
    </label>
  );
};

export default CheckBox;
