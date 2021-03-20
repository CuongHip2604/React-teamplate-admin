import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  const gitHubRepo = "https://github.com/CuongHip2604/React-teamplate-admin";

  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href={gitHubRepo} target="_blank" rel="noopener noreferrer">
          Cuong Hip
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
