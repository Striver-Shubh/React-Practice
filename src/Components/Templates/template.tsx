import Card from "../Cards/card";

function Template() {
    const cardList = ['https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80','https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80']

    return (
      <div className="m-3.5">
        <div className="border-dashed border-2 border-sky-600 flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold w-1/2">Templates</h1>
          <div className="w-1/2 relative">
            <label htmlFor="\" hidden>
              Search
            </label>
            <input
              type="text"
              className="placeholder-gray-300 h-auto w-full text-sm border rounded-sm p-2"
              placeholder="Search Here..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-gray-300 absolute right-2 top-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="border-dashed border-2 border-sky-600 p-6 mt-3">
          <h2 className="font-bold">Survey Templates</h2>
          <div className="flex flex-wrap justify-start items-center">
            {cardList.map((img: string, idx: number) =>  <Card imgLink={img} heading='Heading' text='Template Description' idx={idx} />)}
          </div>
        </div>
        <img src="logo512.png" alt="" />
      </div>
    );
}

export default Template;