import { View, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Boton, Caja } from './byc' 

export const Encabezado=()=>{
    return(
      <View style={estilosLog.encabezado}>
        <Image style={estilosLog.imagen} source={require('../assets/src/hojas-de-coca.png')}/>
        <Caja contenido={'Crunchy Fruits'}/>
      </View>
    )
}

export const Cuerpo=()=>{
    return(
        <View style={estilosLog.encabezado}>
            <Boton texto={'User'} logo={require('../assets/src/usuario (1).png')} color={'#ECF0F1'} colorb={'#C5E1A5'}/>
            <Boton texto={'password'} logo={require('../assets/src/candado.png')} color={'#ECF0F1'} colorb={'#C5E1A5'}/>
            <Image style={estilosLog.imagennaranja} source={require('../assets/src/naranja (1).png')}/>
        </View>
    )
}

const estilosLog = StyleSheet.create({
    encabezado:{
      flex:1.5,
    },
    imagennaranja:{
        width:130,
        height:130,
        marginTop:20,
        marginLeft: 70,
    },
    imagen:{
        width:100,
        height:100,
        marginTop:120,
        marginLeft: 230,
    }

  });