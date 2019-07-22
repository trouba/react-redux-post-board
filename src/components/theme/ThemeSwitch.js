import React, { Component } from 'react';
import './ThemeSwitch.css';
import { connect } from 'react-redux';
import { applyTheme } from '../../redux/actions'

class ThemeSwitch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentTheme: this.props.theme,
      themes: ['bluenove', 'other']
    }
  }

  handleSelectChange = event => {
    const target = event.target;
    const value = target.value;
    this.props.onApplyTheme(value)
    this.setState({
      currentTheme: value
    })
  }

  render(props) {
    return (
      <div className="switch-container">
        <div className="switch-label">Switch theme</div>        
        <select value={this.state.currentTheme} onChange={this.handleSelectChange} className="switch-select">
          <option value="bluenove">Bluenove</option>
          <option value="other">Other</option>  
        </select>
      </div>
    );
  }
};

const mapDispatchprops = (dispatch) => {
  return { onApplyTheme: theme => dispatch(applyTheme(theme)) }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(
  mapStateToProps,
  mapDispatchprops
)(ThemeSwitch);
