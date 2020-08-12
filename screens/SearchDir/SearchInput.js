import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Input = styled.TextInput`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 40px;
  border: none;

  border-radius: 30px;
  font-size: 15px;
  color: black;
  background-color: #dfe6e9;
`;
export default ({ placeholder, onSubmit, onChange, value }) => (
  <Input
    placeholderTextColor={"black"}
    returnKeyType={"search"}
    value={value}
    placeholder={placeholder}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
  />
);
