export default function Item({ name, quantity, category, onSelect }) {
  const handleItemClick = () => {
    onSelect(name);
  };

  return (
    <main>
      <li className="ml-6 mb-4 flex items-center p-2 bg-blue-950 rounded-md max-w-sm"
      onClick={handleItemClick}
      style={{ cursor: 'pointer' }}
      >
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-xs">
            Buy {quantity} in {category}
          </p>
        </div>
      </li>
    </main>
  );
}
