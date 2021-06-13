import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { MapContext } from '../../contexts/MapContext';

import { dislikeService, likeService, strikeService } from '../../services/api'

import {
  ButtonClose
} from './styles';


export default function MarkerInfo({show, data}) {

  const buttonsName = {
    like: {
      outline: 'thumb-up-outline',
      solid: 'thumb-up'
    },
    dislike: {
      outline: 'thumb-down-outline',
      solid: 'thumb-down'
    }
  }

  const [disabledButton, setDisabledButton ] = useState(false);
  const [currentButtonLike, setCurrentButtonLike ] = useState(buttonsName['like']['outline']);
  const [currentButtonDilike, setCurrentButtonDislike ] = useState(buttonsName['dislike']['outline']);

  const { showMarkerInfo, setShowMarkerInfo } = useContext(MapContext);

  const formatarData = (d) => {
    const date = moment(d);
    return `${String(date.date()).padStart(2, '0')}/${String(date.month() + 1).padStart(2, '0')} às ${String(date.hour()).padStart(2, '0')}:${(String(date.minute()).padStart(2, '0'))}`
  }

  const handleLike = async (id) => {
    if(disabledButton) return;
    const response = await likeService(id);
    setCurrentButtonLike(buttonsName['like']['solid']);
    setDisabledButton(true)
  }
  
  const handleDislike = async (id) => {
    if(disabledButton) return;
    const response = await dislikeService(id);
    setCurrentButtonDislike(buttonsName['dislike']['solid']);
    setDisabledButton(true)
  }

  const handleStrike = async (id) => Alert.alert(
    "Denuncia de ponto irregular",
    "Você confirma que esse ponto está em desacordo com a realidade e/ou objetivo do aplicativo?",
    [
      {
        text: "Cancelar",
        style: "cancel"
      },
      { text: "Confimar", onPress: async () => {
        const response = await strikeService(id);
        Alert.alert("Feedback enviado!","Obrigado!")
      } }
    ]
  );

  return (
    <View style={{position: 'absolute', bottom: 0, left: 0, backgroundColor: '#fff', width: '100%', padding: 16}}>
      <View style={{position: 'absolute', top: 0, right: 0}}>
        <ButtonClose onPress={() => setShowMarkerInfo(!showMarkerInfo)}>
          <Text style={{ fontWeight: '700'}}>X</Text>
        </ButtonClose>
      </View>
      <View style={{ paddingTop: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 5 }}>{data.title}</Text>
        <Text style={{ marginBottom: 5 }}>{data.description}</Text>
        <Text>{data.city}</Text>
        <Text>Reportado em {formatarData(data.dateTimeReport)}</Text>
      </View>
      <View style={{ paddingTop: 16, flex: 0, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start', alignItems: 'center' }}>
        <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
          <Text style={{ marginRight: 5 }}>{data.iteration?.like}</Text>
          <TouchableOpacity disable={disabledButton}  onPress={ (e) => { handleLike(data.id) } }>
            <MaterialCommunityIcons name={currentButtonLike} size={28} color="black" type="solid" titleProps={{accessibilityHint: 'Like', accessibilityLabel:"Like", accessible:"true" }}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{ marginRight: 5 }}>{data.iteration?.dislike}</Text>
          <TouchableOpacity  disable={disabledButton}onPress={ (e) => { handleDislike(data.id) } }>
            <MaterialCommunityIcons name={currentButtonDilike} size={28} color="black" type="solid" titleProps={{accessibilityHint: 'Dislike', accessibilityLabel:"Dislike", accessible:"true" }}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingTop: 24 }}>
        <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{flex: 0, flexDirection: 'row', alignItems: 'center'}} onPress={ (e) => { handleStrike(data.id) } }>
            <MaterialCommunityIcons name="flag" size={28} color="black" type="solid" titleProps={{accessibilityHint: 'Dislike', accessibilityLabel:"Dislike", accessible:"true" }}/>
            <Text style={{ marginLeft: 5 }}>Denunciar esse ponto</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}