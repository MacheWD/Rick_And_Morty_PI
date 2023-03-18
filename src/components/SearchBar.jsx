import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState('');
   const handleInputChange = (event) => {
      const value = event.target.value;
      setCharacter(value);
   }

   return (
      <div>
         <input value={character} onChange={handleInputChange} type='search' />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
