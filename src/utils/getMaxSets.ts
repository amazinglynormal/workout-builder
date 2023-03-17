import ExerciseList from "../interfacesAndTypes/ExerciseList.type";

function getMaxSets(list: ExerciseList) {
  let maxSets = 0;

  list.forEach((exGroup) =>
    exGroup.forEach((ex) => {
      if (ex.numOfSets.includes("-")) {
        const higherSet = Number(ex.numOfSets.split("-")[1]);
        if (higherSet > maxSets) {
          maxSets = higherSet;
        }
      } else {
        const sets = Number(ex.numOfSets);
        if (sets > maxSets) {
          maxSets = sets;
        }
      }
    })
  );

  return maxSets;
}

export default getMaxSets;
