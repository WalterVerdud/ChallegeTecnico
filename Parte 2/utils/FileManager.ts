import * as fs from "fs";

export class FileManager {

  static saveProducts(data: string) {

    fs.writeFileSync(
      "products.txt",
      data
    );

  }
}