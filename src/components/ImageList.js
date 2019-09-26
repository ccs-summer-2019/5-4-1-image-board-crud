import React, {Component} from 'react';

class ImageItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      caption: ''
    };
    this.editToggle = this.editToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editToggle() {
    this.setState((prevState) => ({isEditing: !prevState.isEditing}));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const isEditing = this.state.isEditing;
    return (
      <li>
        <img src={this.props.image.url} />
        {isEditing ? (
          <input name="caption" value={this.state.caption} onChange={this.handleChange}/>
        ) : (
          <p>{this.props.image.caption}</p>
        )}
      {isEditing ? (
        <button type="button" onClick={() => {this.props.editImage(this.props.image, this.state.caption); this.editToggle()}}>Save</button>
      ) : (
        <React.Fragment>
          <button type="button" onClick={this.editToggle}>Edit</button>
          <button type="button" onClick={() => this.props.removeImage(this.props.image)}>Delete</button>
        </React.Fragment>
      )}
      </li>
    )
  }
}

class ImageList extends Component {
  render() {
    let images = this.props.images.map((image, index) => (
      <ImageItem key={index} image={image} removeImage={this.props.removeImage} editImage={this.props.editImage}/>
    ));

    return (
      <ul>
        {images}
      </ul>
    )
  }
}

export default ImageList;
