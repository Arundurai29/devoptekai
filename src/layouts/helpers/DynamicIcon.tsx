import React from "react";
import type { IconType } from "react-icons";
// import * as FaIcons from "react-icons/fa6";
import * as TfIcons from "react-icons/tfi";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
// import * as BsIcons from "react-icons/bs";
 import * as GiIcons from "react-icons/gi";
// import * as Io5Icons from "react-icons/io5";
 import * as RiIcons from "react-icons/ri";
// import * as TbIcons from "react-icons/tb";
// import * as TfiIcons from "react-icons/tfi";

type IconMap = Record<string, IconType>;

interface IDynamicIcon extends React.SVGProps<SVGSVGElement> {
  icon: string;
  className?: string;
}

const iconLibraries: { [key: string]: IconMap } = {
  tf: TfIcons,bs:BsIcons,ai:AiIcons,md:MdIcons,gi:GiIcons,ri:RiIcons
};

const DynamicIcon = ({ icon, ...props }: IDynamicIcon) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : undefined;

  if (!Icon) {
    return <span className="text-sm">Icon not found</span>;
  }

  return <Icon {...props} />;
};

const getIconLibrary = (icon: string): IconMap | undefined => {
  const libraryKey = icon.substring(0, 2).toLowerCase();

  return iconLibraries[libraryKey];
};

export default DynamicIcon;
