import * as React from 'react';
import StandardPackage from './StandardPackage';
import PurchaseButton from './PurchaseButton';

const AdmissionsConsulting = () => {
  return (
    // <div className="m-auto">
    <div>
      <div>
        <div className="md:flex justify-around my-6">
          <div className="m-auto flex-1 text-center">
            Work with a former law school admissions officer and a professional
            writer
          </div>
          <div className="flex-1">
            <PurchaseButton price={1200} link="www.google.com" />
          </div>
        </div>
      </div>
      <StandardPackage />
    </div>
  );
};

export default AdmissionsConsulting;
