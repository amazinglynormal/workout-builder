import { PDFViewer } from "@react-pdf/renderer";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import PDFDocument from "./PDFDocument";

interface Props {
  workoutProgram: WorkoutProgram;
}

const PDFViewerWrapper = ({ workoutProgram }: Props) => {
  return (
    <div>
      <PDFViewer showToolbar={true} width={1200} height={1000}>
        <PDFDocument workoutProgram={workoutProgram} />
      </PDFViewer>
    </div>
  );
};

export default PDFViewerWrapper;
