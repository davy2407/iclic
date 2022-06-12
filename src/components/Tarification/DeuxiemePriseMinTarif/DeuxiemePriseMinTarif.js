import React , {useState, useEffect,useRef} from "react";
import { Button} from "react-bootstrap";
import FicheUnePage from "@components/FichesLiaisons/FicheUnePage";
import { useReactToPrint } from 'react-to-print';
import FicheConseil from "@assets/pdf/FicheConseilSurveillance.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";
import InfoPatiente from "@assets/pdf/FicheInfoPatiente.pdf";




import "./DeuxiemePriseMinTarif.css";


function DeuxiemePriseMinTarif(props) {


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
      Le forfait a été enregistré lors de la 1ère consultation de prise médicamenteuse, il ne doit pas être renouvelé lors de cette consultation.       </p>
      
      <p>
      La consultation de 2ème prise médicamenteuse est facultative et peut être
       réalisée au choix du médecin ou de la patiente. Elle est tarifée dans
        le tarif forfaitaire à l’IVG hors établissement de santé. Elle doit être
         cotée avec l’index FHV + FMV (50 + 87,92 euros). 
Sa tarification peut être faite électroniquement ou par format papier.
<br></br>Dans le cas du protocole entre 7 et 9 SA, il n’existe pas, pour le moment, de cotation spécifique pouvant inclure un remboursement du misoprostol supplémentaire. 
Une ordonnance peut être faite à la patiente afin de récupérer le traitement directement à la pharmacie. Merci de vous référer à l’onglet Actualité pour plus d’information.

      </p>

      <p>
      Pour rappel, cette consultation est prise en charge à 100% avec exonération du ticket modérateur pour :
      </p>
      
     
      <ul>
          <li>
          Les jeunes filles mineures non émancipées sans consentement parental
          </li>
          
        <li>Les femmes bénéficiaires de la CMU complémentaire</li>
        <li>Les femmes bénéficiaires de l’Aide Médicale de l’État (AME).</li>
      </ul>

      <p>
      Par ailleurs, comme c’est le cas aujourd’hui, la jeune femme mineure
       bénéficie des conditions de facturation anonyme aux caisses
        de sécurité sociale, d’ores et déjà applicables,
         <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000006735222&cidTexte=LEGITEXT000006073189&dateTexte=20151016">(article D. 132-3 du Code de la sécurité  32)</a>

      </p>

      <p>
      Les dispositions de la circulaire Cnam-TS 49/2003 du 24 mars 2003 s’appliquent :
       le médecin de ville ou la sage-femme utilise une feuille de soins
        papier et doit indiquer un NIR spécifique (2 55 55 55 +code caisse +030).
         La facturation électronique est exclue dans ce seul cas de figure.
      </p>
      <br></br>
      <a className="NewDocContainer" rel="noreferrer noopener"  href={FicheConseil} target="_blank">
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
<br></br>

      
      <a className="Bold" rel="noreferrer noopener" href="https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf" target="_blank">
        https://ivg.gouv.fr/IMG/pdf/guide_ivg_2018.pdf
      </a>
      
      <a className="Bold" rel="noreferrer noopener"
        href="https://www.choisirsacontraception.fr/?gclid=CjwKCAjwiaX8BRBZEiwAQQxGx09bqLm7t5_O6Yi_5xe9ZEVR9ePUqUSpruG5nRH7BkxAGpo3Mxb5thoCP7EQAvD_BwE"
        target="_blank"
      >
        Lien choisirsacontraception.fr
      </a>

        
        <div style={{display:'none'}}>
        <FicheUnePage ref={componentRef} titre={props.onTestTitre} data={props.onElTarif}/>

        </div>
      <Button variant="danger" onClick={handlePrint}>Résumé consultation 2eme prise médicamenteuse</Button>
      <br></br>


      <p>
    Il est confraternel de faire suivre le résumé et de la remettre en main de la patiente.
    </p>
    <p>
    Pour rappel : il est utile de rappeler à la patiente l’obligation de la
     consultation de contrôle afin de vérifier avec le professionnel de santé
      de la bonne réussite de la méthode (J14-21).  
    </p>
    <p>
    La date de cette consultation
       est à remplir manuellement sur le résumé.
    </p>

    <p>
    Pour cela, assurez-vous que la patiente possède bien la prise de sang
     (ßHCG quantitatif) à effectuer pour la consultation de contrôle. 
     </p>
     <p>
    L’autotest urinaire peut également être utilisé pour juger le succès de l’IVG 
    médicamenteuse.

    </p>
    <p>
    
     Celui-ci peut être réalisé à domicile combiné à un suivi téléphonique.
</p>
<p>
    <a className="Bold" rel="noreferrer noopener" target="_blank" href="https://ansfl.org/document/cngof-2016-livg-medicamenteuse/">Lien recommandation CNGOF</a>



   
   
   
    </p>

      </div>
    
  );






  
 
}

export default DeuxiemePriseMinTarif;