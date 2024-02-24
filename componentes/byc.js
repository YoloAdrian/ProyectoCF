import {Pressable,Text, Image, View} from 'react-native'
import { estilos } from './estilos'

export const Boton = ({ texto, logo, accion, color,colorb, alto=70, ancho=250 }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ?  colorb: color, 
            margin: 5,
            width: ancho, // Aplica el ancho proporcionado
            height: alto,
          },
          estilos.boton
        ]}
        onPress={accion}
      >
    <Image 
        style={[estilos.imagenLiken]} 
        source={logo}
      />
        <Text style={estilos.textoB}>{texto}</Text>
      </Pressable>
    );
  };
///////////////////////////////////////////////////////////////////////////////////////////////

  export const Caja=({contenido})=>{
    return(
        <View style={estilos.boxContainer}>
            <Text style={estilos.TextBox}>{contenido}</Text>
        </View>
    )
  }

////////////////////////////////////////////////////////////////////////////////////////////////////

export const ContenedoresProductos=({imagen,producto,presentacion, precio})=>{
  return(
      <View style={estilos.contenedor}>
          <View>
              <Image style={estilos.imagenProductos}
                  source={imagen}
              />
          </View>
          <View style={estilos.contenedorTextos}>
              <Text style={estilos.TextProducto}>{producto}</Text>
              <Text style={estilos.TextPresentacion}>{presentacion}</Text>
              <Text style={{ color: '#28B463' , fontSize: 18 }}>{precio}</Text>
          </View>
      </View>
  )
}

