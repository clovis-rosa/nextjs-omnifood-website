import React from 'react'
import styled from 'styled-components'
import { IconCheckmark } from '@/components/SvgFiles'
import { CardListData } from '@/data/CardListData'

export default function CardList() {
  return (
    <>
      {CardListData.map((node) => {
        return (
          <CardStyles key={node.id}>
            <h3 className="heading-tertiary">{node.diets_heading}</h3>

            <ul className="list">
              {node.diets_item.map((item) => {
                return (
                  <li className="list_item">
                    <div className="icon_inner">
                      <IconCheckmark />
                    </div>
                    <span>{item.list_item}</span>
                  </li>
                )
              })}
            </ul>
          </CardStyles>
        )
      })}
    </>
  )
}

const CardStyles = styled.div`
  .heading-tertiary {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.5px;
    color: #333;
    margin-bottom: 3.2rem;
    max-height: 100%; //
  }

  .list {
    list-style: none;
    display: flex;
    justify-content: space-around; //
    flex-direction: column;
    /* gap: 1.6rem; */
    height: 80%; //

    .list_item {
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      gap: 1.6rem;
      line-height: 1.2;

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

      span {
        font-size: 1.8rem;
        line-height: 1.2;
      }
    }
  }
`
