import React, { Component } from 'react'
import styled from 'styled-components'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { getProductByName, getOneCategory } from '../../graphql'
import { Redirect } from 'react-router-dom'
import { nameToUrl } from '../helpers'
import history from '../history'

const Wrapper = styled(Autocomplete)`
  && .MuiOutlinedInput-root {
    height: 4vh;
  }

  && .MuiInputLabel-outlined {
    margin-top: -3px;
  }

  && .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
    margin-top: 2px;
  }

  && .MuiAutocomplete-input:first-child {
    margin-top: -6px;
  }
`

const FormFill = ({ selectOptions, displayValue }) => (
  <div>
    {selectOptions() &&
      <Wrapper
        id="nav-search"
        renderInput={(params) => <TextField {...params} label="Search..." variant="outlined" />}
        size="small"
        style={{ width: 160 }}
        options={selectOptions()}
        getOptionLabel={option => option.name}
        onInputChange={(evt, value, reason) => {
          if (reason !== 'input') {
            history.push(`/${displayValue}/${nameToUrl(value)}`)
            const form = document.getElementById('nav-form')
            form.submit()
          }
        }}
      >
      </Wrapper>
    }
  </div>
)

export default FormFill
