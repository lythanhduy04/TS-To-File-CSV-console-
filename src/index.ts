// chuyển [{}] thành file CSV
//nhập vào
//định dạng mảng nhập vào 'text,text,text,text'
//thêm chuỗi vừa định dạng vào file csv
// nếu chưa có thư mục data thì sẽ báo lỗi
// import existsSync và mkdirSync từ module fs và thêm câu lệnh
// if (!existsSync("./data")) {
//             mkdirSync("./data");
//         }
// trong phương thức save để tạo thư mục data

import { appendFileSync } from "fs";

export class CSVWriter<T> {
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(",") + "\n";
    //'from,to,amount,notes'
  }

  private csv: string;

  save(filename: string) {
    appendFileSync(filename, this.csv);

    this.csv = "\n";
    console.log("file saved to", filename);
  }

  addRows(value: T[]) {
    let rows = value.map((v) => this.formatRow(v));
    this.csv += rows.join("\n");
  }

  private formatRow(value: T): string {
    return this.columns.map((col) => value[col]).join(",");
  }
}
