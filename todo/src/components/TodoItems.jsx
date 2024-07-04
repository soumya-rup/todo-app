import Todoitem from "./Todoitem";

const TodoItems = ({ todoitems, del }) => {
  return (
    <>
      {todoitems.map((item) => (
        <Todoitem
          key={item.name}
          itemname={item.name}
          itemdate={item.date}
          click={del}
        />
      ))}
    </>
  );
};
export default TodoItems;
