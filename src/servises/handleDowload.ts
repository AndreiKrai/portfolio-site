const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/assets/Andrii%20Okraichenko%20CV.pdf`; // Path to your PDF file in the public folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Andrii Okraichenko FullStack CV.pdf"; // File name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  export default handleDownload