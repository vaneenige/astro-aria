import Content from "./Content.astro";
import Root from "./Root.astro";
import Trigger from "./Trigger.astro";

const Disclosure = {
  Content,
  Root,
  Trigger,
};

export default Disclosure;

export function extend(extended: { [x: string]: any }) {
  return {
    ...Disclosure,
    ...extended,
  };
}
