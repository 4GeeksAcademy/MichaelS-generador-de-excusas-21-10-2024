let pronouns = ["they", "she", "it"];
let adjetives = ["spooky", "mysterious", "ghostly"];
let nouns = ["pumpkin", "ghost", "spell"];

for (let pronoun of pronouns) {
  for (let adjetive of adjetives) {
    for (let noun of nouns) {
      console.log(pronoun + adjetive + noun + ".com");
    }
  }
}
