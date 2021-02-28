import React, { Component } from 'react';

class ApartmentDropDown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;
    return (
      <>
        <div>
          <label htmlFor="Apartment">Apartment:</label>
          <select className="form-select" name="Apartment" id="Apartment">
            {images &&
              images.map((apt) => (
                <option value={apt.type}>
                  {apt.type} &nbsp; {apt.price}
                </option>
              ))}
          </select>
        </div>
      </>
    );
  }
}

export default ApartmentDropDown;
