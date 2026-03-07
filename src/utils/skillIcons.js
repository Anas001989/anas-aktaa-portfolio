// Map skill icon names to react-icons or simple badges (only icons that exist in react-icons/si)
import {
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiNextdotjs,
  SiReact,
  SiDocker,
  SiTerraform,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';

const iconMap = {
  csharp: SiSharp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: null,
  cpp: SiCplusplus,
  python: SiPython,
  node: SiNodedotjs,
  express: SiExpress,
  dotnet: SiDotnet,
  next: SiNextdotjs,
  react: SiReact,
  aws: null,
  azure: null,
  docker: SiDocker,
  terraform: SiTerraform,
  github: SiGithub,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  dynamodb: null,
  sqlserver: SiDotnet,
};

export function getSkillIcon(iconName) {
  return iconMap[iconName] || null;
}
