const petsData = [
    {
      id:1,
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      id:2,
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      id:3,
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
  
  function age(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if (calculatedAge == 1) {
      return "1 year old";
    } else if (calculatedAge == 0) {
      return "Baby";
    } else {
      return `${calculatedAge} years old`;
    }
  }
  
  function foods(foods) {
    return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food}</li>`).join("")}
  </ul>
  `;
  }
  const search = 0;
  let text = '';
  function display(search){
    for(let i = 0; i<petsData.length; i++){
      if(i == search){
        text +=i;
      }
      document.getElementById("demo").innerHTML = ''\text;
    }
  }
  
  
/*  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Pets (${petsData.length} results)</h1>
    ${petsData.map(petTemplate).join("")}
    <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
  `;
  /*function search(id){
  for(let i = 0; i<petsData.length(); i++){
    if( petsData[i]["id"] == id ){
      return `
      <div class="animal">
      <img class="pet-photo" src="${petsData[i]["photo"]}">
      <h2 class="pet-name">${petsData[i]["name"]} <span class="species">(${petsData[i]["species"]})</span></h2>
      <p><strong>Age:</strong> ${age(petsData[i]["birthYear"])}</p>
      ${petsData[i]["favFoods"] ? foods(petsData[i]["favFoods"]) : ""}
      </div>
    `;

    }
  }
  document.getElementById("app").innerHTML = `
  ${search(1)}
  
`;
    <p class="footer">These ${petsData()} pets were added recently. Check back soon for updates.</p>
  };
  /*new json
  <script>
    // Sample JSON data
    const jsonData = [
      {
        name: "John Doe",
        age: 35,
        email: "john.doe@example.com"
      },
      {
        name: "Jane Smith",
        age: 28,
        email: "jane.smith@example.com"
      },
      {
        name: "Bob Johnson",
        age: 42,
        email: "bob.johnson@example.com"
      }
    ];

    // Get the button and the display element
    const displayButton = document.getElementById("display-button");
    const jsonDisplay = document.getElementById("json-display");

    // Add a click event listener to the button
    displayButton.addEventListener("click", () => {
      // Select a random element from the JSON data
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      const selectedData = jsonData[randomIndex];

      // Display the selected data
      jsonDisplay.innerHTML = `
        <h3>Selected JSON Element:</h3>
        <p>Name: ${selectedData.name}</p>
        <p>Age: ${selectedData.age}</p>
        <p>Email: ${selectedData.email}</p>
      `;
    });
  </script>*/