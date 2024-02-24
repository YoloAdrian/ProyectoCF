import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { Boton } from './byc' 

export const Encabezado = () => {
  return (
    <View style={styles.Encabezado} >
      <Image style={[styles.imagenesContenedores, { marginLeft: 30, marginTop: 25, }]} source={require('../assets/src/girar-a-la-izquierda.png')}/>
      <View style={styles.CarritoEncabezado}>
        <Text style={styles.textoCarritoEncabezado}>Cuenta Usuario</Text>
        <Image style={styles.imagenesContenedores} source={require('../assets/src/usuario.png')}/>
      </View>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.Cuerpo}>
        <Boton style={styles.botoncom} logo={require('../assets/src/usuario (1).png')} texto={'Cambio de nombre'} color={'#B2BABB'} colorb={'#C5E1A5'} alto={90} ancho={300}/>
        <Boton style={styles.botoncom} logo={require('../assets/src/canblanco.png')} texto={'Cambio de contraseña'} color={'#B2BABB'} colorb={'#C5E1A5'} alto={90} ancho={300}/>
        <Boton style={styles.botoncom} logo={require('../assets/src/simbolo-de-lista-de-tres-elementos-con-puntos.png')} texto={'Informacion de contacto'} color={'#B2BABB'} colorb={'#C5E1A5'} alto={90} ancho={300}/>
        <Boton style={styles.botoncom} logo={require('../assets/src//anadir-al-carrito.png')} texto={'Compras anteriores'} color={'#B2BABB'} colorb={'#C5E1A5'} alto={90} ancho={300}/>
        <Boton style={styles.botoncom} logo={require('../assets/src/flecha-izquierda.png')} texto={'Desconectar'} color={'#B2BABB'} colorb={'#C5E1A5'} alto={90} ancho={300}/>
    </View>
  )
}



const styles = StyleSheet.create({
  Encabezado:{
    flex:1.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#EF6C00',
    marginTop: 10,
    width: '100%',
  },
  CarritoEncabezado:{
    backgroundColor: '#D0D3D4',
    opacity: .8,
    color: 'black',
    width: 280,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 15,
    marginRight: 20,
  },
  textoCarritoEncabezado:{
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  imagenesContenedores:{
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    width:50,
    height:50,
  },
  Cuerpo:{
    flex:8,
    marginTop: 30,
  },     


})