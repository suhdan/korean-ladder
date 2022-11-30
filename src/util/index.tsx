export function createNewPlayers(numToCreate: number) {
  Array.from(Array(numToCreate)).map(() => ({
    id: Math.random() * 1000,
    name: "Bob",
  }));
}
