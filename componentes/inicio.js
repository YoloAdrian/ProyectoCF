import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Encabezado=()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bienvenidos</Text>
      <Image 
        source={require('../assets/src/naranja (1).png')}
        style={styles.imagenlog}
      />
      <Text style={styles.texto}>H&N</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E67E22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 20,
    //fontFamily: 'Arial',
  },
  imagenlog:{
    width: 150,
    height: 150,
    marginTop: 20,
    //borderRadius: 50,
  }
});