import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xb4E27E8F7a27A252d09e6E097Dc3804ceaEdc8f1"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Lisboa: Cidade Triste e Alegre",
        description: "This NFT will give you access to KoolTripz DAO!",
        image: readFileSync("scripts/assets/lisbon.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
