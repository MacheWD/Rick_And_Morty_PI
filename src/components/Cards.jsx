import Card from './Card';

export default function Cards({characters, onClose}) {
   return (
      <div>
         {
            characters.map((char) => {
               return (
                  <Card
                     key={char.id}
                     id={char.id}
                     name={char.name}
                     species={char.species}
                     gender={char.gender}
                     image={char.image}
                     onClose={() => onClose(char.id)}
                  />
               )
            }
            )}
      </div>

   )
}
