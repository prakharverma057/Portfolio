export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  logo: string;
};

export type SkillCategory = {
  title: string;
  skills: {
    name: string;
    logo: string;
  }[];
};
