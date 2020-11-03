import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf"



import "./PostIVGMineur.css";


function PostIVGMineur(props) {

  const afficheStateFin = () => {
    console.log("state de fin va suivre");
    let liste = [];
    liste.push(currentReco);
    liste.push(currentAcc)
    liste.push(currentResultat);
    liste.push(currentTestUri);
    liste.push(currentPosNe);
    liste.push(currentContra);
    liste.push(currentIST);
    // liste.push(currentHPV);
    // liste.push(currentDateHPV);
    liste.push(currentTabac);
    liste.push(currentNbTabac);
    liste.push(currentVecu);
    liste.push(currentAvis);
    liste.push(currentCause);
   
    for (let index = 0; index < liste.length; index++) {
      if (liste[index].titre=="Pas de réponses") {
        alert("Vous n'avez pas répondu à toutes les questions")
        
      }
      else  {
        console.log("OK");
      }
      
    }


    props.onRecup(liste);
  };


    

    /// current state

    const [currentReco, setCurrentReco] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentAcc, setCurrentAcc] = useState({
      titre : "Pas de réponses",
      value : ""
    });


    

    const [currentResultat, setCurrentResultat] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentContra, setCurrentContra] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentIST, setCurrentIST] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentHPV, setCurrentHPV] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentDateHPV, setCurrentDateHPV] = useState({
      titre : "",
      value : ""
    });

    const [currentTabac, setCurrentTabac] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentNbTabac, setCurrentNbTabac] = useState({
      titre : "",
      value : ""
    });

    const [currentVecu, setCurrentVecu] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentAvis, setCurrentAvis] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentCause, setCurrentCause] = useState({
      titre : "",
      value : ""
    });

    const [currentTestUri, setCurrentTestUri] = useState({
      titre : "Pas de réponses",
      value : ""
    });

    const [currentPosNe, setCurrentPosNe] = useState({
      titre : "",
      value : ""
    });


    const [globalStateFin, setGlobalStateFin] = useState([]);

    /////////// reco 
    const recupReco = (e) => {
      e.preventDefault();
      let reponse = {
        titre: "Téléconsultation (selon recommandation applicable jusqu’au 31 octobre 2020) : ",
        value: e.target.value,
      };
      setCurrentReco(reponse);
    
      console.log("Téléconsultation (selon recommandation applicable jusqu’au 31 octobre 2020) : " + reponse.value);
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
            value : e.target.value+"%"
          };
  setCurrentResultat(reponse);

  console.log("Résultat décroissance dosage sanguin BHCG :  " + reponse.value);

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

            return (
                <div>
                <p>{resultat} %</p>
                <br></br>
                <p className="Red">{txt}</p>
                </div>
            )
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
                <a target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">
                 Lien HAS recommandation : 
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



        ///////////////////////////////////////////////////////////////

        //////// Bloc Adhésion à cette contraception :

        const recupContra = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Contraception choisie par la patiente : ",
            value: e.target.value,
          };
          
          setCurrentContra(reponse);
          
          console.log("Contraception choisie par la patiente : " + reponse.value);
        };

        const returnInfoContraception = () => {
            return (
              <div className="BulleInfo">
                <p className="Red">
                la reprise de la fertilité après une IVG est immédiate :
                 une contraception efficace est donc indispensable dès la réalisation
                  de l’IVG.
                </p>
                <p>
                Rappel : le préservatif (masculin, féminin) représente la seule méthode
                 de contraception efficace contre les IST. Le préservatif est remboursé
                  par l’assurance maladie à compter du 10 décembre 2018 sur prescription
                   par un médecin ou une sage-femme. 
                   <a target="_blank" href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie ">
                    Lien remboursement préservatif
                   </a>
            La pilule peut être commencée au moment de la 1ère prise médicamenteuse ou le lendemain. 
                </p>
                <p>
                Les DIU peuvent être mise en place lors de la visite de contrôle après
                 une IVG médicamenteuse si la vacuité utérine à l’échographie est
                  constatée ou si le dosage de B-HCG est négatif. En cas de doute,
                   le DIU est posé lors des règles suivantes 
                   (avec une autre contraception dans l’intervalle).
                   <a target="_blank" href={ContraceptionHAS}>
                       Lien info Contraception HAS
                   </a>
                </p>




                
              </div>
            );
          };
        
          const [txtContraception, setTxtContraception] = useState(() => returnInfoContraception());
        
          const [currentInfoContraception, setCurrentInfoContraception] = useState("");
        
          const affichageTxtContraception = () => {
            let txtAEnlever = currentInfoContraception;
            let txtAAfficher = txtContraception;
            setCurrentInfoContraception(txtAAfficher);
            setTxtContraception(txtAEnlever);
          };
        
          const [logoAfficheContraception, setLogoAfficheContraception] = useState(LightOff);
        
          const [logoNonAfficheContraception, setLogoNonAfficheContraception] = useState(LightOn);
        
          const changementCouleurSVGContraception = () => {
            let currentLampe = logoAfficheContraception;
            let currentCache = logoNonAfficheContraception;
            setLogoNonAfficheContraception(currentLampe);
            setLogoAfficheContraception(currentCache);
            affichageTxtContraception();
          };






        ////////////////////////////////////////////////////////////////////////



        

        



        ////////////////////// Bloc IST

        const recupIST = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Recherche IST : ",
            value: e.target.value,
          };
          
          setCurrentIST(reponse);
          
          console.log("Recherche IST : " + reponse.value);
        };

        const returnInfoIST = () => {
            return (
              <div className="BulleInfo">
                <p >
                La HAS recommande un dépistage opportuniste ciblé à toutes les femmes
                 enceintes consultant pour une IVG, sans limite d’âge. 
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


        //////////Bloc frotti

        const recupHPV = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Frottis à jour (ou test HPV) : ",
            value: e.target.value,
          };
          
          setCurrentHPV(reponse);
          
          console.log("Frottis à jour (ou test HPV) : " + reponse.value);
        };


        const handleChange = (e) => {
          /// recup date frotti
          
          
          
          let reponse = {
            titre: "Date Frotti : ",
            value: e.target.value,
          };
         setCurrentDateHPV(reponse);
      
          console.log("date frotti : " + reponse.value);
          
        };
        const returnInfoFrotti = () => {
            return (
              <div className="BulleInfo">
                <p>
                   Le plan de dépistage national s’applique, pour toute femme
                  immunocompétente de 25 à 65 ans.
                </p>
                <a href="https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage">
                  https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/frottis-depistage
                </a>
              </div>
            );
          };
        
          const [txtFrotti, setTxtFrotti] = useState(() => returnInfoFrotti());
        
          const [currentInfoFrotti, setCurrentInfoFrotti] = useState("");
        
          const affichageTxtFrotti = () => {
            let txtAEnlever = currentInfoFrotti;
            let txtAAfficher = txtFrotti;
            setCurrentInfoFrotti(txtAAfficher);
            setTxtFrotti(txtAEnlever);
          };
        
          const [logoAfficheFrotti, setLogoAfficheFrotti] = useState(LightOff);
        
          const [logoNonAfficheFrotti, setLogoNonAfficheFrotti] = useState(LightOn);
        
          const changementCouleurSVGFrotti = () => {
            let currentLampe = logoAfficheFrotti;
            let currentCache = logoNonAfficheFrotti;
            setLogoNonAfficheFrotti(currentLampe);
            setLogoAfficheFrotti(currentCache);
            affichageTxtFrotti();
          };
        //////////////////////////////////////////////////////////////////////////////



        //////////////////// tabac

        const recupTabac = (e) => {
            e.preventDefault();
            let reponse = {
              titre: "Tabac : ",
              value: e.target.value,
            };
            setCurrentTabac(reponse);
          
            console.log("Fumeuse : " + reponse.value);
          };
        
          
        
          
          
          const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState(0)
         
        
          const handleChangePaquet = event => {
            setNouvelleRecherchePaquet(event.currentTarget.value);
          };
        const handleSubmitPaquet = event => {
          event.preventDefault();
          let reponse = {
            titre : "Paquets/Années : ",
            value : event.currentTarget.value
          };
          setCurrentNbTabac(reponse)
           
        
            console.log("nb paquet : "+reponse.value);
            
          
        
          
          
          
        };



        /////////////////// bloc Vécu de l’IVG traumatique :

        const recupVecu = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Vécu de l’IVG traumatique : ",
            value: e.target.value,
          };
          setCurrentVecu(reponse);
        
          console.log("Vécu de l’IVG traumatique : " + reponse.value);
        };
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

        const recupAvis = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Nécessité d’ne échographie de contrôle et/ou un avis spécialisé au centre de référence : ",
            value: e.target.value,
          };
          setCurrentAvis(reponse);
        
          console.log("Nécessité d’ne échographie de contrôle et/ou un avis spécialisé au centre de référence : " + reponse.value);
        };

       
         
        
        const handleTypeCause = (e) => {
          
         
          
          
          let reponse = {
            titre: "Si oui cause : ",
            value: e.target.value,
          };
         setCurrentCause(reponse);
        
          console.log("Si oui cause : " + reponse.value);
          
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
                 Une échographie de contrôle ou un avis spécialisé peut être demandée devant :
                </p>
                <ol>
                    <li> Un échec après analyse de la décroissance du taux de BHCG. </li>
                    <li> Des saignements abondant (sans signes cliniques d’anémie ou facteurs de risques/comorbidité).</li>
                    <li>Une fièvre pouvant être le signe d’une infection post-IVG médicamenteuse.</li>
                    <li>Des douleurs ne s’atténuant pas par la prise de médicaments.</li>
                </ol>
                <p>
                Il est à noter que des patientes présentant des saignements abondants
                 avec signes cliniques d’anémie peuvent être adresser au service
                  d’urgence spécialisé du centre de référence
                  <a rel="noopener noreferrer" target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">
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

        const recupAcc = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "Personne accompagnante majeure ou consentement parental : ",
            value: e.target.value,
          };
          setCurrentAcc(reponse);
        
          console.log("Personne accompagnante majeure ou consentement parental : " + reponse.value);
        };

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
          };
          setCurrentTestUri(reponse);
        
          console.log("Utilisation d’un autotest urinaire : " + reponse.value);

        }

        const recupPosNe = (e) => {
          e.preventDefault();
          let reponse = {
            titre: "résultat autotest urinaire : ",
            value: e.target.value,
          };
          setCurrentPosNe(reponse);
        
          console.log("résultat autotest urinaire : " + reponse.value);

        }
        const ouiUri = () => {
          return (
            <div>
              <h4> résultat :</h4>

<Button variant="secondary" value="Positif" onClick={(e)=>{recupPosNe(e)}}>Positif</Button>
      <Button variant="secondary" value="Négatif" onClick={(e)=>{recupPosNe(e)}}>Négatif</Button>
            
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
              <h2>Covid et IVG :</h2>
            <p>
            Dans le cadre du Covid, cette consultation doit être faite par
             téléconsultation. Sa facturation est facturée de la même manière
              qu’en présentiel. 
              

            
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


    
    
    
    return (
        <div className="consultationContainer">

            <h1>Consultation post IVG :  
Mineure Non Anonyme/Anonyme :
            </h1>
            








            <br></br>
            <div className="ConsultationContainer">
            <p>Consultation faite dans le cadre des dispositions du Covid valable jusqu’au 31 octobre 2020 :</p>
            <Button variant="secondary" value="Oui" onClick={(e)=>{recupReco(e);
            afficheCovid();}}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={(e)=>{recupReco(e);}}>Non</Button>
            <br></br>



    <div>{currentOuiCovid}</div>
            </div>


            <div className="ConsultationContainer">
            <h2>Personne accompagnante majeure ou consentement parental </h2>
            <Button variant="secondary" value="Oui" onClick={(e)=>{recupAcc(e);}}>Oui</Button>
            <Button variant="secondary" value="Non" onClick={(e)=>{recupAcc(e);}}>Non</Button>
            <input
        onClick={changementCouleurSVGAcc}
        className="Lampe"
        type="image"
        src={logoAfficheAcc}
      />
      <div>{currentInfoAcc}</div>
            </div>

            <div className="ConsultationContainer">
            <h2>Dosage B-HCG : </h2>

<form >
<input
    value={nouvelleRechercheBHCGInitial}
    onChange={handleChangeBHCGInitial}
    type="text"
    placeholder="Dosage initial BHCG"
/>

</form>

<form >
<input
    value={nouvelleRechercheBHCGJour}
    onChange={handleChangeBHCGJour}
    type="text"
    placeholder="Dosage jour BHCG"
/>

</form>
<Button variant="danger" value={ResultatFi(nouvelleRechercheBHCGInitial,nouvelleRechercheBHCGJour)} onClick={(e)=>{recupResultat(e)}}>Valider</Button>
{afficheResultat(nouvelleRechercheBHCGInitial,nouvelleRechercheBHCGJour)}




<h3>Utilisation d’un autotest urinaire :</h3>
<Button variant="secondary" value="Oui" onClick={(e)=>{
recupTestUri(e);
afficheUrinaire();
}}>Oui</Button>
<Button variant="secondary" value="Non" onClick={(e)=>{recupTestUri(e);}}>Non</Button>
<div>{currentOuiUri}</div>



<input
onClick={changementCouleurSVGDosage}
className="Lampe"
type="image"
src={logoAfficheDosage}
/>
<div>{currentInfoDosage}</div>
            </div>
      <div className="ConsultationContainer">
      <h2>Contraception choisie par la patiente :</h2>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupContra(e);}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupContra(e);}}>Non</Button>
      <input
        onClick={changementCouleurSVGContraception}
        className="Lampe"
        type="image"
        src={logoAfficheContraception}
      />
      <div>{currentInfoContraception}</div>
      </div>

      <div className="ConsultationContainer">
      <h2>Adhésion à cette contraception :</h2>
      <Button variant="secondary" value="Oui">Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>
      
      </div>


      <div className="ConsultationContainer">
      <h2>Recherche IST +/- antibio-prophylaxie : </h2>

