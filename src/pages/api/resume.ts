// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

import { promises as fs } from "fs";
import { Resume } from "../../../Types";

export const fetchResume = async () => {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/Resume.json",
    "utf8"
  );
  //Return the content of the data file in json format
  let data = await JSON.parse(fileContents);
  return data;
};

type Data = { success: boolean; data?: Resume; message?: string };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    let data = await fetchResume();

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong Please try again later ."
    });
  }
}
