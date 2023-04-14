import React from "react";
import * as XLSX from "xlsx";

const data = [
  { id: 1, title: "Молоко", Price: 121 },
  { id: 2, title: "Сир", Price: 452 },
  { id: 3, title: "Цукор", Price: 343, Col: "weqeqew" },
];

export default function ExportToEcel() {
  // SON.stringify(excelData);

  const downloadExcel = (data: any) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1-Лист1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    // XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");

    var wb = XLSX.utils.book_new();
    // https://docs.sheetjs.com/docs/api/utilities/
    var ws = XLSX.utils.aoa_to_sheet([
      ["Богдан ", ,],
      [, ,],
      ["Назва", "Кількість", "Ціна"],
      ["Молоко", 62, 25.36],
      ["Мука", 62, 17.4],
      [, ,],
      ["Загалом", , 200],
    ]);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "textport.xlsx");
  };

  return (
    <div>
      <h5 className="text-xl text-center font-semibold py-3">JSON to Excel</h5>
      <button
        onClick={() => downloadExcel(data)}
        className="mt-4 bg-orange-600 text-white px-4 py-1 rounded-md"
      >
        Download
      </button>
    </div>
  );
}
