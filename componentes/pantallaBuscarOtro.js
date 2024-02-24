import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'
import { ContenedoresProductos, Boton } from './byc' 
import { estilos } from './estilos'


export const Encabezado = () => {
  return (
    <View style={styles.Encabezado} >
      <Image style={[styles.imagenesContenedores, { marginLeft: 30, marginTop: 25, }]} source={require('../assets/src/lupa.png')}/>
      <View style={styles.CarritoEncabezado}>
      <TextInput
          style={styles.input}
          placeholder="Buscar"
        />
      </View>
      <Image style={[styles.imagenesContenedores, { marginLeft: -5, marginTop: 25, }]} source={require('../assets/src/girar-a-la-izquierda.png')}/>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.Cuerpo}>
          <ContenedoresProductos producto={'Chips de fresa y naranja'} imagen={require('../assets/src/productos/T4xyd_k7Rum6saSP0bEwxw.jpg')} presentacion={'1 Caja - 5 piezas'} precio={'$200/180'}/>
          <Text style={[estilos.contenedorDescuentos, { left: 45, top: 120 }]}>10% OFF</Text>
          <ContenedoresProductos producto={'Chips de fresa y durazno'} imagen={require('../assets/src/productos/empaquetado.jpg')} presentacion={'2 Caja - 3 piezas'} precio={'$300'}/>
          <ContenedoresProductos producto={'Chips de durazno '} imagen={require('../assets/src/productos/Nw9wwyzzQSqahguMU_F64w.jpg')} presentacion={'2 piezas Individuales'} precio={'$50'}/>
          <ContenedoresProductos producto={'Chips de platano y manzana'} imagen={require('../assets/src/productos/IbAIxpXYQISLMa2h_ln9eA.jpg')} presentacion={'1 Caja - 3 piezas'} precio={'$120'}/>
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
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: -40,
    marginRight: 30,
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
  input: {
    height: 45,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor:'#EBEDEF',
    paddingHorizontal: 10,
    marginTop: 70,
    borderRadius: 15,
},

})