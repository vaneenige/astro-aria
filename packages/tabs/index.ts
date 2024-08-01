import Root from "./Root.astro";
import Tab from "./Tab.astro";
import TabList from "./TabList.astro";
import TabPanel from "./TabPanel.astro";

const Tabs = {
  Root,
  Tab,
  TabList,
  TabPanel,
};

export default Tabs;

export function extend(extended: any) {
  return {
    ...Tabs,
    ...extended
  };
}
