import React from 'react'
import styled from 'styled-components'
import { Add, Featured } from '../products'
import { filterFeatured } from '../../helpers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const AddAndContainers = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Products = ({ products }) => (
  <Wrapper>
    {products &&
      <AddAndContainers>
        <Add />
        <Featured products={filterFeatured(products)} />
      </AddAndContainers>
    }
  </Wrapper>
)

export default Products
