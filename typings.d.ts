type Route = {
  params: {
    work: string;
    blog: string;
  };
};

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

interface Description {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

interface Service extends Base {
  name: string;
  slug: string;
}

interface Blog extends Base {
  name: string;
  slug: string;
  description: Description;
  cover_image: any;
  date: string;
  categories: any[];
  reading_time: number;
  content: Description[];
}

interface Work extends Base {
  name: string;
  slug: string;
  description: Description;
  images: any[];
  client: string;
  year: string;
  timeline: number;
  services: Service[];
  website: string;
  challenge: Description[];
  solution: Description[];
  result: Description[];
}
