import React, {Component} from 'react';

class ImageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      url: '',
      caption: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let image = {
      url: this.state.url,
      caption: this.state.caption
    };

    this.props.addImage(image);

    this.setState({url: '', caption: ''});

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="add image url" name="url" value={this.state.url} onChange={this.handleChange}/>
        <input type="text" placeholder="add image caption" name="caption" value={this.state.caption} onChange={this.handleChange}/>
        <button>Add Image</button>
      </form>
    )
  }
}

export default ImageForm;
