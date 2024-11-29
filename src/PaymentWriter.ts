import { CSVWriter } from "./index";
interface Payment {
  from: string;
  to: string;
  amount: number;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["from", "to", "amount", "notes"]);

paymentWriter.addRows([
  {
    from: "duy",
    to: "dev",
    amount: 500,
    notes: "ok",
  },
  {
    from: "duy",
    to: "An",
    amount: 500,
    notes: "ok",
  },
]);

paymentWriter.save("./data/payments.csv");
