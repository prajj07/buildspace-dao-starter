import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xbd3108B28c3e4529dDC0B2AD5e4953C63EA090bF", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to HostelDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();