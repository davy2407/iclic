import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";



import "./BlocDDR.css";


function BlocDDR(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])


 const [ classBaseCard, setClassBaseCArd] =useState("BlocConsultationStyle");

 const [classActifCard,setClassActifCard] =useState("BlocConsultationStyleActiv");

 const [currentClassCard, setCurrentClassCard] =useState(classBaseCard);

  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);
  };
    
  const [dateDDR, setDateDDR] = useState({});

  const [valueDDRweek, setValueDDRweek] = useState(
    {
      titre : "Nombre semaines SA : ",
      value : "",
      titreBis : "",
      valueBis : "",
      reponse : 0
      
  
    }
  );

  

  const Urgence = ()=> {
    return (
      <div>
        <p className="red" >
          Urgence
        </p>
      </div>
    )
  }

  const [txtUrgence, setTxtUrgence] = useState(()=> Urgence());

  const [currentTextUrgence, setCurrentTextUrgence] = useState("");

  const affichageTxtUrgence = () => {
   
    let txtAAfficher = txtUrgence;
    setCurrentTextUrgence(txtAAfficher);
    
  };

  

  const [ currentVerrou, setCurrentVerrou] = useState("");

  const verrouTxt = () => {
    return (
        <div className="Red Verrou">
            <p>
            Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France.
            <br></br>
            <br></br>
            Il est nécessaire d’adresser votre patiente vers le centre de référence duquel dépend la patiente (à défaut aux urgences spécialisés le plus proche).
            <br></br>
            Le degré d’urgence est à établir selon les signes cliniques ou l’âge gestationnel estimé.
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






  const DDR = (e) => {
    
    let dateDDR = new Date(e);
    const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const today = new Date();
  const todayInUTC = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const dateDDRInUTC = Date.UTC(
    dateDDR.getFullYear(),
    dateDDR.getMonth(),
    dateDDR.getDate()
  );


  const diffInDays = Math.floor((todayInUTC - dateDDRInUTC) / MS_PER_DAY);
  const semaineSAInDays = diffInDays ;

  const semaineSA = {
    weeks: Math.round(semaineSAInDays /7),
    days: semaineSAInDays % 7,
  };
  
  let reponse = {
    titre : "Nombre semaines SA : ",
    value : semaineSA.weeks.toString(),
    titreBis : " + jour : ",
    valueBis : semaineSA.days.toString(),
    reponse : 1

  };

 

 
  setValueDDRweek(reponse);
  
  
 
  setDateDDR(Math.round(semaineSA.weeks))
  if (Math.round(semaineSA.weeks)>=5&&Math.round(semaineSA.weeks)<7) {
    affichageTxtUrgence();
    setCurrentVerrou("");
    changeBtnClass();
    
  }
  else if (Math.round(semaineSA.weeks)>=7) {
    setCurrentClassBtt(classBouttonBase);  

    afficheverrou();
  }
  else if (Math.round(semaineSA.weeks)<5) {
    setCurrentTextUrgence(""); 
    setCurrentVerrou("");
    changeBtnClass();

    
  }

  
  }

      const clicDateIncertaine = () => {
        affichageTxtUrgence();
        affichageDateIncertaine();
        setValueDDRweek({
      titre : "Date DDR :  ",
      value : "Incertaine",
      reponse : 1
        });
        
      }
    


    const textDDRIncertaine = ()=>{
    return (
      <div>
        <p>
        La DDR étant incertaine, il est nécessaire de s’assurer de la datation exacte
         rapidement afin de ne pas dépasser le terme légal pour une interruption de
          grossesse par voie médicamenteuse.
        </p>
      </div>
    )
  }


  const [DateIncertaine, setDateIncertaine] = useState(()=> textDDRIncertaine);

  const [currentIncertaine, setCurrentIncertaine] = useState("");

  const affichageDateIncertaine = ()=>{
    let txtAEnlever = currentIncertaine;
    let txtAAfficher = DateIncertaine;
    setCurrentIncertaine(txtAAfficher);

  }





 


  return (
    <div className={currentClassCard}>
            <h2>DDR</h2>

            <form>
      <input
        type="date"
        name="DDR"
        id="DDR"
        onChange={(e)=> {
          let myDate = new Date(e.target.valueAsDate);
          DDR(myDate);
          }}
        
        
      ></input>

      </form>

      <p><span className="Bold">SA : </span>{valueDDRweek.value}</p>
        <p><span className="Bold">Jour : </span>{valueDDRweek.valueBis}</p>
        {currentVerrou}

      
      
      <br></br>
      <label>
        Date incertaine ?<Button variant="danger" onClick={()=>{clicDateIncertaine();
        changeBtnClass();}}>Oui</Button>
      </label>
      <div  className="ContainerBulle">{currentIncertaine}</div>














           
            <br></br>
            <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>

            <Button variant="info" className={currentClassBtt} onClick={()=>{
                  setCurrentClassCard(classActifCard);

                  props.ajoute(valueDDRweek);
                  setTimeout(() => {
                    props.suite(props.keys);

                  }, 501);
             
            }}>Suivant</Button>


           
            </div>
    
  );






  
 
}

export default BlocDDR;
