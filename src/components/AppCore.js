import React, {useState} from 'react';
import './AppCore.css';
import Bouton from './Bouton';
import pConsultation from './PConsultation';
import PriseMediMajeure from './PriseMediPatienteMajeure';



import MyVerticallyCenteredModal from './Modal';







function AppCore () {
  /// State gérant le texte à afficher au démmarage 
        const [texteDemarrage, setTexteDemarrage] = useState(
        "Etes vous professionel de santé ?"
        );


        const [ nombreBouton, setNombreBouton] = useState(
        2
        );

        const [listeObjetConsulation, setlisteObjetConsulation] = useState(
          /// state servant à faire les test de recup dinfos pour traiter ou non l'envoie d'une consultation 
          [{name : "test1test1111", id : 16 , objet : pConsultation},
          {name : "test1test2222", id : 17, objet : pConsultation},
          {name : "test1test333", id : 27, objet : pConsultation},
          {name : "test1test4444", id : 26, objet : pConsultation},
          {name : "test1test55555", id : 31, objet : PriseMediMajeure},
          {name : "test1test6666", id : 32, objet : pConsultation},
          {name : "test1test7777", id : 42, objet : pConsultation},
          {name : "test1test8888", id : 43, objet : pConsultation}]
        )


      
      

       const [objetConsultationAffiche, setObjetConsultationAffiche] = useState(
         /// state censé contenir l'objet consultation ou la feuille d'informations à afficher 
         []
       )
        
        
        const [listeBouton, setListeBouton] = useState(
            [
              {txt : "Oui" , value : true, id: 1},
              {txt : "Non" , value : false , id:2}
            ]
          );


          const [listeBoutonRadio, setListeBoutonRadio] = useState(
            /// state contenant les 3 premiers boutons du modal 
            /// ( il pourrait être rassemblé dans un state contenant tout les autres boutons ,
            /// actuellement dans le modal)
            [
              {id: 1, name : "Médecin gynécologue/Chirurgien obstéstrique" },
              {id : 2, name : "Médecin généraliste"},
              {id : 3, name : "Sage-femme"},
              
            ]
          );


          const [ selection, setSelection] = useState(
            /// je vais faire un check mais surement inutile
            []
          );


          const [ statut, setStatut ] = useState(
            /// je vais faire un check mais surement inutile
            false
          )

          const modifierObjet = (id) => {
            /// fonction censer gérer l'affichage du futur objet consultation ou information à la femreture du modal
            /// elle prend un parametre id permettant d'identifier de quel provenance vient la requete
            /// je vais check mais il me semble qu'elle nest pas complete et quil manque quelques boutons de fin de parcours dans le modal
            /// qui ne sont pas traçés 
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
            /// fonction qui me permettait de faire des test sur les infos récup dans le modal. 
            /// elle recup la liste des infos selectionné dans le modal ainsi que l'id du derniers bouton
            /// actuellement elle gères l'affichage du futur objet consultation ou info, ainsi que quelques function annexe ( voir fin de function )
            /// cette function pourrait éventuellement être gardé pour fair un affichage recap des infos deja selectionné
            let liste = listeDonnee;
            console.log(liste);
            let texte = [];
            for (let index = 0; index < liste.length; index++) {
              console.log(listeDonnee[index].name);
              if (listeDonnee[index].id==4||listeDonnee[index].id==5) {
                texte.push('convention :  '+liste[index].name+'    ')
                
              }

              else if (listeDonnee[index].id==6||listeDonnee[index].id==7) {

                texte.push('Consultation préalable IVG :  '+liste[index].name+'    ')
                
              }

              else if (listeDonnee[index].id==18||listeDonnee[index].id==19) {
                texte.push('Attestation justificative de formation IVG :  '+liste[index].name+'    ')
                
              }

              else if (listeDonnee[index].id==33||listeDonnee[index].id==34) {
                texte.push('Convention centre de référence  :  '+liste[index].name+'    ')
                
              }

              else if (listeDonnee[index].id==20||listeDonnee[index].id==21) {
                texte.push('Consultation préalable IVG :  '+liste[index].name+'    ')
                
              }

              

              else {
                texte.push(liste[index].name+'     ')
              }
              
              
            }
           
            
            setTexteDemarrage(texte);
            setListeBouton([]);
            setNombreBouton(0);
            setSelection(liste);
            modifierObjet(id);
            
          }


          const Non = () => {
            /// function censé gérer laffichage si lutilisateur nest pas un pro de santé
            let texte = "Ce site est à destination des professionnels de santé uniquement à finir";
            setTexteDemarrage(texte);
            setListeBouton([]);
            setNombreBouton(0)
          };

          const Oui = () =>{
            /// je vais faire un check mais surement inutile
            let texte = "Info Utilisateur";
            setTexteDemarrage(texte);
            setListeBouton([]);
            setNombreBouton(0)
          }

          const changeStatut = () => {
            /// je vais faire un check mais surement inutile
            setListeBouton([]);
            setNombreBouton(0);
            setStatut(true)
          }

          const [modalShow, setModalShow] = useState(false);
          /// affichage modal


          
          

          const handleChange = () => {
            /// affichage modal
              setModalShow(true);
              setListeBouton([]);
            setNombreBouton(0);

          }



   
    
   

  
    

    
    
   

    
        
        
        

        
        
        return (
            
            <div className="AppContainer">
                <MyVerticallyCenteredModal 
                /// modal les props son les function permettant laffichage ou non du modal ainsi que la liste 
                /// de boutons ( à la base radio ^^) et la fonction affichagedonnée qui sera appelée dans certains cas par la fonction
                /// recupIdbouton du modal 
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
                {/* partie censé gérer laffichage de la consultaion ou du bloc info à presenter  */}

                
                {objetConsultationAffiche.map((objet)=>{
                  
                  return <objet.objet 
                  onTexte ={objet.name}
                  onRecap ={texteDemarrage}>

                

                    


                        </objet.objet>
                })}


                </div>
                
              
               
            </div>
            
    )
}


export default AppCore;

