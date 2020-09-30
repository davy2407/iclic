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

        const [listeObjetConsulation, setlisteObjetConsulation] = useState(
          [{name : "test1test1111", id : 16},
          {name : "test1test2222", id : 17},
          {name : "test1test333", id : 27},
          {name : "test1test4444", id : 26},
          {name : "test1test55555", id : 31},
          {name : "test1test6666", id : 32},
          {name : "test1test7777", id : 42},
          {name : "test1test8888", id : 43}]
        )


      
      

       const [objetConsultationAffiche, setObjetConsultationAffiche] = useState(
         []
       )
        
        
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


          const [ selection, setSelection] = useState(
            []
          );


          const [ statut, setStatut ] = useState(
            false
          )

          const modifierObjet = (id) => {
            console.log("dans modifier objet");
            let identifiant = id;
            let liste = listeObjetConsulation;
            console.log(identifiant);
            console.log(liste);

            if (identifiant==16) {
              setObjetConsultationAffiche([liste[0]])
              
            }

            else if (identifiant==17) {
              setObjetConsultationAffiche([liste[1]])
              
            }

            else if (identifiant==26) {
              setObjetConsultationAffiche([liste[2]])
              
            }

            else if (identifiant==27) {
              setObjetConsultationAffiche([liste[3]])
              
            }

            else if (identifiant==31) {
              setObjetConsultationAffiche([liste[4]])
              
            }

            else if (identifiant==32) {
              setObjetConsultationAffiche([liste[5]])
              
            }

            else if (identifiant==42) {
              setObjetConsultationAffiche([liste[6]])
              
            }

            else if (identifiant==43) {
              setObjetConsultationAffiche([liste[7]])
              
            }
            
          }

          const AffichageDonnee = (listeDonnee,id) => {
            let liste = listeDonnee;
            let texte = [];
            for (let index = 0; index < liste.length; index++) {
              console.log(listeDonnee[index].name);
              texte.push(liste[index].name+'     ')
              
            }
           
            
            setTexteDemarrage(texte);
            setListeBouton([]);
            setNombreBouton(0);
            setSelection(liste);
            modifierObjet(id);
            
          }


          const Non = () => {
            let texte = "Ce site est à destination des professionnels de santé uniquement à finir";
            setTexteDemarrage(texte);
            setListeBouton([]);
            setNombreBouton(0)
          };

          const Oui = () =>{
            let texte = "Info Utilisateur";
            setTexteDemarrage(texte);
            setListeBouton([]);
            setNombreBouton(0)
          }

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
                  onFonctionAffichage = {AffichageDonnee}

                  >

                  </MyVerticallyCenteredModal>
                {/* <p>{texteDemarrage}</p> */}
                {listeBouton.map((btn)=>{
                    if (btn.id===2) {
                        return <Bouton
                        
                        TextB = {btn.txt}
                        value = {btn.value}
                        onEffet = {Non}
                        
                        
                    >

                    </Bouton>
                        
                    } else if (btn.id === 1) {
                        return   <button

                        onClick = {()=>{handleChange();Oui()
                        }}
                        
                        >{btn.txt}</button>
                        
                        
                    }
                    
                    



                    

                })}

                <div className="Newtest">

                <p>{texteDemarrage}</p>
                {objetConsultationAffiche.map((objet)=>{
                  return <div onDataObjet={objet}>

                <p>{objet.name}</p>

                    


                        </div>
                })}


                </div>
                
              
               
            </div>
            
    )
}


export default AppCore;

