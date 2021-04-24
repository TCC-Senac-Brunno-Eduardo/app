import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loader (props) {
  return <ActivityIndicator size={props.size} color={props.color || '#000'} />
};