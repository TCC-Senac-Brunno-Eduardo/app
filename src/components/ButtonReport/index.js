import React, { useContext } from 'react';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';

import { FormReportContext } from '../../contexts/FormReportContext';

export default function ButtonReport() {

  const { setShowForm } = useContext(FormReportContext);

  return (
    <Container>
      <Button
        icon={
          <MaterialCommunityIcons name="alert" size={32} color="white" type="solid" titleProps={{accessibilityHint: 'Reportar', accessibilityLabel:"Reportar", accessible:"true" }}/>
        }
        onPress={(e) => setShowForm(true)}
        buttonStyle={{width: '100%', height: '100%', padding: 8, borderRadius: 100}}
      />
    </Container>
    
  );
}