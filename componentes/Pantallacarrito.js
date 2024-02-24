import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { ContenedoresProductos, Boton } from './byc' 
import { estilos } from './estilos'


export const Encabezado = () => {
  return (
    <View style={styles.Encabezado} >
      <Image style={[styles.imagenesContenedores, { marginLeft: 30, marginTop: 25, }]} source={require('../assets/src/girar-a-la-izquierda.png')}/>
      <View style={styles.CarritoEncabezado}>
        <Image style={styles.imagenesContenedores} source={require('../assets/src/anadir-al-carrito.png')}/>
        <Text style={styles.textoCarritoEncabezado}>Carrito</Text>
      </View>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.Cuerpo}>
          <ContenedoresProductos producto={'Chips de fresa y naranja'} imagen={require('../assets/src/productos/T4xyd_k7Rum6saSP0bEwxw.jpg')} presentacion={'1 Caja - 5 piezas'} precio={'$200/180'}/>
          <Text style={[estilos.contenedorDescuentos, { left: 45, top: 120 }]}>10% OFF</Text>
          <ContenedoresProductos producto={'Chips de durazno '} imagen={require('../assets/src/productos/Nw9wwyzzQSqahguMU_F64w.jpg')} presentacion={'2 piezas Individuales'} precio={'$50'}/>
          <ContenedoresProductos producto={'Chips de platano y manzana'} imagen={require('../assets/src/productos/IbAIxpXYQISLMa2h_ln9eA.jpg')} presentacion={'1 Caja - 3 piezas'} precio={'$120'}/>
          <View style={styles.pie}>
            <Boton style={styles.botoncom} texto={'Comprar'} color={'#229954'} colorb={'#C5E1A5'} alto={70} ancho={250}/>
        </View>
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
    width: 250,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 15,
    marginRight: 30,
  },
  textoCarritoEncabezado:{
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  imagenesContenedores:{
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    width:40,
    height:40,
  },
  Cuerpo:{
    flex:8,
    marginTop: 30,
  },     
  contenedorTodos:{
    backgroundColor: '#D7DBDD',
    borderRadius: 10,
  }, 
  botoncom:{
    textAlign: 'center',
    marginTop: 30,
    fontSize: 1,
  },
  pie:{
    marginTop: 40,
    alignItems: 'center'

  }

})