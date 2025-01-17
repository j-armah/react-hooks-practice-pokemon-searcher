import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const {name, hp, sprites} = pokemon


  return (
    <Card>
      <div>
        <div className="image">
          <img 
            src={isFlipped ? sprites.back : sprites.front} 
            alt="oh no!" 
            onClick={() => setIsFlipped(!isFlipped)}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
