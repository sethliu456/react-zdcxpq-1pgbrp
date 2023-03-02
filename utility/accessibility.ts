/**
 * Accessibility markup for tab button
 */
export function a11yTabProps(index: number): {
  id: string;
  'aria-controls': string;
} {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

/**
 * Accessibility markup for tab content
 */
export function a11yTabContentProps(index: number): {
  role: string;
  id: string;
  'aria-labeledby': string;
} {
  return {
    role: 'tabpanel',
    id: `simple-tabpanel-${index}`,
    'aria-labeledby': `simple-tab-${index}`,
  };
}
