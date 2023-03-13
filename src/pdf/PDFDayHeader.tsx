import { StyleSheet, Text, View } from "@react-pdf/renderer";

interface Props {
  dayTitle: string;
  maxSets: number;
}

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "2px solid black",
    margin: "24px",
    height: "30px",
    fontSize: "12px",
    backgroundColor: "lightblue",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
    height: "100%",
  },
  dayTitle: {
    borderRight: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80",
    fontSize: "16px",
    height: "100%",
  },
  setsAndReps: {
    borderRight: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100",
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
    backgroundColor: "red",
    height: "100%",
    flexGrow: 1,
  },
});

const PDFDayHeader = ({ dayTitle, maxSets }: Props) => {
  const setNumbers = [];
  for (let i = 1; i <= maxSets; i++) {
    setNumbers.push(
      <View key={i} style={styles.individualSetNum}>
        <Text>{i}</Text>
      </View>
    );
  }

  if (maxSets > 6) {
    styles.individualSetNum.width = "25px";
  }

  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.dayTitle}>
            <Text>{dayTitle}</Text>
          </View>
          <View style={styles.setsAndReps}>
            <Text>Sets X Reps</Text>
          </View>
        </View>
        <View style={styles.setNumber}>{setNumbers}</View>
      </View>
      <View style={styles.notes}>
        <Text>Notes</Text>
      </View>
    </View>
  );
};

export default PDFDayHeader;
