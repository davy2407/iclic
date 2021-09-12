import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import VerrouUn from "@components/VerrouUn";
import AccordMaj from "@assets/docx/consentementMineure.docx";


import newPdfIcon from "@assets/images/PDFicon.svg";


import "./PostIVGMineur.css";


function PostIVGMineur(props) {

  const submitHandler = (e) => {
    e.preventDefault();
}



const [backgroundBase, setBackgroundBase] = useState("ConsultationContainer");

const [ backgroundSelect, setBackgroundSelect] = useState("ConsultationContainerSelect");


const [backgroundBaseAcc, setBackgroundBaseAcc] = useState(backgroundBase);

const [backgroundBaseDosageUri, setBackgroundBaseDosageUri] = useState(backgroundBase);

const [backgroundBaseContra, setBackgroundBaseContra] = useState(backgroundBase);

const [backgroundBaseAdhesion, setBackgroundBaseAdhesion] = useState(backgroundBase);

const [backgroundBaseIST, setBackgroundBaseIST] = useState(backgroundBase);

const [backgroundBaseTabac, setBackGroundBaseTabac] = useState(backgroundBase);

const [backgroundBaseVecu, setBackgroundBaseVecu] = useState(backgroundBase);

const [backgroundBaseAvis, setBackGroundBaseAvis] = useState(backgroundBase);


  const afficheStateFin = () => {
    let liste = [];
    liste.push(currentReco);
    liste.push(currentAcc)
    liste.push(currentResultat);
    liste.push(currentTestUri);
    liste.push(currentPosNe);
    liste.push(currentContra);
    liste.push(currentTypeContra);
    liste.push(currentIST);
    liste.push(infoSupp);
    // liste.push(currentHPV);
    // liste.push(currentDateHPV);
    liste.push(currentTabac);
    liste.push(currentNbTabac);
    liste.push(currentVecu);
    liste.push(currentAvis);
    liste.push(currentCause);
   
    let noReponse = [];
    for (let index = 0; index < liste.length; index++) {
      
      if (liste[index].reponse==0) {
        noReponse.push(liste[index].titre)
        
      }
      
      
    }
    setStateNoReponse(noReponse);
    if (noReponse.length>0) {

      /// affiche bloc no reponse
      afficheNoRep(noReponse);
      
    }
    else if (noReponse.length==0) {

      /// reponse ok affiche bouton tarif
      afficheTarif();
      
    }


    props.onRecup(liste);
  };


         //// button
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




    ///// recup radio 

    const recupRadioControl = (e) => {
      let reponse = {
        titre: "Nécessité d’ne échographie de contrôle et/ou un avis spécialisé au centre de référence : ",
        value: e.target.value,
        reponse : 1

      };
      setCurrentAvis(reponse);
      if (e.target.value=="Oui") {
        setBackGroundBaseAvis(backgroundBase);
        setCurrentCause(
          {
            titre: "",
            value: "",
            reponse : 0

          }
        );

        
        
      } else {
        setBackGroundBaseAvis(backgroundSelect);
        setCurrentCause(
          {
            titre: "",
            value: "",
            reponse : 1

          }
        );

      }
    }


    const recupRadioAuto = (e) => {
      let reponse = {
        titre: "Utilisation d’un autotest urinaire : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentTestUri(reponse);
      setCurrentResultat(
        {
          titre : "",
          value : "",
          reponse : 1
        }
      );
      if (e.target.value=="Oui") {
        setBackgroundBaseDosageUri(backgroundBase);
        setCurrentPosNe(
          {
            titre : "",
            value : "",
            reponse : 0
          }
        );
        
      } else {
        setBackgroundBaseDosageUri(backgroundSelect);
        setCurrentPosNe(
          {
            titre : "",
            value : "",
            reponse : 1
          }
        );

      }
    };

    const recupRadioPOsNe = (e) => {
      let reponse = {
        titre: "résultat autotest urinaire : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentPosNe(reponse);
      setBackgroundBaseDosageUri(backgroundSelect);
    }

    const recupRadioVecu = (e) => {
      let reponse = {
        titre: "Vécu de l’IVG traumatique : ",
        value: e.target.value,
        reponse : 1

      };
      setCurrentVecu(reponse);
      setBackgroundBaseVecu(backgroundSelect);
    }

    const recupRadioIST = (e) => {
      let reponse = {
        titre : "Recherche IST : ",
        value : e.target.value,
        reponse : 1
      };
      setCurrentIST(reponse);
      setBackgroundBaseIST(backgroundSelect);
    }

    const recupRadioTabac = (e) => {
      let reponse = {
        titre: "Tabac : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentTabac(reponse);
      if (e.target.value=="Oui") {
        setBackGroundBaseTabac(backgroundBase);
        setCurrentNbTabac(
          {
            titre : "",
            value : "",
            reponse : 0
          }
        );
        
      } else {
        setBackGroundBaseTabac(backgroundSelect);
        setCurrentNbTabac(
          {
            titre : "",
            value : "",
            reponse : 1
          }
        );
      }
      
    }

    const recupRadioContraception = (e) => {
      let reponse = {
        titre: "Contraception choisie par la patiente : ",
        value: e.target.value,
        reponse : 1
      };
      
      setCurrentContra(reponse);
      if (e.target.value=="Oui") {
        setBackgroundBaseContra(backgroundBase);
        setCurrentTypeContra(
          {
            titre : "",
            value : "",
            reponse : 0
          }
        );
        
      } else {
        setBackgroundBaseContra(backgroundSelect);
        setCurrentTypeContra(
          {
            titre : "",
            value : "",
            reponse : 1
          }
        );
      }
      
    }



    const recupInfoSupp = (e) => {
      e.preventDefault();
      let reponse = {
        titre : "Si ressource cochée oui : ",
        value : "http://www.info-ist.fr ; https://www.ameli.fr/assure/sante",
        reponse : 1
      };
      
      setInfoSupp(reponse);
    };

    const recupRadioAcc = (e) => {
      let reponse = {
        titre: "Personne accompagnante majeurs ou consentement parental : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentAcc(reponse);
      setBackgroundBaseAcc(backgroundSelect);
      
    }



    /// current state

    const [currentReco, setCurrentReco] = useState({
      titre : "",
      value : "",
      reponse : 1
    });

    const [currentAcc, setCurrentAcc] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });


    

    const [currentResultat, setCurrentResultat] = useState({
      titre : "",
      value : "",
      reponse : 1
    });

    const [currentContra, setCurrentContra] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });

    const [currentIST, setCurrentIST] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });

    const [infoSupp, setInfoSupp] = useState({
      titre : "",
      value : "",
      reponse : 1
    });

    

    const [currentTabac, setCurrentTabac] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });

    const [currentNbTabac, setCurrentNbTabac] = useState({
      titre : "",
      value : "",
      reponse : 1

    });

    const [currentVecu, setCurrentVecu] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });

    const [currentAvis, setCurrentAvis] = useState({
      titre : "Pas de réponses",
      value : "",
      reponse : 0
    });

    const [currentCause, setCurrentCause] = useState({
      titre : "",
      value : "",
      reponse : 1
    });

    const [currentTestUri, setCurrentTestUri] = useState({
      titre : "",
      value : "",
      reponse : 1
    });

    const [currentPosNe, setCurrentPosNe] = useState({
      titre : "",
      value : "",
      reponse : 1
    });

    const [ currentTypeContra, setCurrentTypeContra] = useState({
      titre : "",
      value : "",
      reponse : 1
    });




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
          Fin de consultation 
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
   
     const [ stateNoReponse, setStateNoReponse] = useState([]);
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


    const [globalStateFin, setGlobalStateFin] = useState([]);

    /////////// reco 
    const recupReco = (e) => {
      e.preventDefault();
      let reponse = {
        titre: "Téléconsultation (selon recommandation applicable jusqu'à la fin de l'état d'urgence sanitaire) : ",
        value: e.target.value,
        reponse : 1
      };
      setCurrentReco(reponse);
    
    };


    //////////////////////////


    //// Bloc Dosage
    const [nouvelleRechercheBHCGInitial, setNouvelleRechercheBHCGInitial] = useState()
          ///////// dosage initial BHCG

  const handleChangeBHCGInitial = event => {
    setNouvelleRechercheBHCGInitial(event.currentTarget.value);
  };



              ////////// dosage jour BHCG
              const [nouvelleRechercheBHCGJour, setNouvelleRechercheBHCGJour] = useState()

              const handleChangeBHCGJour = event => {
                setNouvelleRechercheBHCGJour(event.currentTarget.value);
              };
            



        ////// resultat
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
  setCurrentResultat(reponse);
  setBackgroundBaseDosageUri(backgroundSelect);
  setCurrentTestUri(
    {
      titre : "",
      value : "",
      reponse : 1
    }
  );


        }


        const afficheResultat = (initial,jour) => {
            let dosageIni = initial;
            let dosageJour = jour;
            let resultat = Math.round(( ( ( dosageJour - dosageIni ) / dosageIni ) * 100 )) ;
            let txt = "";
            if (resultat>-80) {
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
         HAS : « dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans .»
        </p>
        
        
        <p>
          De nombreuses sources numériques existent pour l’information aux
          patient(es) des IST ainsi que de ces risques
          <a rel="noreferrer noopener"
            href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles"
            target="_blank"
          >
            Ameli IST
          </a>
          ,{" "}
          <a href="http://www.info-ist.fr/index.html" target="_blank" rel="noreferrer noopener">
            ISt-info
          </a>
          .
        </p>
        <br></br>

        <label>
          Vous desirez plus d'informations à transmettre à la patiente ?
          <Button className={btnOuiViolenceBase}
            variant="danger"
            value="Oui"
            onClick={(e) => {
              recupInfoSupp(e);
              changeCouleurBoutonViolence(e);
            }}
          >
            Oui
          </Button>
        
        </label>
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



        ///////////////////////////////////////////////////////////////

        //////// Bloc Adhésion à cette contraception :

        const recupContra = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Contraception choisie par la patiente : ",
            value: e.target.value,
            reponse : 1
          };
          
          setCurrentContra(reponse);
          
        };

        const returnInfoContra = () => {
          return (
            <div className="BulleInfo">
                
              <p className="Red">
              la reprise  d’ une contraception efficace est indispensable dès la réalisation de l’IVG.          
               </p>
               <p>
               Rappel : le préservatif : seule méthode efficace contre les IST. 
    Remboursé par l’assurance maladie  (10 décembre 2018 - <a className="Bold" target="_blank" href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie ">lien info remboursement</a>). 
               </p>
               <p>
               La pilule a débuter au moment de la 1ère prise médicamenteuse ou le lendemain. 
    L’implant a débuter le jour de la 1ere prise médicamenteuse ou à la consultation post-IVG(contraception dans l’intervalle).
               </p>
               <p>
               DIU placé lors de la visite de contrôle post-IVG médicamenteuse ou ultérieurement.  
               </p>
              
               <p>
                   <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.choisirsacontraception.fr/?gclid=Cj0KCQjwufn8BRCwARIsAKzP695ZxM7VW0eQH96CJa4iLGXVGsSe3laQdLa5O41MToiliObY-cgsHTAaAuoxEALw_wcB" >choisirmacontraception.fr</a>
               </p>
              
            </div>
          );
        };
        
          const [txtContra, setTxtContra] = useState(() => returnInfoContra());
        
          const [currentInfoContra, setCurrentInfoContra] = useState("");
        
          const affichageTxtContra = () => {
            let txtAEnlever = currentInfoContra;
            let txtAAfficher = txtContra;
            setCurrentInfoContra(txtAAfficher);
            setTxtContra(txtAEnlever);
          };
        
          const [logoAfficheContra, setLogoAfficheContra] = useState(LightOff);
  
          const [logoNonAfficheContra, setLogoNonAfficheContra] = useState(LightOn);
        
          const changementCouleurSVGContra = () => {
            let currentLampe = logoAfficheContra;
            let currentCache = logoNonAfficheContra;
            setLogoNonAfficheContra(currentLampe);
            setLogoAfficheContra(currentCache);
            affichageTxtContra();
          };
      

          const handleTypeContra = (e) => {
  
     
      
      
            let reponse = {
              titre: "Type contraception : ",
              value: e.target.value,
              reponse : 1
            };
           setCurrentTypeContra(reponse);
           setBackgroundBaseContra(backgroundSelect);
          
            
          };



          const typeContraception = () => {
            return (
                <div>
                    <Form.Group>
          <Form.Control as="select" size="lg" onChange={(e) => {
                  handleTypeContra(e);
                }}>
                  <option value="">Choisir..</option>
            <option value="implant">implant</option>
            <option value="pilule">pilule</option>
            <option value="patch">patch</option>
            <option value="anneau vaginal">anneau vaginal</option>
            <option value="cape cervicale">cape cervicale</option>
            <option value="diaphragme">diaphragme</option>
            <option value="préservatif féminin">préservatif féminin</option>
            <option value="DIU hormonal et DIU au cuivre">DIU hormonal et DIU au cuivre</option>
            <option value="stérilisation">stérilisation</option>
            <option value="spermicides">spermicides</option>
            <option value="contraceptifs injectables">contraceptifs injectables</option>
          </Form.Control>
          </Form.Group>
                </div>
            )
        }
        
        const [txtTypeContra, setTxtTypeContra] = useState(()=>typeContraception());
        
        const [currentTxtTypeContra, setCurrentTxtTypeContra] = useState("");
        
        const affichageTxtTypeContra = () => {
          
          let txtAAfficher = txtTypeContra;
          
          setCurrentTxtTypeContra(txtAAfficher);
          
        };
      


        ////////////////////////////////////////////////////////////////////////



        

        



        ////////////////////// Bloc IST

        const recupIST = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Recherche IST : ",
            value: e.target.value,
            reponse : 1
          };
          
          setCurrentIST(reponse);
          
        };

        const returnInfoIST = () => {
            return (
              <div className="BulleInfo">
                <p >
                 HAS : « dépistage recommandé ciblé à toutes les femmes consultant pour une IVG, sans limite d’âge. Systématique chez les femmes de 15 à 25 ans. »

                </p>
                




                
              </div>
            );
          };
        
          const [txtIST, setTxtIST] = useState(() => returnInfoIST());
        
          const [currentInfoIST, setCurrentInfoIST] = useState("");
        
          const affichageTxtIST = () => {
            let txtAEnlever = currentInfoIST;
            let txtAAfficher = txtIST;
            setCurrentInfoIST(txtAAfficher);
            setTxtIST(txtAEnlever);
          };
        
          const [logoAfficheIST, setLogoAfficheIST] = useState(LightOff);
        
          const [logoNonAfficheIST, setLogoNonAfficheIST] = useState(LightOn);
        
          const changementCouleurSVGIST = () => {
            let currentLampe = logoAfficheIST;
            let currentCache = logoNonAfficheIST;
            setLogoNonAfficheIST(currentLampe);
            setLogoAfficheIST(currentCache);
            affichageTxtIST();
          };




        ///////////////////////////////////////////////////////////////////////////


        
        //////////////////////////////////////////////////////////////////////////////



        //////////////////// tabac

       
        
          
        
          
          
          const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState()
         
        
          const handleChangePaquet = event => {
            setNouvelleRecherchePaquet(event.currentTarget.value);
          };
        const handleSubmitPaquet = event => {
          event.preventDefault();
          let reponse = {
            titre : "Paquets/Années : ",
            value : event.currentTarget.value,
            reponse : 1
          };
          setCurrentNbTabac(reponse)
          setBackGroundBaseTabac(backgroundSelect);
           
        
            
          
        
          
          
          
        };

        const returnInfoTabac = () => {
          return (
            <div className="BulleInfo">
              <p>
               Le calcul du tabac en paquet/année peut vous être calculé sur : 
              </p>
        
              <p>
                <a href="http://medicalcul.free.fr/packyear.html" target="_blank" rel="noreferrer noopener" className="Bold" >
                http://medicalcul.free.fr/packyear.html.
                </a>
              </p>
        
              <p>
              1 paquet-année = 1 paquet de cigarette (20 cigarettes) par jour pendant 1 an.
              </p>
        
        
             
            </div>
          );
        };
        
        const [txtTabac, setTxtTabac] = useState(() => returnInfoTabac());
        
        const [currentInfoTabac, setCurrentInfoTabac] = useState("");
        
        const affichageTxtTabac = () => {
          let txtAEnlever = currentInfoTabac;
          let txtAAfficher = txtTabac;
          setCurrentInfoTabac(txtAAfficher);
          setTxtTabac(txtAEnlever);
        };
        
        const [logoAfficheTabac, setLogoAfficheTabac] = useState(LightOff);
        
        const [logoNonAfficheTabac, setLogoNonAfficheTabac] = useState(LightOn);
        
        const changementCouleurSVGTabac = () => {
          let currentLampe = logoAfficheTabac;
          let currentCache = logoNonAfficheTabac;
          setLogoNonAfficheTabac(currentLampe);
          setLogoAfficheTabac(currentCache);
          affichageTxtTabac();
        };
        





        /////////////////// bloc Vécu de l’IVG traumatique :

       
        const returnInfoVecu = () => {
            return (
              <div className="BulleInfo">
                <p>
                 Un vécu traumatique peut nécessiter, à la demande du médecin/sage-femme
                 pratiquant l’acte, une prise en charge avec une psychologue et/ou un
                  suivi attentif par le médecin traitant
                </p>
                
              </div>
            );
          };
        
          const [txtVecu, setTxtVecu] = useState(() => returnInfoVecu());
        
          const [currentInfoVecu, setCurrentInfoVecu] = useState("");
        
          const affichageTxtVecu = () => {
            let txtAEnlever = currentInfoVecu;
            let txtAAfficher = txtVecu;
            setCurrentInfoVecu(txtAAfficher);
            setTxtVecu(txtAEnlever);
          };
        
          const [logoAfficheVecu, setLogoAfficheVecu] = useState(LightOff);
        
          const [logoNonAfficheVecu, setLogoNonAfficheVecu] = useState(LightOn);
        
          const changementCouleurSVGVecu = () => {
            let currentLampe = logoAfficheVecu;
            let currentCache = logoNonAfficheVecu;
            setLogoNonAfficheVecu(currentLampe);
            setLogoAfficheVecu(currentCache);
            affichageTxtVecu();
          };





        ////////////////////////////////////////////////////////////////////////////




        //// Bloc Nécessité d’une échographie de contrôle et /ou un avis spécialisé au centre de référence :

       

       
         
        
        const handleTypeCause = (e) => {
          
         
          
          
          let reponse = {
            titre: " cause : ",
            value: e.target.value,
            reponse : 1
          };
         setCurrentCause(reponse);
         setBackGroundBaseAvis(backgroundSelect);
        
          
        };
        const oui = () => {
            return (
              <div>
                <Form.Group>
      <Form.Control as="select" size="lg" onChange={(e) => {
              handleTypeCause(e);
            }}>
        <option value="">Cause</option>
        <option value="Un échec après analyse de la décroissance du taux de B-HCG. ">1. Un échec après analyse de la décroissance du taux de HCG. </option>
        <option value="Des saignements abondants (sans signes cliniques d’anémie ou facteurs de risques/comorbidité).">2. Des saignements abondants (sans signes cliniques d’anémie ou facteurs de risques/comorbidité).</option>
        <option value="Une fièvre pouvant être le signe d’une infection post-IVG médicamenteuse.">3. Une fièvre pouvant être le signe d’une infection post-IVG médicamenteuse.</option>
        <option value="Des douleurs ne s’atténuant pas par la prise de médicaments.">4. Des douleurs ne s’atténuant pas par la prise de médicaments.</option>
       
      </Form.Control>
      </Form.Group>
      
            </div>
            )
        }

        const [afficheOUi, setAfficheOUI] = useState(()=>oui());

        const [currentOui, setCurrentOui] = useState("");

        const afficheCause = () => {
            
            let txtAAfficher = afficheOUi;
            setCurrentOui(txtAAfficher);
            

        }


        const returnInfoAvis = () => {
            return (
              <div className="BulleInfo">
               <p>
                 Une échographie de contrôle ou un avis spécialisé peuvent être demandés devant :
                </p>
                <ul>
                    <li> Un échec après analyse de la décroissance du taux de BHCG. </li>
                    <li> Des saignements abondants (sans signe clinique d’anémie ou facteur de risque/comorbidité).</li>
                    <li>Une fièvre pouvant être le signe d’une infection post-IVG médicamenteuse.</li>
                    <li>Des douleurs ne s’atténuant pas par la prise d'antalgique.</li>
                </ul>
                <p>
                Il est à noter que des patientes présentant des saignements abondants
                 avec signes cliniques d’anémie peuvent être adressées au service
                  d’urgence spécialisée du centre de référence.
                  
                </p>
                <p>
                <a className="Bold" target="_blank" rel="noreferrer noopener" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">
                  HAS recommandation
                  </a>
                </p>

                
              </div>
            );
          };
        
          const [txtAvis, setTxtAvis] = useState(() => returnInfoAvis());
        
          const [currentInfoAvis, setCurrentInfoAvis] = useState("");
        
          const affichageTxtAvis = () => {
            let txtAEnlever = currentInfoAvis;
            let txtAAfficher = txtAvis;
            setCurrentInfoAvis(txtAAfficher);
            setTxtAvis(txtAEnlever);
          };
        
          const [logoAfficheAvis, setLogoAfficheAvis] = useState(LightOff);
        
          const [logoNonAfficheAvis, setLogoNonAfficheAvis] = useState(LightOn);
        
          const changementCouleurSVGAvis = () => {
            let currentLampe = logoAfficheAvis;
            let currentCache = logoNonAfficheAvis;
            setLogoNonAfficheAvis(currentLampe);
            setLogoAfficheAvis(currentCache);
            affichageTxtAvis();
          };



        //////////////////////////////////////////////////////


        /////////////////////////////// Bloc Accc

      

        const returnInfoAcc = () => {
          return (
            <div className="BulleInfo">
              <p>
              Accompagnement personne majeure identique au cours des différentes consultations : soutien moral efficient.             </p>
              
            </div>
          );
        };
      
        const [txtAcc, setTxtAcc] = useState(() => returnInfoAcc());
      
        const [currentInfoAcc, setCurrentInfoAcc] = useState("");
      
        const affichageTxtAcc = () => {
          let txtAEnlever = currentInfoAcc;
          let txtAAfficher = txtAcc;
          setCurrentInfoAcc(txtAAfficher);
          setTxtAcc(txtAEnlever);
        };
      
        const [logoAfficheAcc, setLogoAfficheAcc] = useState(LightOff);
      
        const [logoNonAfficheAcc, setLogoNonAfficheAcc] = useState(LightOn);
      
        const changementCouleurSVGAcc = () => {
          let currentLampe = logoAfficheAcc;
          let currentCache = logoNonAfficheAcc;
          setLogoNonAfficheAcc(currentLampe);
          setLogoAfficheAcc(currentCache);
          affichageTxtAcc();
        };


        /////////////////////////////////////////////////////////////////////////////


        //////// bloc Utilisation d’un autotest urinaire 

        const recupTestUri = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Utilisation d’un autotest urinaire : ",
            value: e.target.value,
            reponse : 1
          };
          setCurrentTestUri(reponse);
        

        }

        
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




        /////////////////////////////////////////////////////////////////

        const ouiCovid = ()=> {
          return (
            <div>
              
              <p>
              Téléconsultation<br></br>
              Condition : Outils informatique fiable pour les documents nécessaires à la pratique de l’IVG.
              </p>
              <p>
              Dans le cadre de l’Etat d’urgence sanitaire, La consultation post-IVG peut être effectuée par téléconsultation selon les mêmes recommandations qu’en dehors de toute épidémie.
              </p>
              <p>
              Veuillez vous référer à la page dédiée Covid accessible à partir de la page d’accueil pour plus d’information.
              </p>
            </div>
          )
        };

        const [ covidTxt, setCovidTxt] = useState(()=>ouiCovid());


        const [ currentOuiCovid, setCurrentOuiCovid] = useState("");


        const afficheCovid =() => {
          let affiche = covidTxt;
          setCurrentOuiCovid(affiche);
        }


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

            <h1>Consultation post-IVG Mineure :
            </h1> 
            








            <br></br>
            <div className="ConsultationContainer">
            <p>Consultation faite par téléconsultation :</p>
            <Button  className={btnOuiViolenceBase}  variant="danger" onClick={(e)=>{recupReco(e);
            afficheCovid();
            changeCouleurBoutonViolence(e);}}>Oui</Button>
            <br></br>



    <div>{currentOuiCovid}</div>

            <br></br>




            </div>


            <div className={backgroundBaseAcc}>
            <h2>Personne accompagnante majeure ou consentement parental obligatoire : </h2>
           
            <Form>
      <div key={`acc-radio`} className="mb-3" onChange={(e)=>{recupRadioAcc(e);}}>
      <Form.Check 
        type='radio'
        id={`accOui`}
        label={`Oui`}
        value="Oui"
        name="accompagant"
      />

