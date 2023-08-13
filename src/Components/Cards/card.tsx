import "./Card.css";

function Card(props: { imgLink: string; heading: string; text: string, idx: number }) {
  console.log(props.idx);
  return (
    <div className="w-1/4 mr-16 mt-3 p-3 hovered">
      <div className="relative flex justify-center items-center flex-col">
        <img
          src={props.imgLink}
          alt="not found"
          className="w-full h-40 object-cover rounded-lg imgHover"
        />
        <div className={props.idx===4?"unhideOverlay" : "overlay"}></div>
        <button className={props.idx!==4 ?"bg-blue-700 font-semibold text-white p-2 pl-3 pr-3 rounded-2xl absolute btnHide" : "bg-white text-purple-900 absolute p-2 pl-3 pr-3 rounded-2xl font-semibold border-2 border-purple-900 block"}>
          {props.idx!==4 ? 'Generate' : 'Upgrade'}
        </button>
      </div>
      <p className="text-sm text-gray-400 font-bold descriptionColor pt-1 pl-1">{props.heading}</p>
      <p className="text-xs text-gray-400 font-semibold descriptionColor pl-1">{props.text}</p>
    </div>
  );
}

export default Card;
