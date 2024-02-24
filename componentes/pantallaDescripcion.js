import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { Boton } from './byc' 
import { estilos } from './estilos'


export const Encabezado = () => {
  return (
    <View style={styles.Encabezado} >
        <Image style={styles.imagenesContenedores} source={require('../assets/src/productos/T4xyd_k7Rum6saSP0bEwxw.jpg')}/>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.Cuerpo}>
        <View style={styles.contenedor}>
            <Text style={styles.TextProducto}>Chips de fresa y naranja</Text>
            <Text style={styles.TextPresentacion}>1 Caja - 5 Piezas</Text>
            <Text style={{ color: '#28B463' , fontSize: 18, textAlign: 'center',}}> $200 / $180</Text>
            <View style={styles.viewBoton}>
              <Boton style={styles.botoncom}  texto={'Comprar'} color={'#229954'} colorb={'#C5E1A5'} alto={70} ancho={250}/>  
            </View>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
  Encabezado:{
    flex:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 10,
    width: '100%',
  },
  imagenesContenedores:{
    marginTop: 5,
    marginLeft:70,
    width:250,
    height:250,
    borderWidth:1.5,
    borderColor: 'black',
  },
  Cuerpo:{
    flex:8,
    marginTop: 30,
  },     
  contenedorTodos:{
    backgroundColor: '#D7DBDD',
    borderRadius: 10,
  }, 
  TextPresentacion:{
    fontSize: 20,
    color: '#21618C',
    lineHeight: 40,
    textAlign: 'center',
},  
TextProducto:{
    fontSize: 23,
    maxWidth: 180,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 70,
    marginTop: 18,
},  
    contenedor:{
            backgroundColor:'##D5DBDB', //gris #D7DBDD
            height: 250,
            width: 330,
            borderRadius: 15,
            flexDirection: 'column',
            position: 'relative', 
            marginTop: 5,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
          elevation: 10,
    },
    viewBoton:{
        marginLeft: 35,
    }



})