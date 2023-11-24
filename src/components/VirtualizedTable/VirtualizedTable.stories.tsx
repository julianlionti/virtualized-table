import type { Meta, StoryObj } from "@storybook/react";
import { FakeTableData, fakeTableData } from "src/mocks/data/tableData";
import { VirtualizedTable } from "virtualized-crud";

const meta = {
  title: "Example/VirtualizedTable",
  component: VirtualizedTable,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} as Meta<typeof VirtualizedTable<FakeTableData>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Minimal: Story = {
  args: {
    data: fakeTableData,
    columns: [
      { id: "id", label: "Id" },
      { id: "firstName", label: "First Name" },
      { id: "lastName", label: "Last Name" },
      { id: "age", label: "Age" },
      { id: "gender", label: "Gender" },
      { id: "email", label: "Email" },
      { id: "phone", label: "Phone" },
      { id: "createdAt", label: "Created At" },
      { id: "updatedAt", label: "Updated At" },
    ],
  },
};
