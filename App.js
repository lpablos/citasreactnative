import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
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

  const mostrarFormulario = () =>{
    setMostrarForm(!mostrarForm);
  };

  const cerrarTeclado = () =>{
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <View style={styles.contenido}>
          <Text style={styles.titulo}>Administrador de Citas</Text>
          <View>
            <TouchableHighlight
              onPress={() => mostrarFormulario()}
              style={styles.btnMostrarForm}>
              <View>
                <Text style={styles.textMostrarForm}>{mostrarForm ? 'Ocultar' : 'Mostrar'} Formulario</Text>
              </View>
            </TouchableHighlight>
          </View>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>
              <Formulario citas={citas} setCitas={setCitas} mostrarForm={mostrarForm} setMostrarForm={setMostrarForm} />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0 ? 'Administra' : 'Agrega una cita'}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => (
                  <Cita cita={item} eliminarPaciente={eliminaPaciente} />
                )}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7D024E',
    marginVertical: 10,
  },
  textMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
