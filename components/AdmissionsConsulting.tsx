import * as React from 'react';
import StandardPackage from './StandardPackage';
import PurchaseButton from './PurchaseButton';

const AdmissionsConsulting = () => {
  return (
    <div className="m-auto">
      <div className="flex justify-around">
        <div className="m-auto">
          Work with a former law school admissions officer and a professional
          writer
        </div>

        <PurchaseButton price={1200} link="www.google.com" />
      </div>
      <StandardPackage />
    </div>
  );
};

export default AdmissionsConsulting;
