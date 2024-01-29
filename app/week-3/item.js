export default function Item({ name, quantity, category }) {
  return (
    <main>
      <div className="ml-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-xs">
          Buy {quantity} in {category}
        </p>
      </div>
    </main>
  );
}
