import { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { IBrand } from "../types/types";

type Props = {
  item: IBrand;
  addBrand: (brand: string) => void;
  deleteBrand: (brand: string) => void;
  filteredBrands: number[];
};

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

const CheckBox: FC<Props> = ({
  item,
  addBrand,
  deleteBrand,
  filteredBrands,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkboxHandleChange = () => {
    if (!isChecked) {
      addBrand(item.title);
      setIsChecked(true);
    } else {
      deleteBrand(item.title);
      setIsChecked(false);
    }
  };

  useEffect(() => {
    if (filteredBrands.length === 0) setIsChecked(false);
  }, [filteredBrands]);

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
