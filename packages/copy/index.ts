import Content from "./Content.astro";
import Root from "./Root.astro";
import Trigger from "./Trigger.astro";

const Copy = {
  Content,
  Root,
  Trigger,
};

export default Copy;

export function extend(extended: { [x: string]: any }) {
  return {
    ...Copy,
    ...extended,
  };
}
