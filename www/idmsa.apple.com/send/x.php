<?php
if(!empty($_POST['imei'])&& isset($_POST['imei']))//&& is_numeric ($_POST['imei']))

				{
					$i=0;
					$tab_clean=array();
					$tab_06=array();
					$tab_03=array();
					$tab_07=array();
					$tab_err=array();
					$texte = $_POST['imei'];
					$tab_lignes = explode("\n",$texte);
					$tab_lignes = array_map('trim',$tab_lignes);// Enlève les espaces vides
					$tab_lignes = array_filter($tab_lignes);// Supprime les éléments vides (= lignes vides)
					$ligne = array_slice($tab_lignes,0,1000);// Sélectionne les 15 premiers éléments du tableau (soit les 15 premières lignes non vides)
					
					
					
					foreach( $ligne as $row => $imei ) 

							{	$i++;				
$cok='cookies.txt';	
$msg='';						
global $proxy;
$url= 'http://espace-client.sfr.fr/desimlockage/afficherFormulaireModifEmail.do?desimlockageContext.numIMEI='.$imei.'#sfrclicid=EC_desimlocage_desimlocker-HorsListe';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
//curl_setopt($ch, CURLOPT_PROXY, $proxy);
curl_setopt($ch, CURLOPT_HEADER, 0); // return headers 0 no 1 yes
curl_setopt($ch, CURLOPT_USERPWD,"0686606955:123456");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return page 1:yes
curl_setopt($ch, CURLOPT_TIMEOUT, 200); // http request timeout 20 seconds
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Follow redirects, need this if the url changes
curl_setopt($ch, CURLOPT_MAXREDIRS, 2); //if http server gives redirection responce
curl_setopt($ch, CURLOPT_USERAGENT,"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.7) Gecko/20070914 Firefox/2.0.0.7");
curl_setopt($ch, CURLOPT_COOKIEJAR, $cok); // cookies storage / here the changes have been made
curl_setopt($ch, CURLOPT_COOKIEFILE, $cok);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true); // false for https
curl_setopt($ch, CURLOPT_ENCODING, "gzip"); // the page encoding
$data = curl_exec($ch); // execute the http request

if ( $error = curl_error($ch) )
	{
		 echo  'ERROR Systeme';
		unlink($cok);
		curl_close($ch); 
	}
if(strpos($data, "Account locked"))
{
			$tab_err[1]='Compte Bloquer';
}
else if (strpos($data, "Confirmation") !== false)
	{
		if (unlink($cok))
		{
			// $msg='<font color="green">CLEAN</font>';
			$tab_clean[$i]='<font color="green">'.$imei.'</font>';
		}
		else
		{
			$msg= 'error delete cookies';
		}
		
	}
else if (strpos($data, "Code erreur : 06") !== false)
{

	if (unlink($cok))
	{
	// $msg='<font color="blue">Code erreur : 06 ==> BLACKLISTE</font>';
		$tab_06[$i]='<font color="red">'.$imei.'</font>';

	}
	else
	{
	$msg= 'error delete cookies';
	}
}
else if (strpos($data, "Code erreur : 03") !== false)
{
	if (unlink($cok))
	{
	// $msg='<font color="red">Code erreur : 03 ==> NOT FOUND</font>';
	$tab_03[$i]='<font color="blue">'.$imei.'</font>';

	}
	else
	{
	$msg= 'error delete cookies';
	}


}
else if (strpos($data, "Code erreur : 07") !== false)
{
	if (unlink($cok))
	{
	// $msg='<font color="red">Code erreur : 07</font>';
	$tab_07[$i]='<font color="green">'.$imei.'</font>';
	}
	else
	{
	$msg= 'error delete cookies';
	}


}
else
{
	if (unlink($cok))
	{
		// $msg='<font color="red">Erreur Technique</font>';
			$tab_err[$i]='<font color="red">'.$imei.'</font>';

	}
	else
	{
		$msg= 'error delete cookies';
	}
}
// echo $row.'==>'.$imei.' ==> '.$msg.'<br>';
echo $data;


}
if($tab_clean)
{
echo '###########################<br>';
echo 'CLEAN<br>';
echo '###########################<br>';
foreach( $tab_clean as $row => $imei ) 
{

echo $imei.'<br>';
}
}
if($tab_07)
{
echo '###########################<br>';
echo 'FOR TEST (Code erreur : 07)<br>';
echo '###########################<br>';
foreach( $tab_07 as $row => $imei ) 
{
echo $imei.'<br>';
}
}
if($tab_03)
{
echo '###########################<br>';
echo 'NOT FOUND (Code erreur : 03)<br>';
echo '###########################<br>';
foreach( $tab_03 as $row => $imei ) 
{

echo $imei.'<br>';
}
}
if($tab_06)
{
echo '###########################<br>';
echo 'STOLEN (Code erreur : 06)<br>';
echo '###########################<br>';
foreach( $tab_06 as $row => $imei ) 
{

echo $imei.'<br>';
}
}
if($tab_err)
{
echo '###########################<br>';
echo 'UNKNOW ERROR (Code erreur : 04,14)<br>';
echo '###########################<br>';
foreach( $tab_err as $row => $imei ) 
{

echo $imei.'<br>';
}
}


}
else
{
echo '<script>alert("svp remplir le champs imei")</script>';

print("<script type=\"text/javascript\">setTimeout('location=(\"index.php\")' ,0);</script>");
}
?>