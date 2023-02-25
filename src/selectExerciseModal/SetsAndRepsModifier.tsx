import { useState } from "react";
import RepScheme, { repSchemes } from "../interfacesAndTypes/RepScheme.type";
import SetScheme, { setSchemes } from "../interfacesAndTypes/SetScheme.type";
import Select from "./Select";
import NumberRangeInput from "./NumberRangeInput";
import NumberInput from "./NumberInput";

const SetsAndRepsModifier = () => {
  const [sets, setSets] = useState<[SetScheme, string]>([setSchemes[0], "1"]);
  const [reps, setReps] = useState<[RepScheme, string]>([repSchemes[0], "1"]);

  const changeHandler = (id: string, value: string) => {
    switch (id) {
      case "Sets": {
        if (value === "Set Range" && sets[0] != "Set Range") {
          setSets(["Set Range", "1-2"]);
          return;
        }

        if (value === "Sets" && sets[0] === "Set Range") {
          setSets(["Sets", "1"]);
          return;
        }

        return;
      }
      case "Reps": {
        if (value === "Rep Range" && reps[0] != "Rep Range") {
          setReps(["Rep Range", "1-2"]);
          return;
        }

        if (
          (value === "Reps" || value === "Rep Goal") &&
          reps[0] === "Rep Range"
        ) {
          setReps([value, "1"]);
          return;
        }

        if (value === "Reps" || value === "Rep Goal" || value === "Rep Range") {
          const currReps = reps[1];
          setReps([value, currReps]);
          return;
        }

        return;
      }
      case "numOfReps": {
        const currScheme = reps[0];
        setReps([currScheme, value]);
        return;
      }
      case "numOfSets": {
        const currScheme = sets[0];
        setSets([currScheme, value]);
        return;
      }
      case "reps-lower-value": {
        const newValue = Number(value);
        const currScheme = reps[0];
        if (reps[1].includes("-")) {
          let currReps = reps[1].split("-");
          if (newValue >= Number(currReps[1])) {
            currReps[1] = (newValue + 1).toString();
          }

          setReps([currScheme, `${newValue}-${currReps[1]}`]);
          return;
        }

        setReps([currScheme, `${value}-${value + 1}`]);
        return;
      }
      case "reps-higher-value": {
        const newValue = Number(value);
        const currScheme = reps[0];
        if (reps[1].includes("-")) {
          let currReps = reps[1].split("-");
          if (newValue <= Number(currReps[0])) {
            currReps[0] = (newValue - 1).toString();
          }

          setReps([currScheme, `${currReps[0]}-${newValue}`]);
          return;
        }

        setReps([currScheme, `${newValue - 1}-${newValue}`]);
        return;
      }
      case "sets-lower-value": {
        const newValue = Number(value);
        const currScheme = sets[0];
        if (sets[1].includes("-")) {
          let currSets = sets[1].split("-");
          if (newValue >= Number(currSets[1])) {
            currSets[1] = (newValue + 1).toString();
          }

          setSets([currScheme, `${newValue}-${currSets[1]}`]);
          return;
        }

        setSets([currScheme, `${newValue}-${newValue + 1}`]);
        return;
      }
      case "sets-higher-value": {
        const newValue = Number(value);
        const currScheme = sets[0];
        if (sets[1].includes("-")) {
          let currSets = sets[1].split("-");
          if (newValue <= Number(currSets[0])) {
            currSets[0] = (newValue - 1).toString();
          }

          setSets([currScheme, `${currSets[0]}-${newValue}`]);
          return;
        }

        setSets([currScheme, `${newValue - 1}-${newValue}`]);
        return;
      }
      default: {
        return;
      }
    }
  };

  return (
    <div>
      <div>
        {" "}
        <Select
          id="Sets"
          label="Sets"
          options={setSchemes}
          selected={sets[0]}
          changeHandler={changeHandler}
        />
        {sets[0] === "Set Range" ? (
          <NumberRangeInput
            id="sets"
            lowerValueLabel="Lower end of range"
            higherValueLabel="Higher end of range"
            lowerValue={Number(sets[1].split("-")[0])}
            higherValue={Number(sets[1].split("-")[1])}
            changeHandler={changeHandler}
          />
        ) : (
          <NumberInput
            id="numOfSets"
            label="Number of sets"
            value={Number(sets[1])}
            changeHandler={changeHandler}
          />
        )}
      </div>
      <div>
        {" "}
        <Select
          id="Reps"
          label="Reps"
          options={repSchemes}
          selected={reps[0]}
          changeHandler={changeHandler}
        />{" "}
        {reps[0] === "Rep Range" ? (
          <NumberRangeInput
            id="reps"
            lowerValueLabel="Lower end of range"
            higherValueLabel="Higher end of range"
            lowerValue={Number(reps[1].split("-")[0])}
            higherValue={Number(reps[1].split("-")[1])}
            changeHandler={changeHandler}
          />
        ) : (
          <NumberInput
            id="numOfReps"
            label="Number of reps"
            value={Number(reps[1])}
            changeHandler={changeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default SetsAndRepsModifier;
