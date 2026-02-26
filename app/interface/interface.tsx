export interface TodoItemProps {
  setTaskList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        text: string;
        complete: boolean;
      }[]
    >
  >;
  taskList: {
    id: string;
    text: string;
    complete: boolean;
  }[];
  item: {
    id: string;
    text: string;
    complete: boolean;
  };
}
