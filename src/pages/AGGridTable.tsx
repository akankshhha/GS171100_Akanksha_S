"use client";

import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ModuleRegistry, ClientSideRowModelModule } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);


import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface AgGridTableProps<T> {
  columns: ColDef[];
  data: T[]; 
  enableFileUpload?: boolean;
  onDataUpdate?: (updatedData: T[]) => void;
}

const AgGridTable = <T,>({ columns, data }: AgGridTableProps<T>) => {

  const [rowData, setRowData] = useState<T[]>(data);

  useEffect(() => {
    setRowData(data);
  }, [data]);

  return (
    <div className="ag-theme-alpine w-full h-[500px]">
      <AgGridReact<T>
        rowData={rowData}
        columnDefs={columns}
        defaultColDef={{
          resizable: true,
          sortable: true,
          filter: true,
        }}
        rowSelection="single"
       
      />
    </div>
  );
};

export default AgGridTable;
