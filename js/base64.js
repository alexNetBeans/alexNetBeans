
//-- CONVERTE IMAGEM PARA BASE64 --

var logop = '0';

function imgToBase64(event)
{
 
  let reader = new FileReader();
  let file = event.target.files[0];

  file.onload = function(fl)
  {
	  // fl.target.result
	  $('#story').val('jkjk');
	  console.log('jhjghj');
  }
  
    // console.log('jhjghj');
  
  //reader.readAsDataURL(file);
  //logop = reader.result;
  
  //reader.onloadend = () => {
  // preview.src = reader.result;
 
 } 
 
 document.getElementsByTagName("input")[0].addEventListener("change", imgToBase64);	
 
 