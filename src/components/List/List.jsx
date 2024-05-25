import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item) => {
            return <ListItem key={item.name} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
