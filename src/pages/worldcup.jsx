import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState(); //동물 랜덤 추출하기 위한
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]); //16강이 넘어가면 8강에 들어가야하는데 그 동물들이 다시 정리될 []가 필요하기 때문에 useState를 통해 만들어주고 적용시킴.
  const [end, setEnd] = useState(16);

  const onClickChoice = (v) => () => {
    setChoice(choice + 2); //처음 이미지가 0,1이고 그 다음 이미지가 2,3이 나와야 하니까 choice + 2를 만들어준것.

    setNextRound([...nextRound, v]); // react에서의 push 기능(...문법) 우리가 선택한 아이를 다음 라운드에 넣겠다 라는 개념.
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5; //배열의 요소를 무작위로 섞는 코드(return Math.random() - 0.5;)
    });

    setShuffleAnimal(shuffleAnimalData);
  }, []); //처음에만 동물들이 경쟁하는 부분이 보여지도록 반복되지 않게 하는 코드.
  useEffect(() => console.log(nextRound), [nextRound]);
  useEffect(() => {
    if (choice === end) {
      setShuffleAnimal(nextRound); // 1.nextRound에 담긴 동물들을 shuffleAnimal로 옮긴다.
      setNextRound([]); // 2. nextRound 초기화 []
      setEnd(end / 2); // choice === end 가 같으면 end를 2로 나눠라.
      setChoice(0); // 3. 16강 -> 8강 -> 4강 -> choice 0
    }
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} /> //end 1이면 이코드를 보이게 해라.
        ) : (
          // 아닐때는 다시 아래 코드를 진행시킨다.
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice} //변화를 주기 위해서 useState를 만들어 choice를 넣었다. 원래 기본값은 0
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mx-8 font-bold">
              <div>{`${end === 2 ? "결승" : end + "강"}`}</div>
              {/* end가 2면 결승, 아니면 강을 출력해라 */}
              <div>VS</div>
            </div>

            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
};

export default Worldcup;
