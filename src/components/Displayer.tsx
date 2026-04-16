function Displayer({ items, setItems }: any) {
  //   const handleClick = (id: number) => {
  //     setItems((prev: any) =>
  //       prev.map((item: any) =>
  //         item.id === id ? { ...item, isChecked: !item.isChecked } : item,
  //       );
  //     );
  //   };
  const handleClick = (id: number) => {
    setItems((prev: any) =>
      prev.map((item: any) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };

  return (
    <>
      {items && (
        <div className="mt-5 w-2/4 px-5">
          {items.map((item: any) => (
            <div
              className="flex justify-between items-center mb-2"
              key={item.id}
            >
              <div className="flex justify-start items-center gap-4">
                <input type="checkbox" onClick={() => handleClick(item.id)} />
                <p
                  className={`${item.isChecked ? "underline text-gray-400" : "text-gray-400"}`}
                >
                  {item.item}
                </p>
              </div>
              <button className="bg-red-600 text-white px-5 rounded cursor-pointer">
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
