import React, { Component } from 'react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import axios from 'axios'

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: #383837;
  border: 4px dotted #F8F8FF;
  padding: 10px;
  border-radius: 4px;
`

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 65px;
  color: #F8F8FF;
  text-align: center;
`

const Message = styled.div`
  color: #F8F8FF;
  text-align: center;
`

class ImageDrop extends Component {
  constructor(props) {
    super(props)

    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(acceptedFiles) {
    const file = acceptedFiles[0]
    let data = new FormData()

    data.append('header', file, file.name)

    return axios.post(`/upload/header-image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Title> Header Image </Title>
        <Dropzone
          onDrop={this.onDrop}
          accecpt="image/png"
          minSize={0}
          maxSize={5242880}
          name="header"
        >
        {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
                <Message> Drag or Click Here To Add Image </Message>
            </div>
        )}
        </Dropzone>
      </Wrapper>
    )
  }
}

export default ImageDrop
