import React from 'react';
import {Card} from '../card/card'

import  './cardList.css'


export function CardList (props) {
return(
    <div className ='card-list'>
         {props.monsterUsers.map(monster => 
      <Card key={monster.id} monster = {monster}  / >
    )}
    </div>
)
}  

 