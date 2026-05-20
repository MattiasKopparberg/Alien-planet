interface ListProps<T extends { id: number }> {
  // anger med T, att det är en generisk typ men måste ha id
  items: T[]; // tar emot array av vad som helst (aliens eller planets)
  renderItem: (item: T) => React.ReactNode; // funktionen definieras i parent (Planets/Aliens), körs i List per item (renderas ett card)
}

export default function List<T extends { id: number }>({
  items,
  renderItem,
}: ListProps<T>) {
  return (
    <ul>
      {/* loopar igenom arrayen, anropar renderItem med ett planet/alien-objekt och renderar ett Card */}
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
