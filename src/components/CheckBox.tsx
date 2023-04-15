import { useState } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  padding: 2px 0;
  display: flex;
  align-items: center;
  text-transform: lowercase;

  input {
    margin-right: 10px;
  }
`;

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
    <StyledLabel>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={checkboxHandleChange}
        value={item.title}
      />
      {item.title}
    </StyledLabel>
  );
};

export default CheckBox;
