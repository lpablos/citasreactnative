import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {
  const [paciente, setPaciente] = useState('');
  const [dueno, setDueno] = useState('');
  const [contacto, setContacto] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  //   Muestra o/u oculta el timepiker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarFecha = date => {
    // setFecha(date);
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    setFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };
  const confirmarHora = hora => {
    const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
    setHora(hora.toLocaleString('es-US', opciones));
    hideTimePicker();
  };

  const crearNuevaCita = () => {
    console.log('Estas creando una nueva cita');
    if (
      paciente.trim() === '' ||
      dueno.trim() === '' ||
      contacto.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      console.log('Validacion falla ');
      showAlert();
      return;
    }
  };

  const showAlert = () =>
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {
        text: 'Ok'
      },
    ]);

  return (
    <View style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <TextInput
          style={styles.input}
          value={paciente}
          onChangeText={txt => setPaciente(txt)}
        />
      </View>
      <View>
        <Text style={styles.label}>Dueño:</Text>
        <TextInput
          style={styles.input}
          value={dueno}
          onChangeText={txt => setDueno(txt)}
        />
      </View>
      <View>
        <Text style={styles.label}>Contacto:</Text>
        <TextInput
          style={styles.input}
          value={contacto}
          onChangeText={txt => setContacto(txt)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={new Date()}
          onConfirm={confirmarFecha}
          onCancel={hideDatePicker}
        />
        <Text style={styles.label}>{fecha}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>
        <Button title="Seleccionar Hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          locale="en_ES"
          onConfirm={confirmarHora}
          onCancel={hideTimePicker}
        />
        <Text style={styles.label}>{hora}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <TextInput
          style={styles.input}
          value={sintomas}
          onChangeText={txt => setSintomas(txt)}
          multiline
        />
      </View>
      <View>
        <TouchableHighlight
          onPress={() => crearNuevaCita()}
          style={styles.btnSubmit}>
          <View>
            <Text style={styles.textSubmit}>Touch Here</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#AA076B',
    marginVertical: 10,
  },
  textSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Formulario;
