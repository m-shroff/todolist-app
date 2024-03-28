import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  const { text, isCompleted, onPress, onDelete } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.itemLeading}>
          <View style={styles.square}>
            {isCompleted && <Text style={styles.checkmark}>&#10003;</Text>}
          </View>
          <Text
            style={[styles.text, isCompleted ? styles.completedText : null]}
          >
            {text}
          </Text>
        </View>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text> Delete </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: "#F5F1F1",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  itemText: {
    fontSize: 17,
    maxWidth: "80%",
  },
  square: {
    backgroundColor: "#8DDFDA",
    borderRadius: 4,
    width: 24,
    height: 24,
    opacity: 0.4,
    marginRight: 16,
    alignItems: "center",
  },
  itemLeading: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkmark: {
    color: "#000",
    fontSize: 15,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  deleteButton: {
    backgroundColor: "#8DDFDA",
    zIndex: 2,
    borderRadius: 4,
  },
});

export default Task;
