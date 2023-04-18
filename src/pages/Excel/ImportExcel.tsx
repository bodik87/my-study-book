import { useState } from "react";
import * as XLSX from "xlsx";

export default function ImportExcel() {
  const [excelFile, setExcelFile] = useState<any>(null);
  const [excelFileError, setExcelFileError] = useState<string | null>(null);

  const [excelData, setExcelData] = useState<any>(null);

  const fileTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const handleFile = (e: any) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target?.result);
        };
      } else {
        setExcelFileError("Виберіть тип файлу Excel");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    } else {
      setExcelData(null);
    }
  };

  const FILE = "http://...";

  const downloadFile = (url: string) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "file.json");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="mt-4">
      {/* upload file section */}
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h5 className="text-xl text-center font-semibold py-3">
            Завантаження Excel файла
          </h5>
          <input type="file" onChange={handleFile} required />
          {excelFileError && (
            <div
              className="text-red-600 py-2 text-sm font-semibold"
              style={{ marginTop: 5 + "px" }}
            >
              {excelFileError}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded-md"
            style={{ marginTop: 5 + "px" }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* view file section */}
      {excelData && (
        <>
          <h5 className="text-center font-semibold">Вигляд файла</h5>
          <div className="flex justify-center">
            {excelData === null && <p className="py-2">Файл не вибрано</p>}
            {excelData !== null && <Data excelData={excelData} />}
          </div>
        </>
      )}

      {excelData && (
        <a
          href={`data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(excelData)
          )}`}
          download={`excel.json`}
          className="block w-fit mt-4 bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Export to JSON
        </a>
      )}
    </div>
  );
}

const Data = ({ excelData }: any) => {
  return (
    <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg my-4">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
          <tr>
            <th className="px-6 py-3" scope="col">
              ID
            </th>
            <th className="px-6 py-3" scope="col">
              Назва
            </th>
            <th className="px-6 py-3" scope="col">
              Ціна
            </th>
          </tr>
        </thead>
        <tbody>
          {excelData.map((bodyData: any) => (
            <tr key={bodyData.Id} className="bg-white border-b">
              <th className="px-6 py-4">{bodyData.Id}</th>
              <th className="px-6 py-4">{bodyData.Title}</th>
              <th className="px-6 py-4">{bodyData.Price}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
