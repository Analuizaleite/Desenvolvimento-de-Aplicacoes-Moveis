import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [msg, setMsg] = useState("A área ainda não foi calculada");
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");

  const onButtonPress = () => {
    if (!base && !altura) {
      setMsg("A área ainda não foi calculada");
      return;
    }

    if (!base || !altura) {
      setMsg("Por favor, insira valores válidos nos campos de base e altura");
      return;
    }
    const area = (parseFloat(base) * parseFloat(altura)) / 2;
    setMsg(`A área do triângulo é ${area}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triângulo</Text>

      <TextInput
        placeholder="Base"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setBase}
        value={base}
      />

      <TextInput
        placeholder="Altura"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setAltura}
        value={altura}
      />

      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    textAlign: "center",
    width: "80%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    elevation: 5,
  },
  button: {
    backgroundColor: "#FF69B4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
    width: "60%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
