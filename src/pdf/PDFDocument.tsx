import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import PDFDay from "./PDFDay";

const styles = StyleSheet.create({
  page: {
    padding: "24px",
  },
});

interface Props {
  workoutProgram: WorkoutProgram;
}

const PDFDocument = ({ workoutProgram }: Props) => {
  const pdfDays = workoutProgram.exerciseSelection.map((day) => {
    return <PDFDay key={day.title} dayInfo={day} />;
  });

  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        {pdfDays}
      </Page>
    </Document>
  );
};

export default PDFDocument;
