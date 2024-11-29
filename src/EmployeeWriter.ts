import { CSVWriter } from "./index";

interface Employee {
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>(["name", "role", "salary"]);

employeeWriter.addRows([
  { name: "Duy", role: "FE", salary: 3000 },
  { name: "Hao", role: "DA", salary: 1500 },
  { name: "Anh", role: "FE", salary: 1500 },
  { name: "Trong", role: "FE", salary: 2000 },
  { name: "Nhan", role: "BA", salary: 3000 },
]);
