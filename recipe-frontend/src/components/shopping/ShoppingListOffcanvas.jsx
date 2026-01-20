export default function ShoppingListOffcanvas({ items }) {
  return (
    <div className="offcanvas offcanvas-end" id="shoppingList">
      <div className="offcanvas-header">
        <h5>Shopping List</h5>
        <button className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        <ul>
          {items.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
