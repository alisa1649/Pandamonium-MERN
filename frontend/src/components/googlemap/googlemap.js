import React from "react";
/* global google */

class SearchBar extends React.Component {
  constructor(props) {

    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    const options = {
      types: ['(cities)'],
      componentRestrictions: {country: "us"}
     };
     
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current, options);

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    this.setState ({
        name: place.address_components[0],
        state: place.address_components[1]
    })
  }

  render() {
    return (
        <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Enter your address"
         type="text"></input>
    );
  }
}

export default SearchBar;