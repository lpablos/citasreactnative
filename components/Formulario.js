import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Formulario = () => {
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
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  const confirmarHora = date => {
    console.warn('A date has been picked: ', date);
    hideTimePicker();
  };

  return (
    <View style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <TextInput
          style={styles.input}
          onChangeText={txt => console.log(txt)}
        />
      </View>
      <View>
        <Text style={styles.label}>Dueño:</Text>
        <TextInput
          style={styles.input}
          onChangeText={txt => console.log(txt)}
        />
      </View>
      <View>
        <Text style={styles.label}>Contacto:</Text>
        <TextInput
          style={styles.input}
          onChangeText={txt => console.log(txt)}
          keyboardType='numeric'
        />
      </View>
      <View>
        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={confirmarFecha}
          onCancel={hideDatePicker}
        />
      </View>
      <View>
        <Button title="Seleccionar Hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={confirmarHora}
          onCancel={hideTimePicker}
        />
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <TextInput
          style={styles.input}
          onChangeText={txt => console.log(txt)}
          multiline
        />
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
});
export default Formulario;
