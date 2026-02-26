import * as React from "react";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TodoItemProps } from "../interface/interface";
import { todoItemstyles } from "./styles";

const TodoItem = (props: TodoItemProps) => {
  const { setTaskList, taskList, item } = props;

  const handleComplete = (id: string) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item,
      ),
    );
  };

  const handleDeleteTask = useCallback(
    (id: string) => {
      const currentTaskList = taskList.filter((item) => item.id !== id);
      setTaskList([...currentTaskList]);
    },
    [setTaskList, taskList],
  );

  return (
    <View style={todoItemstyles.itemContainer}>
      <TouchableOpacity
        style={todoItemstyles.itemTextContainer}
        onPress={() => handleComplete(item.id)}
      >
        <View
          style={[
            todoItemstyles.card,
            item.complete && todoItemstyles.cardCompleted,
          ]}
        />
        <Text
          style={[
            todoItemstyles.itemText,
            item.complete && todoItemstyles.textCompleted,
          ]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Text style={todoItemstyles.deleteBtn}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
