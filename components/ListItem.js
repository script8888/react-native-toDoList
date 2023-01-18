import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

export const ListItem = ({ deleteItemHandler, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => deleteItemHandler(props.id)}>
      <View style={styles.goalList}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
