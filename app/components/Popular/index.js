import React, { Component } from 'react';
import Languages from './languages';
import Repos from './Repos';
import PropTypes from 'prop-types';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
    };

    this.onLanguageSelect = this.onLanguageSelect.bind(this);
  }

  onLanguageSelect(e) {
    this.setState({
      selectedLanguage: e.target.innerText
    });
    this.props.onLanguageSelect(e.target.innerText);
  }

  render() {
    return (
      <div>
        <Languages selectedLanguage={this.state.selectedLanguage} onLanguageSelect={this.onLanguageSelect}/>
        <Repos repos={this.props.repos} />
      </div>
    )
  }
}

Popular.propTypes = {
  repos: PropTypes.array,
  onLanguageSelect: PropTypes.func.isRequired
};

Popular.defaultProps = {
  repos: []
};

export default Popular;
