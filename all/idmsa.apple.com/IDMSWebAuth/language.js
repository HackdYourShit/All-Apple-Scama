function changeLanguage(){



var e = document.getElementById("languageCode");
var strUser = e.options[e.selectedIndex].text;

if(strUser=="Fran�ais")
{
document.getElementById("label6").innerHTML= "Identifiant Apple" ;
document.getElementById("label7").innerHTML= "Mot de passe" ;
document.getElementById("appleIdURL").innerHTML= "Identifiant Apple oubli� ?" ;
document.getElementById("passwordURL").innerHTML= "Mot de passe oubli� ?" ;
document.getElementById("signInHyperLink").value= "Connexion" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=FR-FR">Cr�er un identifiant Apple.</a>' ;
}
else if(strUser=="English")
{
document.getElementById("label6").innerHTML= "Apple ID" ;
document.getElementById("label7").innerHTML= "Password" ;
document.getElementById("appleIdURL").innerHTML= "Forgot your Apple ID?" ;
document.getElementById("passwordURL").innerHTML= "Forgot your password?" ;
document.getElementById("signInHyperLink").value= "Sign In" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=US-EN">Create an Apple ID</a>' ;
}
else if(strUser=="Deutsch")
{
document.getElementById("label6").innerHTML= "Apple-ID" ;
document.getElementById("label7").innerHTML= "Passwort" ;
document.getElementById("appleIdURL").innerHTML= "Apple-ID vergessen?" ;
document.getElementById("passwordURL").innerHTML= "Passwort vergessen?" ;
document.getElementById("signInHyperLink").value= "Anmelden" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=DE-DE">Apple ID erstellen</a>' ;
}
else if(strUser=="Espagnol")
{
document.getElementById("label6").innerHTML= "ID de Apple" ;
document.getElementById("label7").innerHTML= "Contrase�a" ;
document.getElementById("appleIdURL").innerHTML= "�Has olvidado tu ID de Apple?" ;
document.getElementById("passwordURL").innerHTML= "�Has olvidado tu contrase�a?" ;
document.getElementById("signInHyperLink").value= "Iniciar sesi�n" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=ES-ES">Crear un ID de Apple</a>' ;
}
else if(strUser=="Italiano")
{
document.getElementById("label6").innerHTML= "ID Apple" ;
document.getElementById("label7").innerHTML= "Password" ;
document.getElementById("appleIdURL").innerHTML= "Hai dimenticato il tuo ID Apple?" ;
document.getElementById("passwordURL").innerHTML= "Hai dimenticato la password?" ;
document.getElementById("signInHyperLink").value= "Accedi" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=IT-IT">Crea un Apple ID</a>' ;
}


else if(strUser=="???")
{
document.getElementById("label6").innerHTML= "Apple ID" ;
document.getElementById("label7").innerHTML= "?????" ;
document.getElementById("appleIdURL").innerHTML= "Apple ID ???????" ;
document.getElementById("passwordURL").innerHTML= "????????????" ;
document.getElementById("signInHyperLink").value= "?????" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=JP-JA">Apple ID ???</a>' ;
}


else if(strUser=="???")
{
document.getElementById("label6").innerHTML= "Apple ID" ;
document.getElementById("label7").innerHTML= "??" ;
document.getElementById("appleIdURL").innerHTML= "Apple ID? ?????????" ;
document.getElementById("passwordURL").innerHTML= "??? ???????" ;
document.getElementById("signInHyperLink").value= "???" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=KP-KO">Apple ID ???</a>' ;
}
else if(strUser=="????")
{
document.getElementById("label6").innerHTML= "Apple ID" ;
document.getElementById("label7").innerHTML= "??" ;
document.getElementById("appleIdURL").innerHTML= "???? Apple ID?" ;
document.getElementById("passwordURL").innerHTML= "?????" ;
document.getElementById("signInHyperLink").value= "??" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=TW-ZH">?? Apple ID</a>' ;
}
else if(strUser=="????")
{
document.getElementById("label6").innerHTML= "Apple ID" ;
document.getElementById("label7").innerHTML= "??" ;
document.getElementById("appleIdURL").innerHTML= "??? Apple ID?" ;
document.getElementById("passwordURL").innerHTML= "??????" ;
document.getElementById("signInHyperLink").value= "??" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=CN-ZH">??Apple ID</a>' ;
}
else if(strUser=="Portuguais do Brasil")
{
document.getElementById("label6").innerHTML= "ID Apple" ;
document.getElementById("label7").innerHTML= "Senha" ;
document.getElementById("appleIdURL").innerHTML= "Esqueceu seu ID Apple?" ;
document.getElementById("passwordURL").innerHTML= "Esqueceu sua senha?" ;
document.getElementById("signInHyperLink").value= "Iniciar sess�o" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=BR-PT">Criar uma ID Apple</a>' ;
}
else if(strUser=="???????")
{
document.getElementById("label6").innerHTML= "Apple ID" ;
document.getElementById("label7").innerHTML= "??????" ;
document.getElementById("appleIdURL").innerHTML= "?????? ???? Apple ID?" ;
document.getElementById("passwordURL").innerHTML= "?????? ???????" ;
document.getElementById("signInHyperLink").value= "?????" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=RU-RU">??????? ????????????? Apple ID</a>' ;
}
else if(strUser=="Turkche")
{
document.getElementById("label6").innerHTML= "Apple Kimligi" ;
document.getElementById("label7").innerHTML= "Parola" ;
document.getElementById("appleIdURL").innerHTML= "Apple Kimliginizi mi unuttunuz?" ;
document.getElementById("passwordURL").innerHTML= "Parolanizi mi unuttunuz?" ;
document.getElementById("signInHyperLink").value= "Giris Yap" ;
document.getElementById("create_apple_id").innerHTML= '<a href="https://id.apple.com/IDMSAccount/myAccount.html?appIdKey=45571f444c4f547116bfd052461b0b3ab1bc2b445a72138157ea8c5c82fed623&amp;action=register&amp;language=TR-TR">Apple Kimligi olusturun</a>' ;
}
}


</script>