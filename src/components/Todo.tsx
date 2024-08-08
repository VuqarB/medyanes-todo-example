import { getAPI } from "@/services/fetchApi";
import Heading from "./Heading";
import List from "./List";

const Todo = async () => {
  const todoItems = await getAPI("/todo").then((res) => {
    if (res) {
      return res.data;
    }
    return [];
  });

  return (
    <section className="mt-28">
      <Heading todoItemsCount={todoItems.length} />
      <List todoItems={todoItems} />
    </section>
  );
};

export default Todo;
