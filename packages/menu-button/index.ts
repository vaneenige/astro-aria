import Item from "./Item.astro";
import Menu from "./Menu.astro";
import Root from "./Root.astro";
import Trigger from "./Trigger.astro";

const MenuButton = {
  Item,
  Menu,
  Root,
  Trigger,
};

export default MenuButton;

export function extend(extended: { [x: string]: any }) {
  return {
    ...MenuButton,
    ...extended,
  };
}
