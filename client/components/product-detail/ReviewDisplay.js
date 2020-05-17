import React from 'react'
import styled from 'styled-components'
import { Rating } from '@material-ui/lab'

const findAverage = reviews => {
  let sum = 0
  reviews.forEach(review => { sum += review.rating })
  return sum / reviews.length
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Total = styled.div`
  font-size: 12px;
`

const ReviewDisplay = ({ reviews }) => (
  <Wrapper>
    <Rating name="half-rating" size={"small"} defaultValue={findAverage(reviews)} precision={0.5} readOnly />
    <Total>
      {`(${reviews.length}) reviews`}
    </Total>
  </Wrapper>
)

export default ReviewDisplay
