function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`PLEASE HELP US, ${hero.toUpperCase()} `);
    }
  }
  cryForHelp();
}

bankRobbery();
