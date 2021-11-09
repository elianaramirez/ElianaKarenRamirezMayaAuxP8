import React from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
const NewPet = () => { 
    const [petName, setPetName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    
const petNameHandler = (event) => {
 //console.log(event.target.value);
 setPetName(event.target.value);
 };
const ownerNameHandler = (event) => 
{
     setOwnerName(event.target.value);
     
};     

 return (
  <React.Fragment> 
      <Card> 
          <form> 
              <label>Nombre</label> 
              <input type="text" onChange={petNameHandler} /> 
              <label>Año de Estreno</label> 
              <input type="text" onChange={ownerNameHandler} /> 
              <label>Director</label>
              <label>Precio</label> 
              <input type="text" onChange={petNameHandler} /> 
             
              <Button type="submit">Crear</Button> 
              
              </form>
             </Card> 
             <p> 
                 Soy {OwnerName} ({ownerEmail}) y mi mascota es {petName} 
            </p> 
            </React.Fragment>
    );
};
export default NewPet;