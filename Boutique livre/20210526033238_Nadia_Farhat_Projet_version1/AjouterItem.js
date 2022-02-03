function ajouterItem(produit,quantite,prix){

    var nouvelleLigne="<tr>";
    nouvelleLigne += "<td>"+ produit + "</td>";
    nouvelleLigne += "<td>"+ quantite + "</td>";
    nouvelleLigne += "<td>"+ prix + "</td>";
    nouvelleLigne += "</tr>";

    var ancienContenu= document.getElementById("corpsTableau").innerHTML;
    let nouveauContenu= ancienContenu + nouvelleLigne;
    document.getElementById("corpsTableau").innerHTML = nouveauContenu;
    var nombreItemPanier = parseInt(document.getElementById("idItem").innerHTML);
    nombreItemPanier += parseInt(quantite);
    document.getElementById("idItem").innerHTML = nombreItemPanier;
    calculerFacture();
}
function afficherFacture(){
    document.getElementById("zoneContenuItem").style.display ="none";
    document.getElementById("zoneContenuFacture").style.display= "block";

}
function calculerFacture(){
    let tBody= document.getElementById("corpsTableau");
    var listeTr= tBody.getElementsByTagName("tr");
    let montantTotalAvantTaxes=0;
    for(let i=0; i<listeTr.length; i++){
        let ligne= listeTr[i];
        let listeTd = ligne.getElementsByTagName("td");
        let prixproduit= parseFloat(listeTd[1].innerHTML);
        let quantiteProduit= parseInt(listeTd[2].innerHTML);
        montantTotalAvantTaxes += prixproduit * quantiteProduit;
    }
    var TAUX_TPS=0.05;
    var TAUX_TvQ= 0.0975;
    let totalTPS= montantTotalAvantTaxes * TAUX_TPS;
    let totalTVQ= montantTotalAvantTaxes * TAUX_TvQ;
    let montantTotalApresTaxes = montantTotalAvantTaxes + totalTVQ+ totalTPS;
    document.getElementById("idTotalAvantTaxes").innerHTML= montantTotalAvantTaxes.toFixed(2)+"$";
    document.getElementById("idTotalTPS").innerHTML= totalTPS.toFixed(2)+"$";
    document.getElementById("idTotalTVQ").innerHTML= totalTVQ.toFixed(2)+"$";
    document.getElementById("idTotalApresTaxes").innerHTML= montantTotalApresTaxes.toFixed(2)+"$";

}
