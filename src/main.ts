import { NeosObject } from "./Index";
import fs from "fs";

const data = JSON.stringify(NeosObject(), null, 2);

fs.writeFileSync("NeosObject.json", data);
