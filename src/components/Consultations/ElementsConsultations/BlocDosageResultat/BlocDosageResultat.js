import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";






import "./BlocDosageResultat.css";


function BlocDosageResultat(props) {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

 const submitHandler = (e) => {
    e.preventDefault();
};
  const [classBouttonBase,setClassBouttonBase] = useState("BouttonSuivant");

  const [classBouttonActif, setClassBouttonActif] = useState("BouttonSuivantActif");

  const [currentClassBtt, setCurrentClassBtt] = useState(classBouttonBase);

  const [ currentRep, setCurrentRep] =useState({
    titre : "Résultat décroissance dosage sanguin BHCG : ",
    value : "",
    reponse : 0
  });

  const changeBtnClass = () => {
    setCurrentClassBtt(classBouttonActif);


  };
  const recupRadioPOsNe = (e) => {
    let reponse = {
      titre: "Utilisation d’un autotest urinaire : Oui ; Résultat : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentRep(reponse);
  }

  const [nouvelleRechercheBHCGInitial, setNouvelleRechercheBHCGInitial] = useState("")
          ///////// dosage initial BHCG

  const handleChangeBHCGInitial = event => {
    setNouvelleRechercheBHCGInitial(event.currentTarget.value);
  };

  const [nouvelleRechercheBHCGJour, setNouvelleRechercheBHCGJour] = useState()

  const handleChangeBHCGJour = event => {
    setNouvelleRechercheBHCGJour(event.currentTarget.value);
  };


  const recupRadioAuto = (e) => {
    let reponse = {
      titre: "Utilisation d’un autotest urinaire : ",
      value: e.target.value,
      reponse : 1
    };
    setCurrentRep(reponse);
    changeBtnClass();

}

////// resultat
const ResultatFi = (initial,jour) =>{
let dosageIni = initial;
let dosageJour = jour;
let resultat = Math.round(( ( ( dosageJour - dosageIni ) / dosageIni ) * 100 )) ;
return resultat;

}

const recupResultat = (e) => {
e.preventDefault();
let reponse = {
titre : "Résultat décroissance dosage sanguin BHCG : ",
value : e.target.value+"%",
reponse : 1

};
setCurrentRep(reponse);
changeBtnClass();




}


const afficheResultat = (initial,jour) => {
let dosageIni = initial;
let dosageJour = jour;
let resultat = Math.round(( ( ( dosageJour - dosageIni ) / dosageIni ) * 100 )) ;
let txt = "";
// setCurrentResultat(reponse);
if (resultat>=-80) {
    txt = "Échec de la méthode selon l’analyse du pourcentage." 
    
}
else if (resultat<-80) {
    txt = "Réussite de la méthode selon l’analyse du pourcentage."
    
}
if (parseInt(resultat)) {
  return (
    <div>
    <p>{resultat} %</p>
    <br></br>
    <p className="Red">{txt}</p>
    </div>
)
  
}


}


const returnInfoDosage = () => {
return (
  <div className="BulleInfo">
    <p>
     Une baisse supérieure à 80% du dosage initial 15 jours après
     l’IVG médicamenteuse est en faveur d’une réussite de celle-ci. 
L’autotest urinaire peut également être utilisé pour juger le succès de l’IVG
médicamenteuse. Celui-ci peut être réalisé à domicile combiné à un suivi téléphonique
    </p>
    <a className="Bold" target="_blank" rel="noreferrer noopener" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">
     Lien HAS recommandation 
    </a>
  </div>
);
};

const [txtDosage, setTxtDosage] = useState(() => returnInfoDosage());

const [currentInfoDosage, setCurrentInfoDosage] = useState("");

const affichageTxtDosage = () => {
let txtAEnlever = currentInfoDosage;
let txtAAfficher = txtDosage;
setCurrentInfoDosage(txtAAfficher);
setTxtDosage(txtAEnlever);
};

const [logoAfficheDosage, setLogoAfficheDosage] = useState(LightOff);

const [logoNonAfficheDosage, setLogoNonAfficheDosage] = useState(LightOn);

const changementCouleurSVGDosage = () => {
let currentLampe = logoAfficheDosage;
let currentCache = logoNonAfficheDosage;
setLogoNonAfficheDosage(currentLampe);
setLogoAfficheDosage(currentCache);
affichageTxtDosage();
};


const ouiUri = () => {
    return (
      <div>
        <h4> résultat :</h4>
        <Form>
<div key={`resultUri-radio`} className="mb-3" onChange={(e)=>{recupRadioPOsNe(e);}}>
<Form.Check 
  type='radio'
  id={`resultUriOui`}
  label={`Positif`}
  value="Positif"
  name="resultatUrinaire"
/>

<Form.Check 
  type='radio'
  id={`resultUriNon`}
  label={`Négatif`}
  value="Négatif"
  name="resultatUrinaire"
/>
</div>
</Form>







      
  </div>
    ) 
}

const [afficheOUiUri, setAfficheOUIUri] = useState(()=>ouiUri());

const [currentOuiUri, setCurrentOuiUri] = useState("");

const afficheUrinaire = () => {
    
    let txtAAfficher = afficheOUiUri;
    setCurrentOuiUri(txtAAfficher);
    

}












  return (
    <div className="BlocConsultationStyle">
       <h2>Dosage B-HCG : </h2>

<form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
<input
    value={nouvelleRechercheBHCGInitial}
    onChange={handleChangeBHCGInitial}
    type="text"
    placeholder="Dosage initial BHCG"
/>

</form>

<form onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
<input
    value={nouvelleRechercheBHCGJour}
    onChange={handleChangeBHCGJour}
    type="text"
    placeholder="Dosage jour BHCG"
/>

</form>


{afficheResultat(nouvelleRechercheBHCGInitial,nouvelleRechercheBHCGJour)}

<Button variant="danger" onClick={(e)=>{
            recupResultat(e);
            }}
        value={ResultatFi(nouvelleRechercheBHCGInitial,nouvelleRechercheBHCGJour)}
 
        >Valider</Button>
<h3 className="Red">Ou</h3>

<h3>Utilisation d’un autotest urinaire :</h3>
<Form>
      <div key={`autoUri-radio`} className="mb-3" onChange={(e)=>{recupRadioAuto(e);}}>
      <Form.Check 
        type='radio'
        id={`autoUriOui`}
        label={`Oui`}
        value="Oui"
        name="autotest"
        onClick={()=>{
          
          afficheUrinaire();
          }}
        
        
      />

<Form.Check 
        type='radio'
        id={`autoUriNon`}
        label={`Non`}
        value="Non"
        name="autotest"
        onClick={()=>{
          setCurrentOuiUri("");
        }}
        
      />

      </div>
      </Form>


<div>{currentOuiUri}</div>
<input
onClick={changementCouleurSVGDosage}
className="Lampe"
type="image"
src={logoAfficheDosage}
/>
<div className="ContainerBulle">{currentInfoDosage}</div>

<br></br>
      <Button variant="info" className="BouttonRetour" onClick={()=>{
        props.retour(props.keys);
             
            }}>Retour</Button>
      <Button variant="info" className={currentClassBtt} onClick={()=>{
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>
            </div>
    
  );






  
 
}

export default BlocDosageResultat;