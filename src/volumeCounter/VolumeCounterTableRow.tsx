interface TableRowProps {
  exerciseName: string;
  exerciseVolumeCount: number;
}

const VolumeCounterTableRow = ({
  exerciseName,
  exerciseVolumeCount,
}: TableRowProps) => {
  return (
    <tr>
      <th scope="row">{exerciseName}</th>
      <td>{exerciseVolumeCount}</td>
    </tr>
  );
};

export default VolumeCounterTableRow;
