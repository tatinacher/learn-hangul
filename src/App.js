import React, { useState } from "react";
import CardFlip from "react-card-flip";

const HangulCards = () => {
  const [cards] = useState([
    { front: "ㄱ", back: "г [к]" },
    { front: "ㄴ", back: "н" },
    { front: "ㄷ", back: "д [т]" },
    { front: "ㄹ", back: "л" },
    { front: "ㅁ", back: "м" },
    { front: "ㅂ", back: "б [п], быо [пхё]" },
    { front: "ㅅ", back: "с [тс], 시옷 [сиот]" },
    { front: "ㅇ", back: "нг [н], 이응 [иын]" },
    { front: "ㅈ", back: "дж [ч], 지읒 [чиэт]" },
    { front: "ㅊ", back: "ч [чх], 치읓 [чхиэт]" },
    { front: "ㅋ", back: "к [кх], 키읔 [киэт]" },
    { front: "ㅌ", back: "т [тх], 티읕 [тип]" },
    { front: "ㅍ", back: "п [пх], 피읖 [пхип]" },
    { front: "ㅎ", back: "х [х], 히읗 [хиэт]" },
    { front: "ㅏ", back: "а [а]" },
    { front: "ㅑ", back: "я [я]" },
    { front: "ㅓ", back: "о [о]" },
    { front: "ㅕ", back: "ё [йо]" },
    { front: "ㅗ", back: "о [о], в [у]" },
    { front: "ㅛ", back: "йо [йо]" },
    { front: "ㅜ", back: "у [у], в [в]" },
    { front: "ㅠ", back: "ю [ю]" },
    { front: "ㅡ", back: "ы [ы]" },
    { front: "ㅣ", back: "и [и]" },
  ]);

  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const onBackClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const onForwardClick = () => {
    if (cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  React.useEffect(() => {
    setIsFlipped(false);
  }, []);

  return (
    <div className="hangul-container">
      <h1 className="hangul-header">Изучение корейского алфавита</h1>
      <div className="hangul-cards">
        <div className="hangul-card">
          <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card-front" onClick={handleClick}>
              {cards[currentIndex].front}
            </div>
            <div className="card-back" onClick={handleClick}>
              {cards[currentIndex].back}
            </div>
          </CardFlip>
        </div>
        <div className="hangul-nav">
          <button className="hangul-prev" onClick={onBackClick}>
            Предыдущая
          </button>
          <button className="hangul-next" onClick={onForwardClick}>
            Следующая
          </button>
        </div>
      </div>
    </div>
  );
};

export default HangulCards;
