import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectApt } from '../store/actions/apratmentActions';

class ApartmentDropDown extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.selectAppartment(event.target.value);
  };

  render() {
    const { images } = this.props;
    return (
      <>
        <div>
          <label htmlFor="Apartment">Apartment:</label>
          <select
            className="form-select apt-input"
            name="Apartment"
            id="Apartment"
            onChange={this.handleChange}
            value={this.props.selectedApt}
          >
            {images &&
              images.map((apt, i) => (
                <option key={i} value={apt.file}>
                  {apt.type} &nbsp; {apt.price}
                </option>
              ))}
          </select>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedApt: state.apartments.selectedApt,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectAppartment: (selectedApt) => {
      dispatch(selectApt({ selectedApt }));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDropDown);
