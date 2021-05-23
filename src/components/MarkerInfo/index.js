import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native'

export default function MarkerInfo({show, data}) {
  const calcularTempoReport = (d) => {
    const date = new Date(d);
    const currentDate = new Date();
    return '6h'
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