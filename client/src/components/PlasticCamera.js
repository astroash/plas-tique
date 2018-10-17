import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Camera from 'react-camera';

export default class PlasticCamera extends Component {

  constructor () {
    super()
    this.state = {
      capturedPhoto: undefined,
      product: null,
    }
  } 

  takePicture = () => {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.setState({capturedPhoto: this.img.src });
    })
    .catch(err=> console.log(err))
  }

  render() {
    return (
      <div style={style.container}>
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
        <img
          alt="take a pic"
          style={style.captureImage}
          ref={(img) => {
                this.img = img;
          }}
        />
        { this.state.capturedPhoto ? 
        <Link to="/" className="btn btn-primary">
          Happy with your photo?
        </Link>
        : ''
        }

        { this.state.product ? 
        <Link  to={`/facts/${this.state.product.id}`} className="btn btn-primary">
          This is a {this.state.product}
        </Link>
        : ''
        }
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};