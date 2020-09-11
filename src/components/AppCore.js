import React, {useState} from 'react';
import './AppCore.css';
import Bouton from './Bouton';



import MyVerticallyCenteredModal from './Modal';







function AppCore () {
        const [texteDemarrage, setTexteDemarrage] = useState(
        "Etes vous professionel de santé ?"
        );


        const [ nombreBouton, setNombreBouton] = useState(
        2
        ); 
        
        
        const [listeBouton, setListeBouton] = useState(
            [
              {txt : "Oui" , value : true, id: 1},
              {txt : "Non" , value : false , id:2}
            ]
          );


          const [listeBoutonRadio, setListeBoutonRadio] = useState(
            [
              {id: 1, name : "Médecin gynécologue/Chirurgien obstéstrique" },
              {id : 2, name : "Médecin généraliste"},
              {id : 3, name : "Sage-femme"},
              
            ]
          );


          const [ statut, setStatut ] = useState(
            false
          )


          const Non = () => {
            let texte = "Ce site est à destination des professionnels de santé uniquement à finir";
            setTexteDemarrage(texte);
            setListeBouton([]);
            setNombreBouton(0)
          };

          const changeStatut = () => {
            setListeBouton([]);
            setNombreBouton(0);
            setStatut(true)
          }

          const [modalShow, setModalShow] = useState(false);


          
          

          const handleChange = () => {
              setModalShow(true);
              setListeBouton([]);
            setNombreBouton(0);

          }



   
    
   

  
    

    
    
   

    
        
        
        

        
        
        return (
            
            <div className="AppContainer">
                <MyVerticallyCenteredModal 
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  listeRadio = {listeBoutonRadio}

                  >

                  </MyVerticallyCenteredModal>
                <p>{texteDemarrage}</p>
                {listeBouton.map((btn)=>{
                    if (btn.id===2) {
                        return <Bouton
                        
                        TextB = {btn.txt}
                        value = {btn.value}
                        onEffet = {Non}
                        
                        
                    >

                    </Bouton>
                        
                    } else if (btn.id === 1) {
                        return  <button

                        onClick = {handleChange}
                        >{btn.txt}</button>
                        
                    }
                    
                    



                    

                })}
                
              
               
            </div>
            
    )
}


export default AppCore;

