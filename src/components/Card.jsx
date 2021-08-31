import React from 'react'
import styled from 'styled-components'
import { IconFlame, IconStar, IconRestaurant } from '@/components/SvgFiles'
import { CardData } from '@/data/CardData'

export default function Card() {
  return (
    <>
      {CardData.map(
        ({
          id,
          img_src,
          meal_tag_01,
          meal_tag_02,
          meal_tag_03,
          meal_title,
          icon_inner_01,
          icon_inner_02,
          icon_inner_03,
          icon_inner_strong_01,
          icon_inner_strong_02,
          icon_inner_strong_03,
        }) => (
          <CardStyles className="meal" key={id}>
            <img
              className="meal-img"
              src={`images/meals/${img_src}`}
              alt={meal_title}
            />
            <div className="meal_content">
              <div className="meal_tags">
                <span
                  className={`tag ${id === '002' ? 'none' : 'tag_vegetarian'}`}
                >
                  {meal_tag_01}
                </span>
                <span className={`tag ${id === '001' ? 'none' : 'tag_vegan'}`}>
                  {meal_tag_02}
                </span>
                <span className={`tag ${id === '001' ? 'none' : 'tag_paleo'}`}>
                  {meal_tag_03}
                </span>
              </div>
              <p className="meal_title">{meal_title}</p>
              <ul className="meal_attributes">
                <li className="meal_attribute">
                  <div className="icon_inner">
                    <IconFlame />
                  </div>
                  <span>
                    <strong>{icon_inner_strong_01}</strong>
                    {icon_inner_01}
                  </span>
                </li>
                <li className="meal_attribute">
                  <div className="icon_inner">
                    <IconRestaurant />
                  </div>
                  <span>
                    {icon_inner_02}
                    <strong>{icon_inner_strong_02}</strong>
                  </span>
                </li>
                <li className="meal_attribute">
                  <div className="icon_inner">
                    <IconStar />
                  </div>
                  <span>
                    <strong>{icon_inner_strong_03}</strong>
                    {icon_inner_03}
                  </span>
                </li>
              </ul>
            </div>
          </CardStyles>
        )
      )}
    </>
  )
}

const CardStyles = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }

  .meal_img {
    width: 100%;
  }

  .meal_content {
    padding: 3.2rem 4.8rem 4.8rem 4.8rem;

    @media (max-width: 59em) {
      padding: 2.4rem 3.2rem 3.2rem 3.2rem;
    }

    .meal_tags {
      margin-bottom: 1.2rem;
      display: flex;
      gap: 0.4rem;

      .tag {
        display: inline-block;
        padding: 0.4rem 0.8rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #333;
        border-radius: 100px;
        font-weight: 600;
      }

      .tag_vegetarian {
        background-color: #51cf66;
      }

      .tag_vegan {
        background-color: #94d82d;
      }

      .tag_paleo {
        background-color: #ffd43b;
      }

      .none {
        display: none;
      }
    }

    .meal_title {
      font-size: 2.4rem;
      color: #333;
      font-weight: 600;
      margin-bottom: 3.2rem;
    }

    .meal_attributes {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .meal_attribute {
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        .icon_inner {
          display: block;
          height: 2.4rem;
          width: 2.4rem;
          color: #e67e22;

          svg {
            height: 100%;
            width: 100%;
            stroke: currentColor;
          }
        }
      }
    }
  }
`
