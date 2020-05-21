import React from 'react'
import { Redirect } from "react-router-dom"
import styled from 'styled-components'
import { useLazyQuery } from '@apollo/react-hooks'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { ProductCard } from '../components/product-card'
import { getProductByName } from '../graphql'
import history from './history'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  width: 95vw;
  border-radius: 4px;
  padding: 10px;
`

const SearchForm = styled.form`

`

const SearchBar = styled(Autocomplete)`
  margin-bottom: 15px;
`

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`

const chooseTitle = category => {
  let title
  category ? title = category.name : title = 'Products'
  return title
}

const ProductList = ({ products, category }) => {
  const [getProduct, { loading, data }] = useLazyQuery(getProductByName)
  data && data.getProductByName && history.push(`/product/${data.getProductByName.id}`)
  return (
    <Wrapper>
      {data && data.getProductByName && <Redirect to={`/product/${data.getProductByName.id}`} /> }
      <Title>
        {chooseTitle(category)}
      </Title>
      {category &&
        <div>
          {category.description}
        </div>
      }
      <Container>
        {products &&
          <SearchForm onSubmit={evt => {
            evt.preventDefault()
            const element = document.querySelector('.MuiInputBase-input')
            getProduct({ variables: { name: element.value } })
          }}>
            <SearchBar
              id="demo"
              options={products.sort((a, b) => a.categories[0].name.localeCompare(b.categories[0].name))}
              size={"small"}
              getOptionLabel={option => option.name}
              style={{ width: 300 }}
              renderInput={params => <TextField {...params} label="Search..." variant="outlined" />}
              onInputChange={(evt, value, reason) => {
                if(reason !== 'input') {
                  getProduct({ variables: { name: value } })
                }
              }}
              groupBy={(option) => option.categories[0].name}
            />
          </SearchForm>
        }
        <ProductContainer>
          {products && products.map(product => <ProductCard product={product} key={product.id} />)}
        </ProductContainer>
      </Container>
    </Wrapper>
  )
}

export default ProductList
