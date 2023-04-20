import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { brands } from "../data/brands";
import CheckBox from "./CheckBox";
import Button from "./Button";

type Props = {
  setFilteredBrands: Function;
  showFiltered: () => void;
  showProducts: () => void;
  filteredBrands: number[];
};

const StyledAside = styled.aside`
  padding: 60px 50px;
  max-width: 250px;

  h2 {
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  ul {
    margin: 5px 0;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 30px 0;
`;

const Aside: FC<Props> = ({
  setFilteredBrands,
  showFiltered,
  showProducts,
  filteredBrands,
}) => {
  const addBrand = (value: string) => {
    setFilteredBrands((prev: number[]) => {
      if (!prev) return [value];
      return [...prev].concat(+value.split(" ")[1]);
    });
  };

  const deleteBrand = (value: string) => {
    setFilteredBrands((prev: number[]) => {
      if (prev) {
        prev.filter((item: number) => {
          return item !== +value.split(" ")[1];
        });
      }
      return [];
    });
  };

  const handleFiltering = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showFiltered();
  };

  const handleResetFiltering = () => {
    showProducts();
  };

  return (
    <StyledAside>
      <form>
        <h2>Бренды</h2>
        <ul>
          {brands.map((item) => (
            <li key={item.title}>
              <CheckBox
                item={item}
                addBrand={addBrand}
                deleteBrand={deleteBrand}
                filteredBrands={filteredBrands}
              />
            </li>
          ))}
        </ul>

        <div>
          <Button
            disabled={filteredBrands?.length === 0}
            onClick={handleFiltering}
          >
            Применить
          </Button>
          <Button
            disabled={filteredBrands?.length === 0}
            type="reset"
            onClick={handleResetFiltering}
          >
            Сбросить
          </Button>
        </div>
      </form>

      <StyledLink to={"/cart"}>
        <AiOutlineShoppingCart size="35px" color="#30d5c8" />
      </StyledLink>
    </StyledAside>
  );
};

export default Aside;
