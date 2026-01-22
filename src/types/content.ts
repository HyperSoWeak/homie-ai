export interface Content {
  lang: string;
  nav: {
    pricing: string;
    cta: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    save: string;
    plans: {
      name: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }[];
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
      solutionTitle: string;
      solutionDesc: string;
    }[];
  };
  solution: {
    title: string;
    subtitle: string;
    today: string;
    date: string;
    items: {
      title: string;
      desc: string;
      summary: string;
      reason: string;
    }[];
  };
  solutionSchedules: {
    time: string;
    oldTime?: string;
    task: string;
    type: string;
    duration: string;
    tag?: string;
  }[][];
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
  midSectionCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    text: string;
    cta: string;
  };
  eaLink: string;
}
