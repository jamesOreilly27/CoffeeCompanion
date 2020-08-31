import React, { Component } from 'react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import axios from 'axios'

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
`

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 5px;
  color: #F8F8FF;
  text-align: center;
  border: 2px dotted #F8F8FF;
  height: 300px;
  width: 90%;
  border-radius: 4px;
`

class ImageDrop extends Component {
  constructor(props) {
    super(props)

    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop(acceptedFiles) {
    const file = acceptedFiles[0]
    let data = new FormData()

    data.append('product', file, file.name)

    return axios.post(`/upload/product/image`, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Dropzone
          onDrop={acceptedFiles => {
            this.handleDrop(acceptedFiles)
            this.props.flipHasImage()
            this.props.updateFileName(acceptedFiles[0].name)
          }}
          accecpt="image/png"
          minSize={0}
          maxSize={5242880}
          name="product"
        >
          {({ getRootProps, getInputProps }) => (
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
