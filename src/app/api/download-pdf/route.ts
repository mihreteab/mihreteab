import { NextResponse } from "next/server";
import path from "path";
import { readFileSync } from "fs";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "private/files/Mihreteab_Eriso_Resume.pdf"
  );
  const fileBuffer = readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Mihreteab-Demeke-2025.pdf"',
    },
  });
}