<Form.Check 
        type='radio'
        id={`accNon`}
        label={`Non`}
        value="Non"
        name="accompagant"
        onClick={handleChangeVerrou}
      />
      </div>
      </Form>
      <p><a className="NewDocContainer"  href={AccordMaj} target="_blank">
      <input
        className="iconPDFNew"
        type="image"
        src={newPdfIcon}
      />
        Fiche accord référant
      </a>
        
        
        
        
        
        
          </p>


            <input
        onClick={changementCouleurSVGAcc}
        className="Lampe"
        type="image"
        src={logoAfficheAcc}
      />
      <div>{currentInfoAcc}</div>
            </div>

            <div className={backgroundBaseDosageUri}>
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
<Button className={btnOuiViolenceBase}  variant="danger" onClick={(e)=>{
            recupResultat(e);
            changeCouleurBoutonViolence(e);}}
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
            </div>
      <div className={backgroundBaseContra}>
      <h2>Contraception choisie par la patiente :</h2>
      <Form>
      <div key={`contracep-radio`} className="mb-3" onChange={(e)=>{recupRadioContraception(e);}}>
      <Form.Check 
        type='radio'
        id={`contracepOui`}
        label={`Oui`}
        value="Oui"
        name="contraception"
        onClick={()=>{
          affichageTxtTypeContra();}}
      />

