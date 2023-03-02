import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { a11yTabProps, a11yTabContentProps } from '../utility/accessibility';

/**
 * <TabPanel>
 *
 * Container for individual tab content
 * Applies accessibility markup and index used for tab selection
 */
function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <section
      hidden={value !== index}
      {...a11yTabContentProps(index)}
      {...other}
    >
      {value === index && children}
    </section>
  );
}

export default function Component(props) {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabs = props.tabs;
  const tabButtons = tabs.map((t) => t.button);
  const tabContents = tabs.map((t) => t.content);

  return (
    <section>
      {/* Tab buttons */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
          aria-label="Pricing plans"
        >
          {tabButtons.map((label) => (
            <Tab label={label} />
          ))}
        </Tabs>
      </Box>
      {/* Tab contents */}
      {tabContents.map((content, i) => (
        <TabPanel value={tabIndex} index={i} {...a11yTabProps(tabIndex)}>
          {content}
        </TabPanel>
      ))}
    </section>
  );

  return (
    <section>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
          aria-label="Pricing plans"
        >
          <Tab label="Admissions Consulting" />
          <Tab
            label={
              <span>
                Admissions Consulting <span>Plus</span>
              </span>
            }
          />
          <Tab label="Custom" />
        </Tabs>
      </Box>

      {/* {{children}} */}

      {}

      <TabPanel value={tabIndex} index={0} {...a11yTabProps(tabIndex)}>
        Item One
      </TabPanel>
      <TabPanel value={tabIndex} index={1} {...a11yTabProps(tabIndex)}>
        Item Two
      </TabPanel>
      <TabPanel value={tabIndex} index={2} {...a11yTabProps(tabIndex)}>
        Item Three
      </TabPanel>
    </section>
  );
}
