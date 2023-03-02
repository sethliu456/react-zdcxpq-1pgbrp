import * as React from 'react';
import Tabs from './components/Tabs';
import AdmissionsConsulting from './components/AdmissionsConsulting';
import AdmissionsConsultingPlus from './components/AdmissionsConsultingPlus';
import Custom from './components/Custom';

export default function App() {
  return (
    <div className="ss2-viewport-width">
      <main className="ss-pricing-tutoring-root">
        <header className="ss-pricing__header flex gap-12 mb-8">
          <div>
            <p className="ss2-lg">
              We auditioned hundreds of 99th-percentile LSAT tutors and chose
              the very best—then trained them to make them even better.
            </p>
            <p>
              7Sage tutors provide live one-on-one coaching in private one-hour
              online tutoring sessions via Zoom. All packages begin with a free
              half-hour assessment and planning session.
            </p>
          </div>
          <aside className="text-center">
            <p>Have questions?</p>
            <a
              className="ss2-btn ss2-btn--outline ss2-btn--md block whitespace-nowrap font-bold"
              href="https://calendly.com/7sage-consult/7sage-tutoring-free-consultation?utm_source=PT_L"
            >
              Book a free consultation
            </a>
            <p className="ss2-sm font-normal">
              <a href="#faq">FAQ</a>
              <span> · </span>
              <a href="#reviews">Reviews</a>
              <span> · </span>
              <a href="#tutors">Meet our tutors</a>
            </p>
          </aside>
        </header>

        <Tabs
          tabs={[
            {
              button: (
                <span>
                  Admissions Consulting <span className="ss2-mint">Plus</span>
                </span>
              ),
              content: <AdmissionsConsultingPlus />,
            },
            {
              button: 'Custom',
              content: <Custom />,
            },
            {
              button: 'Admissions Consulting',
              content: <AdmissionsConsulting />,
            },
          ]}
        />
      </main>
    </div>
  );
}
