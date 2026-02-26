import { useCallback, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoItem from "./components/TodoItem";
import { styles } from "./styles";

export default function Index() {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState([
    { id: "1", text: "Learning", complete: false },
    { id: "2", text: "Working", complete: true },
    { id: "3", text: "Exercise", complete: false },
  ]);

  const handleAddNewTask = useCallback(() => {
    if (task.trim().length !== 0) {
      const newTask = {
        id: Math.random().toString(),
        text: task,
        complete: false,
      };

      setTaskList([...taskList, newTask]);
      setTask("");
    }
  }, [task, taskList]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>To Do List</Text>
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={taskList}
          renderItem={(e) => (
            <TodoItem
              setTaskList={setTaskList}
              taskList={taskList}
              item={e.item}
            />
          )}
          contentContainerStyle={styles.taskList}
        ></FlatList>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder={"Add new task..."}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={handleAddNewTask}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
