import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectApt } from '../store/actions/apratmentActions';

class ApartmentDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentType: '1 Bedroom',
    };
  }

  handleChange = (event) => {
    this.props.selectAppartment(event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    const { images } = this.props;
    return (
      <>
        <div>
          <label htmlFor="Apartment">Apartment:</label>
          <select
            className="form-select"
            name="Apartment"
            id="Apartment"
            onChange={this.handleChange}
          >
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

function mapStateToProps(state) {
  return {
    selectedApt: state.selectedApt,
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
