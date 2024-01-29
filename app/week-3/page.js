import ItemList from "./item-list.js";
import Item from "./item.js";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <Item {...item1} />
    </main>
  );
}
