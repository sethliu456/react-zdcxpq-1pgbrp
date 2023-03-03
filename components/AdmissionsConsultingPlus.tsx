import * as React from 'react';
import StandardPackage from './StandardPackage';
import SupportPackage from './SupportPackage';
import PurchaseButton from './PurchaseButton';

const AdmissionsConsultingPlus = () => {
  return (
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

      <div className="ss-package-divider">
        <span>After-the-application support</span>
      </div>
      <SupportPackage />
      <div className="ss-package-divider">
        <span>Plus everything in our standard package</span>
      </div>
      <StandardPackage />
    </div>
  );
};

export default AdmissionsConsultingPlus;
