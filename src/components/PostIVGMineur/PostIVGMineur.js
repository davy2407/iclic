import React, { useState } from "react";

import { Button } from "react-bootstrap";

import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";
import GuideCNGOF from "@assets/pdf/CNGOFinfoPatient.pdf";
import ContraceptionHAS from "@assets/pdf/ContraceptionPostIVGHAS.pdf"



import "./PostIVGMineur.css";


function PostIVGMineur(props) {


    const [globalStateFin, setGlobalStateFin] = useState([]);


    //// Bloc Dosage
    const [nouvelleRechercheBHCGInitial, setNouvelleRechercheBHCGInitial] = useState(0)
          ///////// dosage initial BHCG

  const handleChangeBHCGInitial = event => {
    setNouvelleRechercheBHCGInitial(event.currentTarget.value);
  };



              ////////// dosage jour BHCG
              const [nouvelleRechercheBHCGJour, setNouvelleRechercheBHCGJour] = useState(0)

              const handleChangeBHCGJour = event => {
                setNouvelleRechercheBHCGJour(event.currentTarget.value);
              };
            



        ////// resultat


        const afficheResultat = (initial,jour) => {
            let dosageIni = initial;
            let dosageJour = jour;
            let resultat =( ( ( dosageJour - dosageIni ) / dosageIni ) * 100 ) ;
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
              <div>
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

        const returnInfoContraception = () => {
            return (
              <div>
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
                  constatée ou si le dosage de -HCG est négatif. En cas de doute,
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

        const returnInfoIST = () => {
            return (
              <div>
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
        const returnInfoFrotti = () => {
            return (
              <div>
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
              titre: "Tabac",
              value: e.target.value,
            };
            let liste = [...globalStateFin];
            liste.push(reponse);
            setGlobalStateFin(liste);
          
            console.log("Fumeuse : " + reponse.value);
          };
        
          
        
          
          
          const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState(0)
         
        
          const handleChangePaquet = event => {
            setNouvelleRecherchePaquet(event.currentTarget.value);
          };
        const handleSubmitPaquet = event => {
          event.preventDefault();
          let reponse = {
            titre : "Nombre Paquet : ",
            value : event.currentTarget.value
          };
          let liste = [...globalStateFin];
            liste.push(reponse);
            setGlobalStateFin(liste);
           
        
            console.log("nb paquet : "+reponse.value);
            
          
        
          
          
          
        };



        /////////////////// bloc Vécu de l’IVG traumatique :
        const returnInfoVecu = () => {
            return (
              <div>
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

        const oui = () => {
            return (
                <div>
                    <input type="text" placeholder="cause">

                    </input>
                </div>
            )
        }

        const [afficheOUi, setAfficheOUI] = useState(()=>oui());

        const [currentOui, setCurrentOui] = useState("");

        const afficheCause = () => {
            let txtAEnlever = currentOui;
            let txtAAfficher = afficheOUi;
            setCurrentOui(txtAAfficher);
            setAfficheOUI(txtAEnlever);

        }


        const returnInfoAvis = () => {
            return (
              <div>
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
                  <a target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">
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
    
    
    
    return (
        <div>

            <h1>Consultation post IVG : 
Mineure Non Anonyme/Anonyme :
            </h1>
            <p>
            Cette consultation intervient 14 à 21 jours après la prise médicamenteuse. 
Elle est indispensable selon la    <a target="_blank" href="https://www.has-sante.fr/jcms/c_2857715/fr/ivg-medicamenteuse-les-protocoles-a-respecter">  HAS</a>

 .
 D’autres modalités,
 plus flexible et mieux adaptées aux conditions de vie de chacune sont envisageables
  pour s’en assurer (autotest, télémédecine), elle doit être systématiquement proposée
   selon le             <a target="_blank" href="https://ansfl.org/document/cngof-2016-livg-medicamenteuse/">Lien recommandation CNGOF</a>
.

            </p>
            <p>
            Dans le cas particulier de l’IVG, l’article<a target="_blank" href="https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/article/premier-preservatif-rembourse-par-l-assurance-maladie"></a> L. 2212-7  du code de
             la santé publique dispose : « Si la femme est mineure non émancipée,
              le consentement de l’un des titulaires de l’autorité parentale ou,
               le cas échéant, du représentant légal est recueilli. Ce consentement
                est joint à la demande qu’elle présente au médecin en dehors de la
                 présence de toute autre personne.

            </p>
            <p>
            Si la femme mineure non émancipée désire garder le secret, le médecin doit
             s’efforcer, dans l’intérêt de celle-ci, d’obtenir son consentement
              pour que le ou les titulaires de l’autorité parentale ou, le cas
               échéant, le représentant légal soient consultés ou doit vérifier
                que cette démarche a été faite lors de l’entretien mentionné à
                 l’article L 2212-4. Si la mineure ne veut pas effectuer cette
                  démarche, ou si le consentement n’est pas obtenu, l’interruption
                   volontaire de grossesse ainsi que les actes médicaux et les
                    soins qui lui sont liés peuvent être pratiqués à la demande
                     de l’intéressée, présentée dans les conditions prévues au
                      1er alinéa. Dans ce cas, la mineure se fait accompagner
                       dans sa démarche par la personne majeure de son choix. 
            </p>
            <p>
            Une jeune fille mineure non émancipée doit donner au médecin son consentement
             pour avorter sans que ses parents, son tuteur ou toute autre personne ne
              soient présents afin qu'elle n'agisse pas sous la contrainte.
            </p>








            <br></br>
            <p>Consultation faite dans le cadre des dispositions du Covid valable jusqu’au 31 octobre 2020 :</p>
            <Button variant="secondary">Oui</Button>
            <br></br>



            <h2>Covid et IVG :</h2>
            <p>
            Dans le cadre du Covid, cette consultation doit être faite par
             téléconsultation. Sa facturation est facturée de la même manière
              qu’en présentiel. 
              

            </p>
            {/* lien a finir  */}


            <h2>Personne accompagnante majeure ou consentement parental </h2>
            <Button variant="secondary" value="Oui">Oui</Button>
            <Button variant="secondary" value="Non">Non</Button>

            <h2>Dosage : </h2>

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
        {afficheResultat(nouvelleRechercheBHCGInitial,nouvelleRechercheBHCGJour)}
        <input
        onClick={changementCouleurSVGDosage}
        className="Lampe"
        type="image"
        src={logoAfficheDosage}
      />
      <div>{currentInfoDosage}</div>
      <h2>Contraception choisie par la patiente :</h2>
      <Button variant="secondary" value="Oui">Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>

      <h2>Adhésion à cette contraception :</h2>
      <Button variant="secondary" value="Oui">Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>
      <input
        onClick={changementCouleurSVGContraception}
        className="Lampe"
        type="image"
        src={logoAfficheContraception}
      />
      <div>{currentInfoContraception}</div>


      <h2>Recherche IST +/- antibio-prophylaxie : </h2>

      <Button variant="secondary" value="Oui">Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>


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

      <h2>Frottis à jour</h2>
      <Button variant="secondary" value="Oui">Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>
      <Button variant="secondary" value="Non concernée">Non concernée</Button>
      <input
        type="date"
        name="dateFrotti"
        id="dateFrotti"
        
      ></input>
      <input
        onClick={changementCouleurSVGFrotti}
        className="Lampe"
        type="image"
        src={logoAfficheFrotti}
      />
      <br></br>
      <div>{currentInfoFrotti}</div>


      
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

        <h2>Vécu de l’IVG traumatique :</h2>
        <Button variant="secondary" value="Oui">Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>
      <input
        onClick={changementCouleurSVGVecu}
        className="Lampe"
        type="image"
        src={logoAfficheVecu}
      />
      <br></br>
      <div>{currentInfoVecu}</div>


      <h2>Nécessité d’une échographie de contrôle et /ou un avis spécialisé au centre de référence :</h2>
      <Button variant="secondary" value="Oui" onClick={afficheCause}>Oui</Button>
      <Button variant="secondary" value="Non">Non</Button>
        <div>{currentOui}</div>
        <input
        onClick={changementCouleurSVGAvis}
        className="Lampe"
        type="image"
        src={logoAfficheAvis}
      />
      <br></br>
      <div>{currentInfoAvis}</div>

      <br></br>

            
        <Button variant="danger">Valider mes choix</Button>
        <br></br>
        <Button variant="danger">Tarification</Button>



      


        
        
















           


        </div>
    )


}



export default PostIVGMineur;