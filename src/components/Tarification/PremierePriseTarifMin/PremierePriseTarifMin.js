import React , {useState,useEffect,useRef} from "react";
import { Button } from "react-bootstrap";
import FicheDeuxPages from "@components/FichesLiaisons/FicheDeuxPages";
import { useReactToPrint } from 'react-to-print';
import FicheHAS from "@assets/pdf/FicheDeLiaisonHAS.pdf";
import InfoPatiente from "@assets/pdf/FicheInfoPatiente.pdf";
import FicheConseilSurveillance from "@assets/pdf/FicheConseilSurveillance.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";






import "./PremierePriseTarifMin.css";


function PremierePriseTarifMin(props) {


  useEffect(() => {
    window.scrollTo(0,0);
 }, [])
  /// test impression
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

 
  const [ classIcon, setClassIcon] = useState("iconPDFNew");

const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");

const [ iconConsen, setIconConsen] = useState(classIcon);


  return (
      <div  
            
            className="Consultation">

<h1>Fin de consultation</h1>


<h2>Tarification et conclusion de consultation</h2>
      <br></br>
      
      <p>
      La consultation de 1ere prise médicamenteuse est tarifée dans le tarif forfaitaire à l’IVG hors établissement de santé.
      </p>
      <p>
      
       Elle doit être cotée avec l’index FHV + FMV (50 + 87,92 euros).
       <br></br>
  
       </p>
       <p>
       
       
       Cette cotation inclut l’éventuelle consultation facultative de 2ème prise médicamenteuse.  
      </p>

      <p>
      Sa tarification peut être faite électroniquement ou par format papier.  
      <br></br>Dans le cas du protocole entre 7 et 9 SA, il n’existe pas, pour le moment, de cotation spécifique pouvant inclure un remboursement du misoprostol supplémentaire. 
Une ordonnance peut être faite à la patiente afin de récupérer le traitement directement à la pharmacie. Merci de vous référer à l’onglet Actualité pour plus d’information.


      </p>
      <p> 
Pour rappel, cette consultation est prise en charge à 100% avec exonération du ticket modérateur pour toutes les femmes.
      </p>
     


      <p>
      Par ailleurs, comme c’est le cas aujourd’hui, la jeune femme mineure bénéficie des conditions de facturation anonymes aux caisses de sécurité sociale (<a target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">article D. 132-3</a> du Code de la sécurité). 
      </p>
      <p>
      Les dispositions de la circulaire Cnam-TS 49/2003 du 24 mars 2003 s’appliquent : le médecin de ville ou la sage-femme utilise une feuille de soins papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030). La facturation électronique est exclue dans ce seul cas de figure.
      </p>

     
      

     <br></br>
     <br></br>
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a className="Bold" rel="noreferrer noopener"
        href="https://questionsexualite.fr/choisir-sa-contraception/l-interruption-volontaire-de-grossesse/quelle-contraception-choisir-apres-une-ivg"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>
      <br></br>
      <br></br>

      
  

      <a className="NewDocContainer" rel="noreferrer noopener"  href={FicheConseilSurveillance} target="_blank">
      <input
        alt="Image document fiche conseil"
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
  Fiche information et conseil de surveillance à télécharger
      </a> 

      <a className="NewDocContainer" rel="noreferrer noopener"  href={InfoPatiente} target="_blank">
      <input
        alt="Image document consentement"
        className={iconConsen}
        onMouseEnter={()=>{
          setIconConsen(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setIconConsen(classIcon);
        }}
        type="image"
        src={newPdfIcon}
      />
        Fiche info patient traitement
      </a>
        
        <div style={{display:'none'}}>
        <FicheDeuxPages ref={componentRef} titre={props.onTestTitre} data={props.onElDoubleTarif}/>

        </div>
      <Button variant="danger" onClick={handlePrint}>Imprimer résumé de consultation/fiche de liaison</Button>
      <br></br>

      <p>
    Il est <span className="Bold Red">obligatoire</span> de transmettre la fiche de liaison selon des modalités de
     transmission préétabli avec votre centre de référence afin de suivre les règles
      préconisées par la Commission Nationale de l’Informatique et des Libertés (CNIL). 
    <span className="Red">Un exemplaire doit être remis à la patiente</span>. 
    </p>
    <p>
    Toute mineure depuis le 1er janvier 2020 peut bénéficier d'une contraception gratuite. Quel que soit son âge, elle bénéficie d'une prise en charge complète par l'Assurance Maladie et sans avance de frais.
    </p>
    <p> 
    <a className="Bold" target="_blank" rel="noreferrer noopener" href="https://www.legifrance.gouv.fr/affichJO.do?idJO=JORFCONT000042266235">
    Journal officiel contraception mineure de moins de 15 ans.
    </a>
    </p>
    <p>
    Pour rappel toute femme mineure peut obtenir du médecin ou de la sage-femme la prescription d’un moyen contraceptif sans autorisation parentale. Le parcours contraceptif est prise en charge à 100% par l’assurance maladie et est protégé par le secret si la jeune femme mineure le demande. 
    </p>
    <ul>
    Le parcours comprend : 
        <li>
          
            Une consultation annuelle au cours de laquelle sont prescrits des examens de biologie médicale en vue d’une contraception
           
        </li>
        <li>
           
            Une consultation de suivi, la première année d’accès à la contraception         
        </li>
        <li>
           
            Les actes liés à la pose, au changement ou au retrait d’un dispositif contraceptif
                
            
        </li>
        <li>
            
            Certains examens de biologie médicale (glycémie à jeun, cholestérol total, triglycérides) une fois par an si nécessaire
                
          
        </li>
        <li>
            
            Les contraceptifs remboursables.
                
          
        </li>
    </ul>
    <p>
    Une consultation dédiée de première consultation de contraception et de prévention des maladies sexuellement transmissibles pour les jeunes filles de 15 à 18 ans. Elle est applicable depuis le 1er novembre 2017 pour les médecins de spécialité médecine générale ou gynécologie. Elle est cotée selon le code CCP avec prise en charge à 100% (46 euros). Elle ne peut pas s’additionner au forfait IVG.
    </p>
    <a className="Bold" target="_blank" href={FicheHAS}> Fiche de liaison « type » HAS.    
</a>
      </div>
    
  );


 
}

export default PremierePriseTarifMin;