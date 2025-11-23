import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePDF = async (element, fileName) => {
  if (!element) {
    console.log("There is nothing to prink")
  }

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });

  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
  })

  const imgData = canvas.toDataURL("image/jpeg");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`${fileName || "resume"}.pdf`);
}