<Form.Check 
        type='radio'
        id={`contracepNon`}
        label={`Non`}
        value="Non"
        name="contraception"
        onClick={()=>{
          setCurrentTxtTypeContra("");
        }}
        
      />

      </div>
      </Form>
            <div>{currentTxtTypeContra}</div>
            <input
        onClick={changementCouleurSVGContra}
        className="Lampe"
        type="image"
        src={logoAfficheContra}
      />
      <div className="ContainerBulle">{currentInfoContra}</div>
      </div>

      <div className={backgroundBaseAdhesion}>
      <h2>Adhésion à cette contraception :</h2>
      <Form>
      <div key={`adhesion-radio`} className="mb-3" onChange={()=>{
        setBackgroundBaseAdhesion(backgroundSelect);
      }}>
      <Form.Check 
        type='radio'
        id={`adhesionOui`}
        label={`Oui`}
        value="Oui"
        name="adhesion"
      
      />

<Form.Check 
        type='radio'
        id={`adhesionNon`}
        label={`Non`}
        value="Non"
        name="adhesion"
        
      />

      </div>
      </Form>
      </div>


      <div className={backgroundBaseIST}>
      <h2>Recherche IST +/- antibio-prophylaxie : </h2>
      <br></br>
      <Form>
      <div key={`Ist-radio`} className="mb-3" onChange={(e)=>{recupRadioIST(e);}}>
      <Form.Check 
        type='radio'
        id={`ISToui`}
        label={`Oui`}
        value="Oui"
        name="ISTantibio"
      />

