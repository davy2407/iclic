import React , {useState,useEffect} from "react";

import ArrowD from "@assets/images/downArrow.svg";



import "./ConsultationModel.css";


function ConsultationModel(props) {

//   const [ arrowScroll, setArrowScroll] = useState("Arrow");

//   const [ arrowStopScroll, setArrowStopScroll] = useState("noneArrow");

//   const [classArrow, setClassArrow] = useState("noneArrow");

//  const [ timeArrow, setTimearrow] = useState(null);

//  const [ scrollStatut, setScrollStatut] = useState("");



//   const defilement = () => {
//     let time = timeArrow;
//     let statut = scrollStatut;
//     if(time){
//       time=null;
//       setTimearrow(time);


//     }
//     time = setTimeout(()=>{
//       time = null;
//       setScrollStatut("Scroll stoppé");
//       setClassArrow(arrowStopScroll);
//       setTimearrow(time);


//     },1000);
//     if (statut!== 'scrolling') {
      
//       setClassArrow(arrowScroll);
//       setTimearrow(null);

      
//     }

//   }


  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");

  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);



  

 
  const [listeElCon,setListeElCon] = useState(props.onElCons.listeElementsConsulations)
  const [currentBloc, setCurrentBloc] = useState([listeElCon[0]]);

  const [listeReponseConsultation, setListeReponseConsultation] = useState([]);

  const [listeReponseBlocUn, setListeReponseBlocUn] = useState([]);
  
  const [listeReponseBlocDeux, setListeReponseBlocDeux] = useState([]);

  const ajouteReponseCons = (reponse) => {
    let objetAAjouter = reponse;
    let listeRep = [...listeReponseConsultation];
    let listeBlocUn = [...listeReponseBlocUn];
    let listeBlocDeux = [...listeReponseBlocDeux];
    listeRep.push(objetAAjouter);
    // console.log(listeRep);
    setListeReponseConsultation(listeRep);
    if (objetAAjouter.identifiant==1) {

      listeBlocUn.push(objetAAjouter);
      setListeReponseBlocUn(listeBlocUn);
    } else if (objetAAjouter.identifiant==2) {
      listeBlocDeux.push(objetAAjouter);
      setListeReponseBlocDeux(listeBlocDeux)
    }
    let BlocRep = {
      blocUn : listeBlocUn,
      blocDeux : listeBlocDeux
    };


    props.onFonction.recup(listeRep,BlocRep);

    
  }

  const afficheSuite = (iden) => {
    let limite = listeElCon.length - 1;
    let id = iden;
    if (id>=limite) {
      props.onElCons.fonctionTarif();
    } else {
      let newId = id + 1;
    setCurrentBloc([listeElCon[newId]]);

    }
    
    
  }


  const retourArriere = (iden) => {
    let listeRep = [...listeReponseConsultation];
    let listeBlocUn = [...listeReponseBlocUn];
    let listeBlocUnCopie = [...listeReponseBlocUn];

    let listeBlocDeux = [...listeReponseBlocDeux];
    let limite = 0;
    let id = iden;
    
    if (id>limite) {
      

      let newId = id - 1;
      let newIdBlocDEux = id - 13;
      listeRep.splice(newId);
      listeBlocUn.splice(newId);
      listeBlocDeux.splice(newIdBlocDEux);
      setListeReponseConsultation(listeRep);
      setListeReponseBlocUn(listeBlocUn);
      setListeReponseBlocDeux(listeBlocDeux);
      setCurrentBloc([listeElCon[newId]]);

     
    console.log(listeRep,listeBlocUn,listeBlocDeux);

  } }



 

  return (
      <div  
            
            className="Consultation">
        <h1>{props.onElCons.titre}</h1>

        <br></br>
        <div className="ContainerInter">
        {currentBloc.map((objet) => {
          return (
            <objet.objet 
            keys = {objet.id}
            suite = {afficheSuite}
            ajoute = {ajouteReponseCons}
            retour = {retourArriere}
              
            ></objet.objet>
          );
        })}



        </div>

          
       

      </div>
    
  );






  
 
}

export default ConsultationModel;
