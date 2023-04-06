const AnimalCard = ({ animal, choice, onClickChoice }) => {
  /*각각 props로 animal, choice, onClickChoice 가져옴 */
  return (
    <div className="flex flex-col justify-normal items-center">
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
      />
      <div className="text-2xl mt-4 font-bold">{animal} 💕💕💕</div>
      <button
        className={`text-2xl mt-4 px-4 py-2 rounded-md ${
          choice % 2 === 0 ? "bg-pink-400" : "bg-violet-400" // choice를 2로 나누었을때 0이면 핑크 아니면 바이올렛.
        }`}
        onClick={onClickChoice(animal)} // 온클릭을 하기 위해서 2차함수가 사용됨
      >
        선택
      </button>
    </div>
  );
};

export default AnimalCard;
