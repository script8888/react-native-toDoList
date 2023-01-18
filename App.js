import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Modal,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { ListItem } from "./components/ListItem";

export default function App() {
  const [inputGoal, setInputGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);

  const goalInputHandler = (value) => {
    setInputGoal(value);
  };

  const addGoalHandler = () => {
    if (inputGoal) {
      setGoals((goals) => [{ id: Math.random(), value: inputGoal }, ...goals]);
      setInputGoal("");
      setVisible(false);
    }
  };

  const deleteItemHandler = (id) => {
    setGoals((goals) => goals.filter((data) => data.id !== id));
  };

  const openModal = () => {
    setVisible(true);
  };

  return (
    <View style={styles.screen}>
      <Button title="Open Modal" onPress={openModal} />
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="input list"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={inputGoal}
          />
          <View style={styles.inputButtons}>
            <Button
              onPress={() => setVisible(false)}
              color={"red"}
              title={"CANCEL"}
            />
            <Button onPress={addGoalHandler} title="ADD" />
          </View>
        </View>
      </Modal>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <ListItem
            id={itemData.item.id}
            deleteItemHandler={deleteItemHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  inputButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%"
  },
});
