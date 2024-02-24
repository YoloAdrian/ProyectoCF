import { View, StyleSheet, Image, TextInput, Text} from 'react-native'
import { ContenedoresProductos } from './byc' 
import { estilos } from './estilos'


export const Encabezado=()=>{
    return(
      <View style={estilosBuscar.encabezado}>
        <Image style={estilosBuscar.imagenEncabezado} source={require('../assets/src/anadir-al-carrito.png')}/>
        <TextInput
          style={estilosBuscar.input}
          placeholder="Buscar"
        />
        <Image style={estilosBuscar.imagenEncabezado} source={require('../assets/src/simbolo-de-lista-de-tres-elementos-con-puntos.png')}/>
      </View>
    )
}


export const Cuerpo=()=>{
    return(
        <View  style={estilosBuscar.cuerpo}>
            <ContenedoresProductos producto={'Chips de platano y manzana'} imagen={require('../assets/src/productos/IbAIxpXYQISLMa2h_ln9eA.jpg')} presentacion={'1 Caja - 3 piezas'} precio={'$120'}/>
        </View>
    )
}

export const SubCuerpo=()=>{
    return(
        <View style={estilosBuscar.Subcuerpo}>
            <View style={estilosBuscar.Contenedores}>
                <Image style={estilosBuscar.imagenesContenedores} source={require('../assets/src/productos/Yoh5lbd-QgSXRROQxnsDug.jpg')}/>
                <Text style={[estilos.contenedorDescuentos, { left: 25, top: 90 }]}>10% OFF</Text>
            </View>
            <View style={estilosBuscar.Contenedores}>
                <Image style={estilosBuscar.imagenesContenedores} source={require('../assets/src/productos/Nw9wwyzzQSqahguMU_F64w.jpg')}/>
            </View>
            <View style={estilosBuscar.Contenedores}>
                <Image style={estilosBuscar.imagenesContenedores} source={require('../assets/src/productos/i2Zh4IMvSheyvWxAicrryw.jpg')}/>
            </View>
        </View>
    )
}

export const Pie=()=>{
    return(

        <View style={estilosBuscar.Pie}>
            <View style={estilosBuscar.contenedorTodos}>
                <Text style={estilosBuscar.TextProducto}>Nuevos productos</Text>
                <ContenedoresProductos producto={'Chips de fresa y durazno'} imagen={require('../assets/src/productos/empaquetado.jpg')} presentacion={'2 Caja - 3 piezas'} precio={'$300'}/>
                <ContenedoresProductos producto={'Chips de fresa y naranja'} imagen={require('../assets/src/productos/T4xyd_k7Rum6saSP0bEwxw.jpg')} presentacion={'1 Caja - 5 piezas'} precio={'$200/$180'}/>
                <Text style={estilos.contenedorDescuentos}>10% OFF</Text>
            </View>
        </View>
    )
}
  

const estilosBuscar = StyleSheet.create({
    encabezado:{
      flex:1.5,
      flexDirection: 'row',
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
    imagenEncabezado:{
        width:50,
        height:50,
        marginTop:65,
        marginLeft: 15,
        marginRight: 15,
    },
    cuerpo:{
        flex:3.5,
        flexDirection: 'row', 
        marginTop:80,
    },
    Subcuerpo:{
        flex:11,
        flexDirection: 'row', 
    },
    Contenedores:{
        width:120,
        height: 120,
        backgroundColor: '#CACFD2',
        borderRadius:10,
        marginTop:10,
        marginRight:3,
        marginLeft:3,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    imagenesContenedores:{
        width:100,
        height:100,
    },
    Pie:{
        flex:7,
        marginTop:-400,
    },
    TextProducto:{
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contenedorTodos:{
        backgroundColor: 'white',
        borderRadius: 10,

    }, 

    
  });