<Button variant="secondary" value="Oui" onClick={(e)=>{recupIST(e)}}>Oui</Button>
<Button variant="secondary" value="Non" onClick={(e)=>{recupIST(e)}}>Non</Button>


<p>
De nombreuses sources numériques existent pour l’information aux patient(es)
 des IST ainsi que de ces risques
  <a target="_blank" href="http://www.info-ist.fr/index.html">
   Lien ISt-info
  </a>
  <a target="_blank" href="https://www.ameli.fr/assure/sante/themes/mst/ist/maladies-infections-sexuellement-transmissibles">
  Lien Ameli IST
  </a>
   En cliquant ici,
  ces sites apparaitront sur le résumé de la consultation, à remettre en main
   propre de la patiente. 
</p>
<Button variant="secondary" value="Oui">Oui</Button>
<input
  onClick={changementCouleurSVGIST}
  className="Lampe"
  type="image"
  src={logoAfficheIST}
/>
<div>{currentInfoIST}</div>
      </div>

      {/* <div className="ConsultationContainer">
      <h2>Frottis à jour</h2>
      <Button variant="secondary" value="Oui" onClick={(e)=>{recupHPV(e);}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupHPV(e);}}>Non</Button>
      <Button variant="secondary" value="Non concernée" onClick={(e)=>{recupHPV(e);}}>Non concernée</Button>
      <input
        type="date"
        name="dateFrotti"
        id="dateFrotti"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <br></br>
      <div>{currentInfoFrotti}</div>
      </div> */}


      
      <div className="ConsultationContainer">
      <h2>Tabac :</h2>
      <br></br>
      <label>
        <Button
          value="Oui"
          variant="secondary"
          onClick={(e) => {
            recupTabac(e);
          }}
        >
          Oui
        </Button>
        <Button
          value="Non"
          variant="secondary"
          onClick={(e) => {
            recupTabac(e);
          }}
        >
          Non
        </Button>
      </label>
      <br></br>
      
      {/* <input type="text" nom="nbPAquet" id="nbPAquet" onChange={(e)=>{recupNombre(e);}}></input> */}
      <form >
            <input
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button value={nouvelleRecherchePaquet} variant="secondary" onClick={(e)=> {
              handleSubmitPaquet(e)
            }}>Confirmer</Button>
        </form>
      </div>

        <div className="ConsultationContainer">
        <h2>Vécu de l’IVG traumatique :</h2>
        <Button variant="secondary" value="Oui" onClick={(e)=>{recupVecu(e)}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupVecu(e)}}>Non</Button>
      <input
        onClick={changementCouleurSVGVecu}
        className="Lampe"
        type="image"
        src={logoAfficheVecu}
      />
      <br></br>
      <div>{currentInfoVecu}</div>
        </div>


      <div className="ConsultationContainer">
      <h2>Nécessité d’une échographie de contrôle et /ou un avis spécialisé au centre de référence :</h2>
      <Button variant="secondary" value="Oui" onClick={(e)=>{
        recupAvis(e);
        afficheCause();}}>Oui</Button>
      <Button variant="secondary" value="Non" onClick={(e)=>{recupAvis(e);}}>Non</Button>
        <div>{currentOui}</div>
        <input
        onClick={changementCouleurSVGAvis}
        className="Lampe"
        type="image"
        src={logoAfficheAvis}
      />
      <br></br>
      <div>{currentInfoAvis}</div>
      </div>

      <br></br>

            
      <Button variant="danger" onClick={afficheStateFin}>Valider mes choix</Button>
        <br></br>
        <Button variant="danger" onClick={props.onSuite}>Tarification</Button>


      


        
        
















           


        </div>
    )


}



export default PostIVGMineur;