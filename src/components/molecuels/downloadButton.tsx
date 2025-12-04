"use client";
const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/api/download-pdf");
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Mihreteab-Demeke-2025.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-[6px] bg-foreground text-secondary-background rounded-[12px] cursor-pointer body2-medium w-full"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
