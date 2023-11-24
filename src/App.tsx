import { Box, CssBaseline } from "@mui/material";
import { fakeTableData } from "./mocks/data/tableData";
import { VirtualizedTable } from "virtualized-crud";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ height: "100vh", display: "flex", flex: 1, p: 2 }}>
        <VirtualizedTable
          getRowId={() => "id"}
          rowHeight={(index) => (index % 5 === 0 ? 150 : 60)}
          data={fakeTableData}
          columns={[
            { id: "id", label: "Id" },
            { id: "firstName", label: "First Name" },
            { id: "lastName", label: "Last Name" },
            { id: "age", label: "Age" },
            { id: "gender", label: "Gender" },
            { id: "email", label: "Email" },
            { id: "phone", label: "Phone" },
            { id: "createdAt", label: "Created At", isEditable: false },
            { id: "updatedAt", label: "Updated At", isEditable: false },
          ]}
        />
      </Box>
    </>
  );
}

export default App;
