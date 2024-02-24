import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Encabezado } from './componentes/inicio.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E67E22', //#E67E22 naranja //GRIS #7F8C8D
    alignItems: 'center',
    justifyContent: 'center',
  },
});
