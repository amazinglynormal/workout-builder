import { StyleSheet, View } from "@react-pdf/renderer";
import ExerciseList from "../interfacesAndTypes/ExerciseList.type";
import getMaxSets from "../utils/getMaxSets";
import PDFDayHeader from "./PDFDayHeader";
import PDFDayRow from "./PDFDayRow";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface Props {
  dayInfo: {
    title: string;
    exercises: ExerciseList;
  };
}

const styles = StyleSheet.create({
  dayContainer: {
    marginBottom: "24px",
  },
});

const PDFDay = ({ dayInfo }: Props) => {
  const exercises: JSX.Element[] = [];

  const maxSets = getMaxSets(dayInfo.exercises);

  dayInfo.exercises.forEach((exGroup, index) => {
    exGroup.forEach((ex, subIndex) => {
      let orderNumber = `${index + 1}${
        exGroup.length > 1 ? `${letters[subIndex]}` : ""
      }.`;
      exercises.push(
        <PDFDayRow
          key={`${dayInfo.title}-${ex.name}`}
          exercise={ex}
          index={orderNumber}
          maxSets={maxSets}
        />
      );
    });
  });

  return (
    <View wrap={false} style={styles.dayContainer}>
      <PDFDayHeader dayTitle={dayInfo.title} maxSets={maxSets} />
      {exercises}
    </View>
  );
};

export default PDFDay;
