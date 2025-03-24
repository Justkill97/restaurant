//api javascript
// API KEY: 7a524e230da14aeb9320e13fd5cc182b




function fetchRecipes(){
    let ing1 = $(".ing1").val();
    let ing2 = $(".ing2").val();
    let ing3 = $(".ing3").val();
  
  
    let url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=7a524e230da14aeb9320e13fd5cc182b&ingredients="+ing1+","+ing2+","+ing3+"&number=1";
  
    console.log(url);
  
  
    let request = new XMLHttpRequest();
  
    request.open("GET", url, true);
  
    request.onload = function() { //Once we recieve the response do this vvvv
  
      let data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
  
        // console.log(data); - Educational Purposes 
        recipeImage = data[0].image;
        recipeTitle = data[0].title;
        recipeId = data[0].id;
        console.log(recipeId);
        console.log(recipeTitle);
        $(".recipe-title").text(recipeTitle)
        $('.recipe-image').attr('src',recipeImage);
  
  
  
  
        //OPTIONAL EXTENTIAL - BUT SEEMS USEFUL
        let urlN = "https://api.spoonacular.com/recipes/"+recipeId+"/information?apiKey=dafc1b303bf1432da17d25bd0e5ba8a2";
        let newRequest = new XMLHttpRequest();
  
        newRequest.open("GET", urlN, true);
        newRequest.onload = function() { //Once we recieve the response do this vvvv
  
          let newData = JSON.parse(this.response);
          if (newRequest.status >= 200 && newRequest.status < 400) {
            let recipeInstructions = newData.instructions;
            console.log(recipeInstructions);
  
            if(recipeInstructions == null){
              $(".recipe-instructions").text("No instructions are available at this time");
            }
            else{
              $(".recipe-instructions").html(recipeInstructions);
            }
  
  
          }
        };
        newRequest.send();
  
  
  
  
      }
    };
  
    request.send();
  }
  ///Translate///
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
  