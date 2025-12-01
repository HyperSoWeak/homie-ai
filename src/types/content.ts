export interface Content {
  nav: {
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    cta: string;
  };
  problem: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  solution: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  dynamicScheduling: {
    title: string;
    subtitle: string;
    items: string[];
    footer: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  companions: {
    title: string;
    items: {
      name: string;
      role: string;
      desc: string;
      quote: string;
    }[];
  };
  footer: {
    text: string;
    cta: string;
  };
}
