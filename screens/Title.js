import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
  margin-left: 10px;
`;

const Title = ({ title }) => <Text>{title}</Text>;

Title.prototype = {
  title: PropTypes.string.isRequired,
};

export default Title;