<Form.Check 
        type='radio'
        id={`IstNon`}
        label={`Non`}
        value="Non"
        name="ISTantibio"
      />
      </div>
      </Form>
      <br></br>
      <input
        onClick={changementCouleurSVGIST}
        className="Lampe"
        type="image"
        src={logoAfficheIST}
      />
      <div className="ContainerBulle">  {currentInfoIST}</div>
      </div>

      

      
      <div className={backgroundBaseTabac}>
      <h2>Tabac :</h2>
      <br></br>
      <Form>
      <div key={`tabac-radio`} className="mb-3" onChange={(e)=>{recupRadioTabac(e);}}>
      <Form.Check 
        type='radio'
        id={`tabacOui`}
        label={`Oui`}
        value="Oui"
        name="Tabac"
      />

<Form.Check 
        type='radio'
        id={`tabacNon`}
        label={`Non`}
        value="Non"
        name="Tabac"
        
      />

      </div>
      </Form>


      <br></br>
      
      {/* <input type="text" nom="nbPAquet" id="nbPAquet" onChange={(e)=>{recupNombre(e);}}></input> */}
      <form  onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
            <input
                
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button  className={btnOuiViolenceBase} value={nouvelleRecherchePaquet} variant="danger" onClick={(e)=> {
              handleSubmitPaquet(e);
              changeCouleurBoutonViolence(e);
            }}>Confirmer</Button>
        </form>
        <input
        onClick={changementCouleurSVGTabac}
        className="Lampe"
        type="image"
        src={logoAfficheTabac}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoTabac}</div>
      </div>

        <div className={backgroundBaseVecu}>
        <h2>Vécu de l’IVG traumatique :</h2>
        <Form>
      <div key={`Vecu-radio`} className="mb-3" onChange={(e)=>{recupRadioVecu(e);}}>
      <Form.Check 
        type='radio'
        id={`Vecuoui`}
        label={`Oui`}
        value="Oui"
        name="vecuTrau"
      />

