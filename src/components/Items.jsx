import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import itemdata from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {itemdata.map((item) => (
        <ItemCard
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        id={item.id}
        />
      ))}
    </div>
  );
}

export default Items;
