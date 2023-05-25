//Appeller le DOM
const input = document.querySelector("input");
const button = document.querySelector("button");

//Let's go enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const errors = [];
    if (input.value === "" || input.value == null) {
      errors.push(`T'as rien mis`);
    }
    if (input.value.length < 3) {
      errors.push(`T'en a pas assez mis`);
    }
    if (input.value.length > 20) {
      errors.push(`Doucement moins de 20 charactères`);
    }
    if (!input.value.includes(",")) {
      errors.push(`Y'a pas de virgules la dedans`);
    }
    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join(" et "));
      return;
    } else {
      //demande à l'utilisateur de saisir une série de nombres séparés par des virgules
      //et vérifie si des doublons sont présents. Affichez les doublons trouvés le cas échéant
      //Traduit le string en array
      const inputValue = input.value;
      console.log(inputValue);
      const inputArray = inputValue.split(",");
      console.log(inputArray);

      const sortedArray = inputArray.sort(function (a, b) {
        return a - b;
      });
      console.log(sortedArray);

      // //Recherche les doublons
      let equal;
      for (let i = 0; i < inputArray.length; i++) {
        equal = 0;
        equal = inputArray.filter((x) => x === inputArray[i]);
        console.log(equal);
        if (equal.length > 1) {
          console.log(`${inputArray[i]} est présent ${equal.length} fois`);
          inputArray.splice(i, equal.length);
          i--;
        }
      }
    }
  }
});

//Let's go click
button.addEventListener("click", (e) => {
  const errors = [];
  if (input.value === "" || input.value == null) {
    errors.push(`T'as rien mis`);
  }
  if (input.value.length < 3) {
    errors.push(`T'en a pas assez mis`);
  }
  if (input.value.length > 20) {
    errors.push(`Doucement moins de 20 charactères`);
  }
  if (!input.value.includes(",")) {
    errors.push(`Y'a pas de virgules la dedans`);
  }
  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join(" et "));
    return;
  } else {
    //demande à l'utilisateur de saisir une série de nombres séparés par des virgules
    //et vérifie si des doublons sont présents. Affichez les doublons trouvés le cas échéant

    //Traduit le string en array
    const inputValue = input.value;
    // console.log(inputValue);
    const inputArray = inputValue.split(",");
    // console.log(inputArray);

    //Trie l'array par ordre numérique
    const sortedArray = inputArray.sort(function (a, b) {
      return a - b;
    });
    // console.log(sortedArray);

    let equal;
    //Si une valeur est présente plusieurs fois, tu l'affiche, tu la dégage et tu n'incrémente pas l'index
    for (let i = 0; i < inputArray.length; i++) {
      equal = 0;
      equal = inputArray.filter((x) => x === inputArray[i]);
      console.log(equal);
      if (equal.length > 1) {
        console.log(`${inputArray[i]} est présent ${equal.length} fois`);
        inputArray.splice(i, equal.length);
        i--;
      }
    }
  }
});
