import React from 'react';

const Simpson = ({name, age, photo}) => {
    return (
        <div>
         <h2></h2> {name} {age}</h2>
    <img src= {photo} alt={name}/>
        </div>
    );
};

export default Simpson;


//1. Описати всю сім'ю сімпсонів (5 персонажів)

//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
//https://rickandmortyapi.com/
//https://rickandmortyapi.com/api/character
//   Створити 6 персонажів