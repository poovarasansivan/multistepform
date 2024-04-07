import React, { useState } from "react";
import Progressbar from "../components/progressbar";
import Describe from "../pages/describeBest";
import RightPlace from "../pages/rightPlace";
import Intrestpage from "../pages/intrestPage";
import Mathcomfort from "../pages/mathComfort";
import Yourway from "../pages/yourWay";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const handleContinue = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleGoBack = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); 
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Describe onPageChange={handleContinue} />;
      case 2:
        return <Intrestpage onPageChange={handleContinue} />;
      case 3:
        return <RightPlace onPageChange={handleContinue} />;
      case 4:
        return <Mathcomfort onPageChange={handleContinue} />;
      case 5:
        return <Yourway onPageChange={handleContinue} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Progressbar
        currentPage={currentPage}
        totalPages={totalPages}
        onGoBack={handleGoBack}
      />
      {renderPage()}
    </div>
  );
};

export default Index;
