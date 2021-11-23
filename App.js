import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './components/Cita';

const App = () => {
  const [citas, setCitas] = useState([
    {id: 1, paciente: 'Hook', propietario: 'Juan', sintomas: 'No come'},
    {id: 2, paciente: 'Redux', propietario: 'Itzel', sintomas: 'No duerme'},
    {id: 3, paciente: 'Native', propietario: 'Josue', sintomas: 'No canta'},
  ]);

  // Elimina los pacientes del state
  const eliminaPaciente = id => {
    setCitas(citaActual => {
      return citaActual.filter(cita => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.titulo}>{citas.length > 0? 'Administra':'Agrega una cita'}</Text>
      <FlatList
        data={citas}
        renderItem={({item}) => (
          <Cita cita={item} eliminarPaciente={eliminaPaciente} />
        )}
        keyExtractor={cita => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
