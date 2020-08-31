import React, { Component } from 'react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { Mutation } from 'react-apollo'
import { updateHasHeaderImage } from '../../../graphql'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Message = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: #F8F8FF;
  text-align: center;
  border: 2px dotted #F8F8FF;
  height: 165px;
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

    data.append('header', file, file.name)

    return axios.post(`/upload/header/image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Mutation mutation={updateHasHeaderImage}>
          {(updateHasHeaderImage, { data }) => (
            <Dropzone
              onDrop={acceptedFiles => {
                this.handleDrop(acceptedFiles)
                updateHasHeaderImage({ variables: { id: this.props.bid.id, hasHeaderImage: !this.props.bid.hasHeaderImage } })
              }}
              accept="image/png"
              minSize={0}
              maxSize={5242880}
              name="header"
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Message> Drag or Click Here To Add Image </Message>
                </div>
              )}
            </Dropzone>
          )}
        </Mutation>
      </Wrapper>
    )
  }
}

export default ImageDrop
