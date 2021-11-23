import React from 'react';
import {Text, View, StyleSheet, Button, TouchableHighlight} from 'react-native';

const Cita = ({cita}) => {
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>Eliminar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  label:{
    color: '#3d4042',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  texto:{
    color: '#3d4042',
    fontSize: 18,
  },
  botonEliminar:{
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
    color: '#3d4042',
  },
  textoEliminar: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  }

})

export default Cita;
