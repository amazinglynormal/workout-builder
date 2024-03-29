import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";

function recalculateVolume(workoutProgram: WorkoutProgram) {
  const volumeKeys = Object.keys(workoutProgram.volume);
  volumeKeys.forEach((key) => {
    workoutProgram.volume[key] = 0;
  });

  workoutProgram.exerciseSelection.forEach((day) => {
    day.exercises.forEach((exList) => {
      exList.forEach((ex) => {
        if (ex.numOfSets.includes("-")) {
          workoutProgram.volume[ex.muscleGroup] += Number(
            ex.numOfSets.split("-")[1]
          );
        } else {
          workoutProgram.volume[ex.muscleGroup] += Number(ex.numOfSets);
        }
      });
    });
  });

  return workoutProgram;
}

export default recalculateVolume;
