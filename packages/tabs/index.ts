import Root from "../Tabs/Root.astro";
import Tab from "../Tabs/Tab.astro";
import TabList from "../Tabs/TabList.astro";
import TabPanel from "../Tabs/TabPanel.astro";

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
