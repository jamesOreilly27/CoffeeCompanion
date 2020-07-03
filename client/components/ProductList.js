import React from 'react'
import { Redirect } from "react-router-dom"
import styled from 'styled-components'
import { Title } from './styled-components'
import { useLazyQuery } from '@apollo/react-hooks'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { ProductCard } from '../components/product-card'
import { getProductByName } from '../graphql'
import { nameToUrl } from './helpers'
import history from './history'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #383737;
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

const chooseTitle = (category, featured) => {
  if(category) return `${category.name}`
  else if(featured) return `Featured Products`
  else return 'Products'
}

const ProductList = ({ products, category, featured }) => {
  const [getProduct, { loading, data }] = useLazyQuery(getProductByName)
  data && data.getProductByName && history.push(`/products/${nameToUrl(data.getProductByName.name)}`)
  return (
    <Wrapper>
      {data && data.getProductByName && <Redirect to={`/products/${nameToUrl(data.getProductByName.name)}`} /> }
      <Title>
        {chooseTitle(category, featured)}
      </Title>
      {category &&
        <div>
          {category.description}
        </div>
      }
      <Container>
        {products && !category && !featured &&
          <SearchForm onSubmit={evt => {
            evt.preventDefault()
            const element = document.getElementById('product-search')
            getProduct({ variables: { name: element.value } })
          }}>
            <SearchBar
              id="product-search"
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
          {products && products.map(product => <ProductCard key={product.id} product={product} />)}
        </ProductContainer>
      </Container>
    </Wrapper>
  )
}

export default ProductList
