import { IconType } from "react-icons";
import { FaGithub, FaCodepen, FaLinkedin, FaDribbble } from "react-icons/fa";

export const linkedInUrl = "https://www.linkedin.com/in/ziolojt/";
export const gitHubUrl = "https://github.com/jt-ziolo";
export const dribbbleUrl = "https://dribbble.com/jt-ziolo";
export const codePenUrl = "https://codepen.io/jt-ziolo-pen";

export const devToUrl = "https://dev.to/jtziolo";

type SocialBarItemData = {
  url: string;
  linkAccessibleText: string;
  iconType: IconType;
};

export const socialBarData: SocialBarItemData[] = [
  {
    url: gitHubUrl,
    linkAccessibleText: "JT Ziolo's GitHub profile.",
    iconType: FaGithub,
  },
  {
    url: linkedInUrl,
    linkAccessibleText: "JT Ziolo's LinkedIn page.",
    iconType: FaLinkedin,
  },
  {
    url: dribbbleUrl,
    linkAccessibleText: "JT Ziolo's Dribbble portfolio.",
    iconType: FaDribbble,
  },
  {
    url: codePenUrl,
    linkAccessibleText: "JT Ziolo's CodePen page.",
    iconType: FaCodepen,
  },
];
