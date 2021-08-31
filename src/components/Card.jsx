import React from 'react'
import styled from 'styled-components'
import { IconFlame, IconStar, IconRestaurant } from '@/components/SvgFiles'

export default function Card() {
  return (
    <>
      <CardStyles className="meal">
        <img
          className="meal-img"
          src="images/meals/meal-1.jpg"
          alt="Japanese Gyozas"
        />
        <div className="meal_content">
          <div className="meal_tags">
            <span className="tag tag_vegetarian">Vegetarian</span>
          </div>
          <p className="meal_title">Japanese Gyozas</p>
          <ul className="meal_attributes">
            <li className="meal_attribute">
              <div>
                <IconFlame />
              </div>
              <span>
                <strong>650 </strong>calories
              </span>
            </li>
            <li className="meal_attribute">
              <div>
                <IconRestaurant />
              </div>
              <span>
                NutriScore ® <strong>74</strong>
              </span>
            </li>
            <li className="meal_attribute">
              <div>
                <IconStar />
              </div>
              <span>
                <strong>4.9 </strong>
                rating (537)
              </span>
            </li>
          </ul>
        </div>
      </CardStyles>
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

      .tag_paleo {
        background-color: #ffd43b;
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

        div {
          display: block;
          height: 2.4rem;
          width: 2.4rem;
          color: #e67e22;

          svg {
            display: block;
            height: 100%;
            width: 100%;
            stroke: currentColor;
          }
        }
      }
    }
  }
`
