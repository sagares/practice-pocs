import React, { useState } from "react";
import values from "lodash/values";
import cardsJson from "./cards.json";
import Card from "./Card";
import ActionTray from "./ActionTray";

const L1Card = ({ activeCard, onSelection }) => {
  const [cards] = useState(cardsJson);

  const getL1Cards = () => {
    return values(cards).filter((card) => card.level === 1);
  };

  const getChildCards = (card) => {
    if (!card.children) return [];
    return card.children.map((path) => cards[path]);
  };

  const handleClick = (l1Card) => {
    if (activeCard?.name === l1Card.name) {
      onSelection({});
    } else {
      onSelection(l1Card);
    }
  };

  return getL1Cards().map((l1Card) => (
    <div
      className={`card l1-card ${
        activeCard?.id === l1Card.id ? "card--active" : "card--collapsed"
      }`}
      key={l1Card.id}
    >
      <div className="card--info" onClick={(e) => handleClick(l1Card)}>
        {l1Card.name.split("-")[0]}
      </div>
      {activeCard?.name === l1Card.name && (
        <ActionTray options={l1Card.options} />
      )}
      <ActionTray options={{}}/>
      {getChildCards(l1Card).map((childCard) => (
        <Card
          cards={cards}
          key={childCard.id}
          card={childCard}
          getChildCards={getChildCards}
          activeCard={activeCard}
          onSelection={onSelection}
        />
      ))}
    </div>
  ));
};

export default L1Card;
