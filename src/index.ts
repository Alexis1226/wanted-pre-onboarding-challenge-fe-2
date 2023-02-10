/**
 * Interface of Todo object.
 */
interface ITodo {
  id: string;
  context: string;
  isFinished: boolean;
  category: string;
  tags: string[];
}

/**
 * interface of the service can handle Todo objects.
 */
interface TodoService {
  createToDo: ({
    context,
    isFinished: boolean,
    category,
    tags,
  }: Omit<ITodo, "id">) => void;
  readToDo: (id?: string) => void;
  updateToDo: (id: string | { asis: string; tobe: string }) => void;
  deleteToDo: (id?: string | { id: string; all?: true; asis: string }) => void;
}
