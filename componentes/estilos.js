import { StyleSheet } from "react-native";

export const estilos=StyleSheet.create({
    //Estilos del boton
    boton:{
        //backgroundColor:'#EDE7F6',
        //padding:5,
        borderRadius:5,
        borderColor:'black',
        borderWidth:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        borderRadius: 15,
        //paddingVertical: 8.5,
        //paddingHorizontal: 28,
        /*width:250,
        height:60,*/
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
      },
      textoB:{
        color:'black',
        fontSize:20,
      },
    //Estilos de la caja
    boxContainer:{
        borderColor:'#000',
        backgroundColor:'#27AE60',
        borderWidth:2,
        height:70,
        width:330,
        //marginTop:50,
        alignItems:'center',
        padding:9,
    },
    TextBox:{
        fontSize:30
    },
    imagenLiken:{
        width: 30,
        height: 30,
        marginRight: 15,
    },
    //estos son de los contenedores de los productos
    TextPresentacion:{
        fontSize: 20,
        color: '#21618C',
        lineHeight: 40,
    },  
    TextProducto:{
        fontSize: 23,
        maxWidth: 180,
        fontWeight: 'bold',
    },  
    contenedor:{
       backgroundColor:'white', //gris #D7DBDD
       height: 150,
       width: 330,
       borderRadius: 15,
       flexDirection: 'row',
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
    imagenProductos:{
        width:120,
        height:120,
        marginTop: 15,
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 15,
    },
    contenedorTextos:{
        marginTop: 10,
    },
    //estos son para los descuentos se poenen en los text
    contenedorDescuentos:{
        position: 'absolute',
        top: 290,
        left: 45,
        backgroundColor : '#2ECC71',
        width:90,
        height:30,
        fontSize: 20,
        borderRadius: 5,
        textAlign: 'center',
        borderWidth:1.5,
        
    }
})