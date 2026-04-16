function InputForm({ setItems }: any) {
  const handleItem = (formData: FormData) => {
    const itemData = formData.get("item") as string;
    setItems((prev: string[]) => [
      ...prev,
      { isChecked: false, id: Date.now(), item: itemData },
    ]);
  };
  return (
    <div className="mt-20 w-2/4 ">
      <h1 className="text-8xl font-bold text-gray-400 text-center">Todos</h1>
      <form
        action={handleItem}
        className="border border-gray-400 rounded-4xl mt-8 py-3 pl-5    "
      >
        <input
          type="text"
          placeholder="Add todo..."
          className="w-[90%] outline-none bg-transparent"
          name="item"
        />
        <button className="bg-teal-700 text-white rounded-full font-bold px-2 cursor-pointer ml-1">
          +
        </button>
      </form>
    </div>
  );
}

export default InputForm;
