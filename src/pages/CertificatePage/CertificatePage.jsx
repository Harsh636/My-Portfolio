import React from "react";
import { img } from "../../assets/assets";
import jsPDF from "jspdf"; // Importing jsPDF
import "./CertificatePage.css";

const CertificatePage = () => {
  const certificate = [
    { img: img.cyber },
    { img: img.micro1 },
    { img: img.micro2 },
    { img: img.webd },
  ];

  // Function to generate and view a PDF for a specific certificate
  const viewPDF = (certificateImage) => {
    const doc = new jsPDF("landscape", "px", "a4"); // Create a PDF in landscape mode
    const imgWidth = 500; // Adjust image width to fit the PDF page
    const imgHeight = 350; // Adjust image height to fit the PDF page

    // Add the image to the PDF
    doc.addImage(certificateImage, "JPEG", 30, 30, imgWidth, imgHeight);

    // Open the PDF in a new tab (as a Blob URL)
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="certi-page">
      <h2 className="certi-page-heading">
        My <span className="highlight">Certifications</span>{" "}
      </h2>
      <div className="certi-page-grid">
        {certificate.map((cert, index) => (
          <div key={index} className="certi-card">
            <img
              src={cert.img}
              alt="certificate images"
              className="certi-img"
            />
            <button className="certi-btn" onClick={() => viewPDF(cert.img)}>
              View as PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;
