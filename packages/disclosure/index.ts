import Content from "./Content.astro";
import Root from "./Root.astro";
import Trigger from "./Trigger.astro";

const Disclosure = {
  Root,
  Trigger,
  Content,
};

export default Disclosure;

export function extend(extended: any) {
  return {
    ...Disclosure,
    ...extended
  };
}
