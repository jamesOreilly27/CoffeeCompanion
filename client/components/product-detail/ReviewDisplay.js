import React from 'react'
import styled from 'styled-components'
import { Rating } from '@material-ui/lab'

const findAverage = reviews => {
  let sum = 0
  reviews.forEach(review => {
    sum += review.rating
    console.log('TESTING', sum)
  })
  return sum / reviews.length
}

const Wrapper = styled.div`
  display: flex;
`

const Total = styled.div`

`

const ReviewDisplay = ({ reviews }) => (
  <Wrapper>
    {console.log('AVERAGE', findAverage(reviews))}
    <Rating name="half-rating" defaultValue={findAverage(reviews)} precision={0.5} readOnly />
    <Total>
      {`(${reviews.length}) reviews`}
    </Total>
  </Wrapper>
)

export default ReviewDisplay
