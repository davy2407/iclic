import React from "react";
import "./APropos.css";



function APropos() {

    return (
        <div className="consultationContainer">
            <h1>Projet IVGclic :</h1>
            <p>
            IVGclic est un outil d’aide numérique à la protocolisation
             de l’IVG médicamenteuse hors établissement à destination des
              professionnels de santé (médecin généraliste, sage-femme,
               médecin/chirurgien gynéco-obstétricien). 
La stratégie de prise en charge est établie sous forme d’arbres décisionnels,
 aidant le professionnel de santé tout au long des différentes consultations. 
Les références sont établies à partir des recommandations nationales et/ou de
 sociétés savantes, et en accord avec la juridiction française (Code de la Santé publique,
  Code de déontologie).
            </p>

            <p>
            Ce site propose une prise en charge homogène et reproductible dont
             la responsabilité ne se substitue pas à la prise de décision du
              professionnel de santé. 
Concernant les effets indésirables des traitements proposés, seuls les effets
 secondaires très fréquents (≥ 1/10) et fréquents (≥ 1/100,  1/10) ont été rapportés,
  des hyperliens renvoient l'utilisateur vers le
   site <a target="_blank" href="http://www.base-donnees-publique.medicaments.gouv.fr/index.php?menu=0">www.base-donnees-publique.medicaments.gouv.fr</a> afin d'accéder à la monographie
    complète du produit concerné.
            </p>
            <p>
            Un comité d’expert pour la relecture du site composé de médecin généraliste, sage-femme et de médecin/chirurgien gynéco-obstétriciens a été mise en place, il est composé de :
            </p>
            <ul>
                <li>Peggy Damioli, médecin spécialiste en médecine générale orthogéniste, Bihorel.</li>
                <li>Sylvie Pauthier, chirurgien spécialiste en  gyneco-obstetrique, Ch Belvedere.</li>
                <li>Sage-femme orthogéniste travaillant dans le secteur de Rouen souhaitant garder l’anonymat.</li>

            </ul>
            <br></br>
            <h2>Financement :</h2>
            <p>
            Aucun financement n’a été perçu de l’industrie pharmaceutique ou de laboratoire privé.
            </p>
            <h2>Liens d’intérêts :</h2>
            <p>
            aucun lien d’intérêt n’est à déclarer par le Dr LAINE Marianne ou Mr PUECH Lilian.
            </p>
            <h2>Confidentialité :</h2>
            <p>
            aucune donnée personnelle n’est enregistrée sur le site. 
            </p>
            <h2>Publicité :</h2>
            <p>
            le site n’accueille aucune forme de publicité.
            </p>

        </div>
    )

}


export default APropos;


