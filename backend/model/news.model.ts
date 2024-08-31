import CONSTANT from "@/constant/indes";
import { model, models, Schema } from "mongoose";

const RecordSchema = new Schema({
  title: String,
  description: String,
  img: String,
});
const RecordModel = models.news || model(CONSTANT.RECORD, RecordSchema);

export default RecordModel;
