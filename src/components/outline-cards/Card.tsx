import React from "react";
import useIcons from "../../hooks/useIcons";
import ActionTray from "./ActionTray";

type CardProps = {
  card: any;
  cards: any;
  getChildCards: Function;
  activeCard: any;
  onSelection: Function;
};
const Card = ({
  card,
  cards,
  getChildCards,
  activeCard,
  onSelection,
}: CardProps) => {
  const GetIcon = (iconName: string) => {
    const Icon = useIcons(iconName);
    return <Icon />;
  };

  const handleCollapse = () => {
    if (activeCard.name === card.name) {
      cards[card.parent].level > 1 ? onSelection(cards[card.parent]) : onSelection({}) ;
    } else {
      onSelection(card);
    }
  };

  return (
    <div
      className={`card l${card.level}-card ${
        card.name === activeCard.name || card.name === activeCard.parent
          ? "card--active"
          : "card--collapsed"
      } ${card.name === activeCard.parent ? "active-parent" : ""}`}
      style={{
        paddingLeft: `${card.level / 4}em`,
        height:
          card.name === activeCard.name || card.name === activeCard.parent
            ? `${50 * (card.children.length + 1) + 40}px`
            : "50px",
      }}
    >
      <div className="card--info" onClick={handleCollapse}>
        {GetIcon("DragHandle")}
        {card.name.split("-")[0]}
      </div>
      {activeCard.id === card.id && <ActionTray options={card.options} />}
      {getChildCards(card).map((childCard) => (
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
  );
};
export default Card;
