import * as React from 'react';
import StandardPackage from './StandardPackage';
import SupportPackage from './SupportPackage';
import PurchaseButton from './PurchaseButton';

const AdmissionsConsultingPlus = () => {
  return (
    <div className="m-auto">
      <div className="flex justify-around">
        <div className="m-auto">
          Work with a former law school admissions officer and a professional
          writer
        </div>

        <PurchaseButton price={1500} link={'google.com'} />
      </div>
      <div className="ss-divider">After-the-application support</div>
      <SupportPackage />
      <div className="ss-divider">Plus everything in our standard package</div>
      <StandardPackage />
    </div>
  );
};

export default AdmissionsConsultingPlus;
