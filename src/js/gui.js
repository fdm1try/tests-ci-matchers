export default function sortHeroes(heroesList) {
  return heroesList.sort((a, b) => b.health - a.health);
}
