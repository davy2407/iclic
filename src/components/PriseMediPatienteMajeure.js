import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import LightOn from "../images/lightOn.svg";
import LightOff from "../images/lightOff.svg";
import GuideIVG from "./GuideIvgPatiente.pdf";
import './PriseMediPatienteMajeure.css';
import { Form } from "react-bootstrap";



function PriseMediPatienteMajeure(props) {

    
    const [saisieUtilisateurNbSemaineSA, setSaisieUtilisateurNbSemaineSA] = useState(0)

    const handleChange = event => {
        setSaisieUtilisateurNbSemaineSA(event.currentTarget.value);
    };

    const recupSaisieUtilisateurNbSemaine = event => {
        event.preventDefault();
        const nb = saisieUtilisateurNbSemaineSA;
        if (nb<7 ) {
            affichageMoinsDeSept();
            
        }

        
        
        setSaisieUtilisateurNbSemaineSA(0);
    };
    const moinsDeSeptSemaines = () => {
        return (
        <div>
            <p>IVG médicamenteuse et chirurgical possible</p>
         
        </div>
        )
            
        
    }
    const [ txtMoinsDeSeptSA, setTxtMoinsDeSeptSA] = useState(()=>moinsDeSeptSemaines()
           
        )

    const [currentInfoNbSAmoinsSept, setCurrentInfoNbSAmoinsSept] = useState(
        ""
    )

    const affichageMoinsDeSept = () => {
        let txtAEnlever = currentInfoNbSAmoinsSept;
            let txtAAfficher =txtMoinsDeSeptSA ;
            setCurrentInfoNbSAmoinsSept(txtAAfficher);
            setTxtMoinsDeSeptSA(txtAEnlever);
    }


    return (
        <div>
            <h1>Consultation IVG : 1ere prise médicamenteuse.
Patiente majeure NA</h1>

            <br></br>
            <label>
                Consultation faite dans le cadre des dispositions du Covid valable jusqu’au 31 octobre 2020 : oui/non
                Si oui :
                <Button variant="secondary">Oui</Button>
                <Button variant="secondary">Non</Button>
            </label>
            <br></br>
            <p>Covid et IVG :</p>
            <br></br>
            <p>
                Cette première consultation peut se faire sous formes de téléconsultation,
                il est nécessaire de se prémunir d’un outils informatique fiable afin de
                se faire parvenir les documents nécessaires à la pratique de l’IVG dans 
                le cadre réglementaire. 
            </p>
            <br></br>
            <p>
                Pour information, il n’est plus possible de pratiquer une IVG médicamenteuse en
                ville jusqu’à la fin de la 7eme semaine de grossesse (9SA), ce délai revenu à la
                 fin de la 5eme semaine de grossesse (7SA) depuis le 10 Juillet 2020 
                 <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000042106233&categorieLien=id" target ="_blank">
                     
                     Legifrance.gouv</a>.

                 <a href="https://www.ameli.fr/medecin/actualites/covid-19-fin-des-mesures-derogatoires-pour-livg-medicamenteuse" target ="_blank">

                    ameli.fr
                </a>
                <a href="https://syngof.fr/wp-content/uploads/2020/04/covid-19_-_medecins_-_ivg.pdf" target ="_blank">
                    syngof
                </a>
            </p>
            <br></br>
            <br></br>
            <h2>La patiente a en sa possession :</h2>
            <br></br>
            <h3>Échographie de datation :</h3>
            <br></br>
            <Button variant="secondary">Oui</Button>
            <Button variant="secondary">Non</Button>
            <br></br>
            <h3>Age gestationnel :</h3>
            <br></br>
            <input
                type="number"
                name="name"
                value={saisieUtilisateurNbSemaineSA}
                onChange={handleChange}
            />
            <Button variant="danger" onClick={recupSaisieUtilisateurNbSemaine}>Valider</Button>
            <br></br>
            <div>{currentInfoNbSAmoinsSept}</div>
        
        </div>
    )

}


export default PriseMediPatienteMajeure;