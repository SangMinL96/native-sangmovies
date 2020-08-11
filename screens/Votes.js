import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Vote = styled.Text`
  color: #9c9191;
`;

const Votes = ({ votes }) => <Vote>💖 {votes}/10</Vote>;

Votes.prototype = {
  title: PropTypes.string.isRequired,
};

export default Votes;
