export interface Project {
  title: string;
  eyebrow: string;
  description: string;
  status: '持续开发' | '研究构想';
  category: string;
  href: string;
  art: 'workspace' | 'physics';
}

export const projects: Project[] = [
  {
    title: 'Smart WorkSpace',
    eyebrow: '01 / SOFTWARE',
    description: '围绕执行、思考、复盘与项目管理设计的 Obsidian 插件。关注信息组织与长期使用体验。',
    status: '持续开发',
    category: 'Obsidian · TypeScript · Product Design',
    href: '/projects/smart-workspace/',
    art: 'workspace',
  },
  {
    title: 'Interactive Physics Lab',
    eyebrow: '02 / EXPLORATION',
    description: '计划中的交互式物理概念实验室：从量子态的基变换出发，逐步构建可操作的可视化。',
    status: '研究构想',
    category: 'Physics · Visual Experiments',
    href: '/projects/physics-lab/',
    art: 'physics',
  },
];
