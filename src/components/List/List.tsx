import ListItem from "../ListItem/ListItem";

export default function List() {
  return (
    <div className="mx-auto p-4 w-[530px]">
      <ul className="space-y-2">
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}