<Form.Check 
        type='radio'
        id={`VecuNon`}
        label={`Non`}
        value="Non"
        name="VecuTrau"
      />
      </div>
      </Form>

      <input
        onClick={changementCouleurSVGVecu}
        className="Lampe"
        type="image"
        src={logoAfficheVecu}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoVecu}</div>
        </div>


      <div className={backgroundBaseAvis}>
      <h2>Nécessité d’une échographie de contrôle et /ou un avis spécialisé au centre de référence :</h2>
      <Form>
      <div key={`Control-radio`} className="mb-3" onChange={(e)=>{recupRadioControl(e);}}>
      <Form.Check 
        type='radio'
        id={`Controloui`}
        label={`Oui`}
        value="Oui"
        name="Control"
        onClick={(e)=>{
          
          afficheCause();}}
      />

<Form.Check 
        type='radio'
        id={`ControlNon`}
        label={`Non`}
        value="Non"
        name="Control"
        onClick={()=>{
          setCurrentOui("");
        }}
      />
      </div>
      </Form>
     
     
     
     
     
     
     
        <div>{currentOui}</div>
        <input
        onClick={changementCouleurSVGAvis}
        className="Lampe"
        type="image"
        src={logoAfficheAvis}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoAvis}</div>
      </div>
      <p>
            <a className="Bold" target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">Lien protocole HAS</a>

            </p>
      <br></br>

            
      <Button className={btnOuiViolenceBase} onClick={(e)=>{afficheStateFin();
      changeCouleurBoutonViolence(e);}} variant="danger">Valider mes choix</Button>
        <br></br>
        <div>{currentReponseTarif}</div>


      


        
        
















           


        </div>
    )


}



export default PostIVGMineur;