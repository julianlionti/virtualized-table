import { TableCell } from "@mui/material";
import { useViewCell, ViewCellProps } from "./useViewCell";
import { ValidRowModel } from "src/helpers/ts.helper";
import { Sizes } from "src/constants/sizes";

const ViewCell: React.FC<ViewCellProps<ValidRowModel>> = (props) => {
  const { column, isEditable, renderCellContent, renderEditCellContent } =
    useViewCell(props);
  const { align = "right", minWidth = Sizes.cellMinWidth } = column;

  return (
    <TableCell
      width={minWidth}
      align={align}
      sx={{ padding: isEditable ? 0 : undefined }}
    >
      {renderEditCellContent()}
      {renderCellContent()}
    </TableCell>
  );
};

export default ViewCell;
