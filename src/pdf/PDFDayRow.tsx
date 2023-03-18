import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Exercise from "../interfacesAndTypes/Exercise.interface";

interface Props {
  exercise: Exercise;
  index: string;
  maxSets: number;
}

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
    borderLeft: "2px solid black",
    fontSize: "12px",
    minHeight: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    flexGrow: 1,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    flexGrow: 1,
  },
  exerciseName: {
    borderRight: "2px solid black",
    minWidth: "100",
    height: "100%",
    flexGrow: 1,
    padding: "2px",
  },
  setsAndReps: {
    borderRight: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80",
    height: "100%",
  },
  setNumber: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  individualSetNum: {
    borderRight: "2px solid black",
    width: "35px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  notes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 150,
    padding: "1px",
    fontSize: "10px",
    color: "#808080",
  },
});

const PDFDayRow = ({ exercise, index, maxSets }: Props) => {
  const setNumbers = [];
  for (let i = 1; i <= maxSets; i++) {
    setNumbers.push(<View key={i} style={styles.individualSetNum}></View>);
  }

  if (maxSets > 6) {
    styles.individualSetNum.width = "25px";
  }

  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.exerciseName}>
            <Text>{`${index} ${exercise.name}`}</Text>
          </View>
          <View style={styles.setsAndReps}>
            <Text>{`${exercise.numOfSets} x ${exercise.numOfReps}${
              exercise.repScheme === "Rep Goal" ? "RG" : ""
            }`}</Text>
          </View>
        </View>
        <View style={styles.setNumber}>{setNumbers}</View>
      </View>
      <View style={styles.notes}>
        <Text>{exercise.note}</Text>
      </View>
    </View>
  );
};

export default PDFDayRow;
