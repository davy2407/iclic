import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";





import "./BlocEchoFaite.css";


function BlocEchoFaite(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

  const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");
 
  const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);


  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };

  const [ currentVerrou, setCurrentVerrou] = useState("");

  const verrouTxt = () => {
    return (
        <div className="Red Verrou">
            <p>
            Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France.
            <br></br>
            <br></br>
            Il est nécessaire, selon vos réponses, un ajustement et une reprise à la consultation précédente.           <br></br>
            Selon le temps estimer de la grossesse, il peut s’agir d’une urgence.<br></br>
            Votre centre de référence peut vous répondre afin d’établir une prise en charge dans les meilleurs conditions pour la patiente.
            </p>
        </div>
    )
};

const [txtVerrou, setTextverrou] = useState(
    () => verrouTxt()
);

const afficheverrou = () => {
  
  let txtAAfficher = txtVerrou;
  setCurrentVerrou(txtAAfficher);
};

    const [ currentRep, setCurrentRep] =useState({
        titre : "Échographie de datation : ",
        value : "",
        reponse : 0,
        identifiant : 1

      });
    


    const recupRadioAcc = (e) => {
        let reponse = {
          titre: "Échographie de datation : ",
          value: e.target.value,
          reponse : 1,
          identifiant : 1

        };
        setCurrentRep(reponse);

        
      }
    




  return (
    <div className={currentClassCard}>
        <h2>
        Échographie de datation
        </h2>


        <label>
      <Form>
      <div key={`acc-radio`} className="mb-3" onChange={(e)=>{recupRadioAcc(e);}}>
      <Form.Check 
        type='radio'
        id={`accOui`}
        label={`Oui`}
        value="Oui"
        name="accompagant"
        onClick={()=>{setCurrentVerrou("");changeBtnClass();}}

      />

<Form.Check 
        type='radio'
        id={`accNon`}
        label={`Non`}
        value="Non"
        name="accompagant"
        onClick={()=>{afficheverrou();setCurrentClassBtt(classBouttonBase);}}

      />
      </div>
      </Form>
      {currentVerrou}

        
      </label>
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>


      <Button variant="info" className={currentClassBtt} onClick={()=>{
                               setCurrentClassCard(classActifCard);

                               props.ajoute(currentRep);
                               setTimeout(() => {
                                 props.suite(props.keys);
                        
                               }, 501);
             
            }}>Suivant</Button>


           
            </div>
    
  );






  
 
}

export default BlocEchoFaite;
