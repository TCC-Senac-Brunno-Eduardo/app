import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native'

export default function MarkerInfo({show, data}) {
  console.log(show)
  console.log(data)

  const calcularTempoReport = (d) => {
    const date = new Date(d);
    const currentDate = new Date();

    var diff = currentDate - date;
    diff /= 1000;

    var minutes = Math.round(diff % 60);
    diff = Math.floor(diff / 60);

    var hours = Math.round(diff % 24);
    return { hours, minutes }
  }

  return (
    <View style={{position: 'absolute', bottom: 0, left: 0, backgroundColor: '#fff', width: '100%', padding: 16}}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 5 }}>{data.title}</Text>
      <Text style={{ marginBottom: 5 }}>{data.description}</Text>
      <Text>{data.city}</Text>
      <Text>Reportado há {calcularTempoReport(data.dateTimeReport)}</Text>
    </View>
  );
}