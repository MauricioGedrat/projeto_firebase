import { loginFirebase } from "./../../firebase/login";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface Login {
  nome: string;
  email: string;
  senha: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Login>
) {
  console.log("req.body", req.body);
  const loginDb = loginFirebase(req.body);
  res.status(200).json(loginDb);
}
