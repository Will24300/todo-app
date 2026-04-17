function Displayer({ items, setItems }) {
  const handleClick = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      {items && (
        <div className="mt-5 w-2/4 px-5">
          {items.map((item) => (
            <div
              className="flex justify-between items-center mb-2"
              key={item.id}
            >
              <div className="flex justify-start items-center gap-4">
                <input type="checkbox" onClick={() => handleClick(item.id)} />
                <p
                  className={`${item.isChecked ? "line-through text-gray-400" : "text-gray-400"}`}
                >
                  {item.name}
                </p>
              </div>
              <button
                className="bg-red-600 text-white px-5 rounded cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                DEL
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Displayer;
