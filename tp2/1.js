function validation(){
  
    var city = document.getElementById("city").value;
    
    if(city.length < 5){
      // afficher une erreur
      
    }
    
    // ou faire une validation de tous les champs en une seule fois
    let error = "";
  for(let i of document.querySelectorAll('.inputAW')){
      console.log( i.value.length, i.getAttribute('maxlength'))
      // afficher une erreur 
      // si i.value.length < 5 && i.value.length > i.getAttribute('maxlength')
  }
    
    // ajouter / supprimer la classe CSS display
    document.getElementById("error").classList.remove("display")
  
    document.getElementById("error").classList.add("display")
  
    
  }