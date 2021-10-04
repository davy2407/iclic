import React , {useEffect} from "react";
import "./NonPro.css";



function NonPro() {
  useEffect(() => {
    window.scrollTo(0,300);
 }, [])

    return (
        <div className="TextStart">
            <h1>Vous n’êtes pas professionnel de santé :</h1>
        <p>
        Ce site est à destination des professionnels de santé uniquement. 
Des liens internet d’information sur les modalités d’accès à l’IVG ainsi que
 les structures médicales pouvant vous accueillir se trouvent sur cette page. 
        </p>
        <p>
        Si vous pensez avoir besoin d’un recours à une interruption volontaire de
         grossesse, un médecin généraliste, sage-femme ou tout autre professionnel de
          santé peut vous guider. Le planning familial le plus proche de chez vous
           peut vous renseigner et vous accompagner dans votre démarche.
        </p>
        <p>
        Un numéro vert gratuit est accessible 7j/7 24h/24 pour toute information au 0800 202 205.
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.ivglesadresses.org/">Liens ivglesadresses.org</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.ivginfo.com/">Liens ivginfo.com</a>
        </p>
        <p>
          <a rel="noreferrer noopener" target="_blank" href="http://www.avortementancic.net/IMG/pdf/guide_ivg_2017-2.pdf">Lien dossier guide ivg</a>
        </p>

        </div>
    )

}


export default NonPro;


