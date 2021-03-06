import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import InfoPatiente from "@assets/docx/InfoPatiente.docx";
import VerrouUn from "@components/VerrouUn";
import newPdfIcon from "@assets/images/PDFicon.svg";



import "./ContreIndicationMineure.css";

function ContreIndicationMineure(props) {
  
  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  
  const [globalStateContre, setGlobalStateContre] = useState(props.onData);


  ///// background consulte


const [backgroundBase, setBackgroundBase] = useState("ConsultationContainer");

const [ backgroundSelect, setBackgroundSelect] = useState("ConsultationContainerSelect");




const [backgroundBaseMife, setBackgroundBaseMife] = useState(backgroundBase);

const [backgroundBaseMiso, setBackgroundBaseMiso] = useState(backgroundBase);


const [backgroundBaseAnta, setBackgroundBaseAnta] = useState(backgroundBase);

const [backgroundBaseEffet, setBackgroundBaseEffet] = useState(backgroundBase);

const [backgroundBaseContext, setBackgroundBaseContext] = useState(backgroundBase);






  




  const afficheStateFin = () => {
    let echelon = compteur;
    if (echelon<5) {
      afficheNoRep(); 
      
    }
    else if (echelon>=5) {

      /// reponse ok affiche bouton tarif
      afficheTarif();
      
    }
    props.onRecup(globalStateContre);
  };


  /////////// state 


  ///////// boutton

const [couleurBouttonBase, setCouleurBouttonBase] = useState("TestBTNBAse");

const [couleurBouttonSel, setCouleurBouttonSel] = useState("TestBTNSel");



const [btnOuiViolenceBase, setBtnOuiViolenceBase] = useState("TestBTNBAse");

const [btnNonViolenceBase, setBtnNonViolenceBase] = useState("TestBTNBAse");





const changeCouleurBoutonViolence = (e) => {
  
  
  

  if (e.target.className==couleurBouttonSel) {
    e.target.className=couleurBouttonBase;
    
  }
  else {
    e.target.className=couleurBouttonSel;

  }



}



  ////////////// current reponseOUTarif

  const [ currentReponseTarif, setCurrentReponseTarif] = useState("")

  //////////////////////////////////// tarification

  const afficheTarif = () => {
    setCurrentReponseTarif(blocTarif)
  };

  const tarifFinal = () => {
    return (
      <div className="TarifiContainer">
      <Button variant="danger" onClick={props.onSuite}>
       Consultation
      </Button>
      </div>
    )
  };

  const [blocTarif, setBlocTarif] = useState(()=>tarifFinal());


  //////////////////////////////////////////////////////

  /////// bloc no reponse
  const afficheNoRep = () => {
    setCurrentReponseTarif(pasDeReponseBloc)
  };

  const pasDeReponse = () => {
    return (
      <div>
        <h4 className="Red">Vous n'avez pas répondu à toutes les questions </h4>
        

      </div>
    )
  }


  const [pasDeReponseBloc, setPasDeReponseBloc] = useState(()=>pasDeReponse())




  /////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

  

  /////////////

  const [ compteur, setCompteur] = useState(0);

  const augmenteCount = () => {
    setCompteur(compteur+1)
  }

  ////////////////////////////////////////////////////////
  /// Verrou
 
 


  /// Bloc Mifépristone
  const Mifepristone = () => {
    return (
      <div className="BulleInfo">
        <p>
        Insuffisance surrénale chronique, hypersensibilité à la substance active  asthme sévère (non contrôlé par le traitement), porphyrie héréditaire, grossesse non confirmée, grossesse de plus de 63 jours d’aménorrhée, suspicion de grossesse extra-utérine. 
        </p>
      </div>
    );
  };
  const [txtMife, setTextMife] = useState(() => Mifepristone());

  const [currentInfoMife, setCurrentInfoMife] = useState("");

  const affichageTxtMife = () => {
    let txtAEnlever = currentInfoMife;
    let txtAAfficher = txtMife;
    setCurrentInfoMife(txtAAfficher);
    setTextMife(txtAEnlever);
  };

  const [logoAfficheMife, setLogoAfficheMife] = useState(LightOff);

  const [logoNonAfficheMife, setLogoNonAfficheMife] = useState(LightOn);

  const changementCouleurSVGMife = () => {
    let currentLampe = logoAfficheMife;
    let currentCache = logoNonAfficheMife;
    setLogoNonAfficheMife(currentLampe);
    setLogoAfficheMife(currentCache);
    affichageTxtMife();
  };


  
  /// Bloc Misoprostol

  const Misoprostol = () => {
    return (
      <div className="BulleInfo">
        <p>
        Hypersensibilité au misoprostol,, grossesse non confirmée, suspicion de grossesse extra-utérine. 
        </p>
      </div>
    );
  };
  const [txtMiso, setTextMiso] = useState(() => Misoprostol());

  const [currentInfoMiso, setCurrentInfoMiso] = useState("");

  const affichageTxtMiso = () => {
    let txtAEnlever = currentInfoMiso;
    let txtAAfficher = txtMiso;
    setCurrentInfoMiso(txtAAfficher);
    setTextMiso(txtAEnlever);
  };

  const [logoAfficheMiso, setLogoAfficheMiso] = useState(LightOff);

  const [logoNonAfficheMiso, setLogoNonAfficheMiso] = useState(LightOn);

  const changementCouleurSVGMiso = () => {
    let currentLampe = logoAfficheMiso;
    let currentCache = logoNonAfficheMiso;
    setLogoNonAfficheMiso(currentLampe);
    setLogoAfficheMiso(currentCache);
    affichageTxtMiso();
  };

  /// Bloc prescription anta

  const PrescriptionAnta = () => {
    return (
      <div className="BulleInfo">
        <p>
        Fiche réponse HAS Covid et IVG : antalgiques palier 1 (ibuprofène ou fénoprofène à dose antalgique) et 2 (paracétamol associé à l’opium ; la codéine ; tramadol seul ou en association avec le paracétamol).
        </p>
        <p>
        En cas de Covid 19, l’ibuprofène, antalgique de référence dans l’IVG médicamenteuse, est remplacé par le paracétamol associé à l’opium ou à la codéine. 
        </p>
        <p>
        <a className="Bold" rel="noreferrer noopener"
            href="https://www.has-sante.fr/upload/docs/application/pdf/2020-04/reponse_rapide_ivg__09_04_2020_coiv8.pdf"
            target="_blank"
          > info
          </a>
        </p>
      </div>
    );
  };
  const [txtPresci, setTextPresci] = useState(() => PrescriptionAnta());

  const [currentInfoPresci, setCurrentInfoPresci] = useState("");

  const affichageTxtPresci = () => {
    let txtAEnlever = currentInfoPresci;
    let txtAAfficher = txtPresci;
    setCurrentInfoPresci(txtAAfficher);
    setTextPresci(txtAEnlever);
  };

  const [logoAffichePresci, setLogoAffichePresci] = useState(LightOff);

  const [logoNonAffichePresci, setLogoNonAffichePresci] = useState(LightOn);

  const changementCouleurSVGPresci = () => {
    let currentLampe = logoAffichePresci;
    let currentCache = logoNonAffichePresci;
    setLogoNonAffichePresci(currentLampe);
    setLogoAffichePresci(currentCache);
    affichageTxtPresci();
  };
  /// Bloc info effets secondaires

  const EffetSecondaire = () => {
    return (
      <div className="BulleInfo">
        <h4>ES mifépristone :</h4>
        <p>
        nausées/vomissements, diarrhées, crampes abdominales, infection.
        </p>
        <br></br>
        <h4>ES misoprostol :</h4>
        <p>
        nausées/vomissements, diarrhées, crampes abdominales, infection, contractions utérines, saignements utérins, malformations fœtales.
        </p>
      </div>
    );
  };
  const [txtInfoEffet, setTextInfoEffet] = useState(() => EffetSecondaire());

  const [currentInfoEffet, setCurrentInfoEffet] = useState("");

  const affichageTxtInfoEffet = () => {
    let txtAEnlever = currentInfoEffet;
    let txtAAfficher = txtInfoEffet;
    setCurrentInfoEffet(txtAAfficher);
    setTextInfoEffet(txtAEnlever);
  };

  const [logoAfficheInfoEffet, setLogoAfficheInfoEffet] = useState(LightOff);

  const [logoNonAfficheInfoEffet, setLogoNonAfficheInfoEffet] = useState(
    LightOn
  );

  const changementCouleurSVGInfoEffet = () => {
    let currentLampe = logoAfficheInfoEffet;
    let currentCache = logoNonAfficheInfoEffet;
    setLogoNonAfficheInfoEffet(currentLampe);
    setLogoAfficheInfoEffet(currentCache);
    affichageTxtInfoEffet();
  };

  const recupEffet = (e) => {
    
    let reponse = {
      titre: "Une information claires et établies des effets secondaires possibles des traitements a été établie durant la consultation : ",
      value: e.target.value,
      reponse : 1,
      bloc : 2
    };
    let liste = [...globalStateContre];
    liste.push(reponse);
    setGlobalStateContre(liste);
    setBackgroundBaseEffet(backgroundSelect);

   
  };
  ////////////////////////////


const testVerrouUn = () => {
  return (
    <div>
       <p className="Red">
      Dans le cadre de l’interruption volontaire de grossesse, votre réponse va à l’encontre des recommandations établies actuellement en vigueur en France. 

        
      </p>
      <p className="Red">
      Il est nécessaire d’adresser votre patiente vers le centre de référence duquel dépend la patiente (à défaut aux urgences spécialisés le plus proche).
          </p>

          <p className="Red">

          Le degré d’urgence est à établir selon les signes cliniques ou l’âge gestationnel estimé.
          </p>


    </div>
  )
}

const [ idVerrou, setIdVerrou] = useState(()=>testVerrouUn());


const [verrouShow, setVerrouShow] = useState(false);

const handleChangeVerrou = () => {
  /// affichage modal
  setVerrouShow(true);

};


  return (
    <div className="consultationContainer">
      <VerrouUn
        show={verrouShow}
        onHide={() => setVerrouShow(false)} 
        onData={idVerrou}



      ></VerrouUn>
      <h1>Consultation 1ere prise médicamenteuse Contre-indication </h1>
      <br></br>
      
      <br></br>
      <div className={backgroundBaseMife}>
      <label>
        <h3>Contre-indication médicamenteuse Mifépristone :</h3>


        <Form>
      <div key={`MifeMaj-radio`} className="mb-3" onChange={()=>{
        augmenteCount();
        setBackgroundBaseMife(backgroundSelect);
      }}>
      <Form.Check 
        type='radio'
        id={`MifeContreMajOui`}
        label={`Oui`}
        value="Oui"
        name="MifeContreMaj"
        onClick={()=>{
         
          handleChangeVerrou();}}
        
      />

<Form.Check 
        type='radio'
        id={`MifeContreMajNon`}
        label={`Non`}
        value="Non"
        name="MifeContreMaj"
        
        
      />
      </div>
      </Form>



      </label>
      <input
        alt="Image bulle informative"
        onClick={changementCouleurSVGMife}
        className="Lampe"
        type="image"
        src={logoAfficheMife}
      />
      <div className="ContainerBulle">{currentInfoMife}</div>
      <br></br>
      </div>
      <div className={backgroundBaseMiso}>
      
      <h3>Contre-indication médicamenteuse Misoprostol :</h3>

      <label>



      <Form>
      <div key={`MisoMaj-radio`} className="mb-3" onChange={()=>{
        augmenteCount();
        setBackgroundBaseMiso(backgroundSelect);
      }}>
      <Form.Check 
        type='radio'
        id={`MisoContreMajOui`}
        label={`Oui`}
        value="Oui"
        name="MisoContreMaj"
        onClick={()=>{
         
          handleChangeVerrou();}}
        
      />

<Form.Check 
        type='radio'
        id={`MisoContreMajNon`}
        label={`Non`}
        value="Non"
        name="MisoContreMaj"
        
        
      />
      </div>
      </Form>







        
       
      </label>
      <input
          alt="Image bulle informative"
            onClick={changementCouleurSVGMiso}
        className="Lampe"
        type="image"
        src={logoAfficheMiso}
      />
      <div className="ContainerBulle">{currentInfoMiso}</div>
      <br></br>
      </div>

      <div className={backgroundBaseAnta}>
      <h3>Prescription d’antalgiques : </h3>
  <label>
       


        <Form>
      <div key={`AntaMaj-radio`} className="mb-3" onChange={()=>{
        augmenteCount();
        setBackgroundBaseAnta(backgroundSelect);
      }}>
      <Form.Check 
        type='radio'
        id={`AntaMajOui`}
        label={`Oui`}
        value="Oui"
        name="AntaContreMaj"
        
      />

<Form.Check 
        type='radio'
        id={`AntaMajNon`}
        label={`Non`}
        value="Non"
        name="AntaContreMaj"
       
        
      />
      </div>
      </Form>

      </label>
      <input
        alt="Image bulle informative"      
        onClick={changementCouleurSVGPresci}
        className="Lampe"
        type="image"
        src={logoAffichePresci}
      />
      <div className="ContainerBulle">{currentInfoPresci}</div>
      <br></br>
      </div>
      <div className={backgroundBaseEffet}>
      <h3>
          Information claires et établies des effets secondaires possibles des
          traitements :
        </h3>
      <label>
       

        <Form>
      <div key={`INfoEFfetMaj-radio`} className="mb-3" onChange={(e)=>{
        recupEffet(e);
        augmenteCount();}}>
      <Form.Check 
        type='radio'
        id={`INfoEFfetMajOui`}
        label={`Oui`}
        value="Oui"
        name="INfoEFfetMaj"
        
      />

<Form.Check 
        type='radio'
        id={`INfoEFfetMajNon`}
        label={`Non`}
        value="Non"
        name="INfoEFfetMaj"
        
        
      />
      </div>
      </Form>
      </label>
      <input
        alt="Image bulle informative"
        onClick={changementCouleurSVGInfoEffet}
        className="Lampe"
        type="image"
        src={logoAfficheInfoEffet}
      />
      <div className="ContainerBulle">{currentInfoEffet}</div>
      <br></br>
      </div>
      <div className={backgroundBaseContext}>
      <h3>Contexte biopsychosocial favorable à l’IVG hors établissement :</h3>

      <label>
        <Form>
      <div key={`biopsychosocialCMaj-radio`} className="mb-3" onChange={(e)=>{
        augmenteCount();
        setBackgroundBaseContext(backgroundSelect);}}>
      <Form.Check 
        type='radio'
        id={`biopsychosocialCMajOui`}
        label={`Oui`}
        value="Oui"
        name="biopsychosocialContreMaj"
        
      />

<Form.Check 
        type='radio'
        id={`biopsychosocialCMajNon`}
        label={`Non`}
        value="Non"
        name="biopsychosocialContreMaj"
        onClick={()=>{handleChangeVerrou();
          }}
        
        
      />
      </div>
      </Form>

      </label>
      </div>

      <br></br>
      <br></br>
      
      <br></br> 
      <h3>Fiche patient traitement :</h3>
      <p>
      <a className="NewDocContainer" rel="noreferrer noopener"  href={InfoPatiente} target="_blank">
      <input
      alt="Image document fiche info patiente"
        className="iconPDFNew"
        type="image"
        src={newPdfIcon}
      />
        télécharger PDF
      </a>
    
        
      
       </p> 


      <Button className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
      changeCouleurBoutonViolence(e);}} variant="danger">
        Valider mes choix
      </Button>{" "}
      <br></br>
      <div>{currentReponseTarif}</div>

    </div>
  );
}

export default ContreIndicationMineure;
