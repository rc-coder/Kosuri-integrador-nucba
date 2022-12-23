import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TagCard, TagContainer, TagImg, TagsMenu } from './Tags';
import { useState } from 'react';
import {
  FoodCard,
  FoodGrid,
  SectionName,
  TypeCard,
  TypeName,
} from './FoodGrid';
import { selectFood } from '../../redux/features/selectedFood/selectedFoodSlice';
import { formatPrice } from '../../Utils';

const MenuStyled = styled.div`
  height: auto;
  margin: 10px 20px 50px 20px;
  z-index: 3;
`;

export const Menu = () => {
  const dispatch = useDispatch();
  const [section, setSection] = useState(null);
  let { menuItems } = useSelector((state) => state.products);

  return (
    <MenuStyled>
      <TagsMenu>
        {Object.entries(menuItems).map(([section, info]) => (
          <TagContainer>
            <TagCard key={info.id} onClick={() => setSection(section)}>
              <TagImg img={info.imgTag} />
            </TagCard>
            <p>{info.sectionName}</p>
          </TagContainer>
        ))}
      </TagsMenu>
      {section ? (
        <>
          <SectionName>
            <h1>{section}</h1>
          </SectionName>
          <FoodGrid>
            {menuItems[section].items.map((item) => (
              <TypeCard>
                <TypeName>
                  <h2>{item.type}</h2>
                </TypeName>
                {item.subItems.map((subItem) => (
                  <FoodCard onClick={() => dispatch(selectFood(subItem))}>
                    <h3>{subItem.name}</h3>
                    <p>{subItem.description}</p>
                    <p>
                      <strong>{formatPrice(subItem.price)}</strong>
                    </p>
                  </FoodCard>
                ))}
              </TypeCard>
            ))}
          </FoodGrid>
        </>
      ) : (
        <SectionName>
          <h1>¿Con que te tentamos hoy?</h1>
        </SectionName>
      )}
    </MenuStyled>
  );
};
