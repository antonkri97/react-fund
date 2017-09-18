import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Languages = styled.ul`
  display: flex;
  justify-content: center;
`;

const Language = styled.li`
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.selectedLanguage ? '#d0021b' : null};
  list-style-type: none;
`;

const PopularLanguages = ({ onLanguageSelect, selectedLanguage }) => {
  const languages = [ 'All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python' ];

  return (
    <Languages>
      {
        languages.map((lang, i) => (
          <Language selectedLanguage={lang === selectedLanguage} onClick={onLanguageSelect} key={i}>
            {
              lang
            }
          </Language>
        ))
      }
    </Languages>
  )
};

PopularLanguages.propTypes = {
  onLanguageSelect: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired
};

export default PopularLanguages;
