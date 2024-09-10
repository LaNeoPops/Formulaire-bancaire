// REGEX 
let RegexNom = /^[A-Za-zÀ-ÖØ-Ýà-öø-ÿ'’-]+(-[A-Za-zÀ-ÖØ-Ýà-öø-ÿ'’-]+)*$/;
let RegexPrenom = /^[A-Za-zÀ-ÖØ-Ýà-öø-ÿ'’-]+(-[A-Za-zÀ-ÖØ-Ýà-öø-ÿ'’-]+)*$/;
let RegexDate = /^([0-3][0-9][/\.-][0-1][0-9][/\.-][1-2][0-9][0-9][0-9])$/;
let RegexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let RegexCode = /^FR\d{5}[A-Z._-]{3}x$/;


// ON CACHE LES SPAN ERREURS
$("#erreurNom").hide();
$("#erreurPrenom").hide();
$("#erreurDate").hide();
$("#erreurEmail").hide();
$("erreurCode").hide();

// INITIALISATION LES VARIABLES ERREURS
let monErreurNom = $("#erreurNom");
let monErreurPrenom = $("#erreurPrenom");
let monErreurDate = $("#erreurDate");
let monErreurEmail = $("#erreurEmail");
let monErreurCode = $("#erreurCode");

// FONCTION DE VALIDATION DU CHAMP NOM

function validerNom(e) {
    $("#nom").val(function(i, val){ return val.toUpperCase(); });
    if ($("#nom").val() === "") {
        e.preventDefault();
        monErreurNom.html("Vous devez saisir un nom !");
        monErreurNom.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurNom.show();
        return false;
    } else if (!$("#nom").val().match(RegexNom)) {
        e.preventDefault();
        monErreurNom.html("Vous devez saisir une nom valide! ");
        monErreurNom.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurNom.show();
        return false;
    } else if ($("#nom").val().length < 3) { //CONTROLE DE LONGUEUR
        e.preventDefault();
        monErreurNom.html("Le champ nom doit comporter plus que 3 lettres.");
        monErreurNom.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurNom.show();
        return false;
    } else {
        monErreurNom.hide();
        $("#nom").css("border", "3px solid green");
        return true;
    }
}

// FONCTION DE VALIDATION DU CHAMP PRENOM

function validerPrenom(e) {
    $("#prenom").val(function(i, val) { return val.charAt(0).toUpperCase() + val.substr(1); });
    if ($("#prenom").val() === "") {
        e.preventDefault();
        monErreurPrenom.html("Vous devez saisir un prénom ! ");
        monErreurPrenom.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurPrenom.show();
        return false;
    } else if (!$("#prenom").val().match(RegexPrenom)) {
        e.preventDefault();
        monErreurPrenom.html("Vous devez saisir un prénom valide! ");
        monErreurPrenom.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurPrenom.show();
        return false;
    } else if ($("#prenom").val().length < 3) { //CONTROLE DE LONGUEUR
        e.preventDefault();
        monErreurPrenom.html("Le champ prénom doit comporter plus que 3 lettres.");
        monErreurPrenom.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurPrenom.show();
        return false;
    } else {
        monErreurPrenom.hide();
        $("#prenom").css("border", "3px solid green");
        return true;
    }
}

// FONCTION DE VALIDATION DU CHAMP DATE

function validerDate(e) {
    if ($("#date").val() === "") {
        e.preventDefault();
        monErreurDate.html("Vous devez saisir une date! ");
        monErreurDate.css("color", "red");
        monErreurDate.show();
        return false;
    } else if (!$("#date").val().match(RegexDate)) {
        e.preventDefault();
        monErreurDate.html("Vous devez saisir une date valide! ");
        monErreurDate.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurDate.show();
        return false;
    } else {
        monErreurDate.hide();
        $(this).css("border", "3px solid green");
        return true;
    }
}

// FONCTION DE VALIDATION DU CHAMP EMAIL

