import * as React from 'react';
import StandardPackage from './StandardPackage';
import SupportPackage from './SupportPackage';
import PurchaseButton from './PurchaseButton';

const AdmissionsConsultingPlus = () => {
  return (
    <div className="m-auto">
      <div className="md:flex justify-around">
        <div className="md:m-auto mx-auto my-6">
          Work with a former law school admissions officer and a professional
          writer
        </div>

        <PurchaseButton price={1500} link={'google.com'} />
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
