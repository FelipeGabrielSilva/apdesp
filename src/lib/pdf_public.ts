import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query;

  if (!file || Array.isArray(file)) {
    return res.status(400).json({ error: "Nome do arquivo inválido" });
  }

  const pdfPath = path.join(process.cwd(), "public", "pdf", file);

  if (!fs.existsSync(pdfPath)) {
    return res.status(404).json({ error: "Arquivo não encontrado" });
  }

  try {
    const fileStream = fs.createReadStream(pdfPath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename="${file}"`);
    fileStream.pipe(res);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao ler o arquivo" });
  }
}