function validerEmail(e) {
    if ($("#email").val() === "") {
        e.preventDefault();
        monErreurEmail.html("Vous devez saisir un email ! ");
        monErreurEmail.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurEmail.show();
        return false;
    } else if (!$("#email").val().match(RegexEmail)) {
        e.preventDefault();
        monErreurEmail.html("Vous devez saisir un email valide! ");
        monErreurEmail.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurEmail.show();
        return false;
    } else {
        monErreurEmail.hide();
        $(this).css("border", "3px solid green");
        return true;
    }
}

// FONCTION DE VALIDATION DU CHAMP CODE CONFIDENTIEL
function validerCode(e) {
    if ($("#code").val() === "") {
        e.preventDefault();
        monErreurCode.html("Vous devez saisir votre confidentiel !");
        monErreurCode.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurCode.show();
        return false;
    } else if (!$("#code").val().match(RegexCode)) {
        e.preventDefault();
        monErreurCode.html("Le code confidentiel doit être au format FR + 5 chiffres + 3 lettres en MAJ + x! ");
        monErreurCode.css("color", "red");
        $(this).css("border", "3px solid red");
        monErreurCode.show();
        return false;
    } else {
        monErreurCode.hide();
        $("#code").css("border", "3px solid green");
        return true;
    }
}

//ECOUTEURS D'EVENEMENTS SUR LES INPUTS 

$(document).ready(function () {
    $('#nom').on('input', validerNom);
    $('#prenom').on('input', validerPrenom);
    $('#email').on('input', validerEmail);
    $('#date').on('input', validerDate);
    $('#code').on('input', validerCode);
});

//ECOUTEUR DE L'EVENEMENT 'CLICK' SUR LE BOUTON ENVOYER

$("#envoyer").on("click", function (e) {
    e.preventDefault();  // Empêche la soumission par défaut du formulaire

    let validNom = validerNom(e);
    let validPrenom = validerPrenom(e);
    let validDate = validerDate(e);
    let validEmail = validerEmail(e);
    let validCode = validerCode(e);

    if (validNom && validPrenom && validDate && validEmail && validCode) {
        // Tous les champs sont valides, on affiche la modale
        $("#confirmationModal").modal('show');
    } else {
        // Afficher des messages d'erreur si certains champs ne sont pas valides
        if (!validNom) {
            monErreurNom.html("Le champ est vide ou invalide !");
            monErreurNom.css("color", "red");
            $("#nom").css("border", "3px solid red");
            monErreurNom.show();
        }
        if (!validPrenom) {
            monErreurPrenom.html("Le champ est vide ou invalide !");
            monErreurPrenom.css("color", "red");
            $("#prenom").css("border", "3px solid red");
            monErreurPrenom.show();
        }
        if (!validDate) {
            monErreurDate.html("Le champ est vide ou invalide !");
            monErreurDate.css("color", "red");
            $("#date").css("border", "3px solid red");
            monErreurDate.show();
        }
        if (!validEmail) {
            monErreurEmail.html("Le champ est vide ou invalide !");
            monErreurEmail.css("color", "red");
            $("#email").css("border", "3px solid red");
            monErreurEmail.show();
        }
        if (!validCode) {
            monErreurCode.html("Le champ est vide ou invalide !");
            monErreurCode.css("color", "red");
            $("#code").css("border", "3px solid red");
            monErreurCode.show();
        }
    }
});

//ECOUTEUR DE L'EVENEMENT 'CLICK' SUR LE BOUTON ENVOYER DE LA MODALE

$("#confirmSubmit").on("click", function () {
    // Soumission du formulaire après confirmation
    $("form").submit();
});

//ECOUTEUR DE L'EVENEMENT 'CLICK' SUR LE BOUTON ANNULER DE LA MODALE

$("#confirmCancel").on("click", function () {
    // Retour au formulaire
    $("#confirmationModal").modal('hide');
});

//ECOUTEUR DE L'EVENEMENT 'CLICK' SUR LE BOUTON ANNULER

$('#annuler').on("click", function (e) {
    location.reload();
});
