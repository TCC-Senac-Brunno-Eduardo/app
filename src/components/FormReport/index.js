import React from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FormReport() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.form}>
      
      <View>
        <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 18, padding: 16}}>Reporte uma aglomeração!</Text>
      </View>
        
        <View>
          <View style={{borderBottomWidth: 1, borderColor: '#000', borderRadius: 5, marginBottom: 16}}>
            <TextInput 
              placeholder='Título'
              errorStyle={{ color: 'red' }}
              errorMessage=''
              maxLength={50}
              style={{minHeight: 40, padding: 4}}
            />
          </View>
          <View style={{borderBottomWidth: 1, borderColor: '#000', borderRadius: 5, marginBottom: 16}}>
            <TextInput 
              placeholder='Descrição' 
              errorStyle={{ color: 'red' }}
              errorMessage=''
              multiline 
              maxLength={200}
              style={{padding: 8}}
            />
          </View>
        </View>

        <View style={{flex: 0, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start', minHeight: 80, marginBottom: 16, backgroundColor: '#f5f5f5', borderRadius: 5}}>
          
          <View style={{flex: 0.8, flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 8}}>
            
            <View style={{flex: 0.1, padding: 4}}>
              <MaterialCommunityIcons 
                name="map-marker" 
                size={28} color="#616161" 
                type="solid" 
                titleProps={{accessibilityHint: 'Ícone de endereço', accessibilityLabel:"Ícone de endereço", accessible:"true" }}
              />
            </View>

            <View style={{flex: 0.9, padding: 4}}>
              <Text style={{textAlign: 'center'}}>Rua DASDADAS DSX, 147 - Passo D' Areia - Porto Alegre - xxxxxxxxxxxxxxxxxx</Text>
            </View>
            
            
          </View>

          <View style={{flex: 0.2, flexDirection: "column", justifyContent: 'center', alignItems: 'center', padding: 8, borderLeftWidth: 1, borderLeftColor: '#c7c7c7'}}>
            <TouchableOpacity 
              onPress={(e) => console.log('Editar Endereço')}
            >
              <MaterialCommunityIcons 
                name="pencil-box-multiple" 
                size={32} color="#616161" 
                type="solid" 
                titleProps={{accessibilityHint: 'Editar endereço', accessibilityLabel:"Editar endereço", accessible:"true" }}
              />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.containerButtons}>
          <Button style={styles.button} color={'#FF0000'} accessibilityLabel="Cancelar" title="Cancelar" onPress={(e) => console.log('Cancelar')}/>
          <Button style={styles.button} color={'#00a830'} accessibilityLabel="Reportar" title="Reportar" onPress={(e) => console.log('Reportar')}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  form: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 20
  }
});