import { ColDef } from "ag-grid-community";
import * as React from "react";
import AgGridTable from "./AGGridTable";

const StorePage: React.FC = () => {
  interface Store {
    sequence_number: number;
    id: string;
    label: string;
    city: string;
    state: string;
  }

  const columnsForStore: ColDef[] = [
    { headerName: "Seq No.", field: "sequence_number", width: 100 },
    { headerName: "ID", field: "id", width: 100 },
    { headerName: "Label", field: "label", flex: 1 },
    { headerName: "City", field: "city", flex: 1 },
    { headerName: "State", field: "state", flex: 1 },
  ];

  const initialData: Store[] = [
    {
      sequence_number: 1,
      id: "ST035",
      label: "John Doe",
      city: "Udupi",
      state: "Karnataka",
    },
    {
      sequence_number: 1,
      id: "ST035",
      label: "John Doe",
      city: "Udupi",
      state: "Karnataka",
    },
    {
      sequence_number: 1,
      id: "ST035",
      label: "John Doe",
      city: "Udupi",
      state: "Karnataka",
    },
  ];

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Sheet 1 - AG Grid Table</h1>
        <AgGridTable columns={columnsForStore} data={initialData} />
      </div>
    </>
  );
};

export default StorePage;
