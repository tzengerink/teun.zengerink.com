import fs from "fs";
import { IncomingMessage, ServerResponse } from 'http'
import path from "path";
import slugify from "slugify";

interface ConfigCaption {
  key: string;
  caption: string;
}

interface ConfigItem {
  title: string;
  statement?: string;
  captions?: ConfigCaption[];
}

interface Photo {
  key: string;
  url: string;
  caption?: string;
}

export interface Project {
  title: string;
  slug: string;
  photos: Photo[];
  statement?: string;
}

const generatePhotos = (slug: string, captions: ConfigCaption[]): Photo[] => {
  const photosDirectory = path.join(process.cwd(), "public/photos", slug);
  const fileNames = fs.readdirSync(photosDirectory);

  return fileNames.map((filename) => {
    const key = path.basename(filename, ".jpg");
    const caption = captions?.find((c) => c.key == key)?.caption;

    return {
      key,
      caption,
      url: `photos/${slug}/${filename}`,
    };
  });
};

const generateProjects = (item: ConfigItem[]): Project[] => {
  return item.map((project) => {
    const slug = slugify(project.title, { lower: true });

    return {
      title: project.title,
      statement: project.statement,
      slug,
      photos: generatePhotos(slug, project.captions),
    };
  });
};

const config: ConfigItem[] = [
  {
    title: "Take, Make, Waste",
    statement: "TODO",
    captions: [
      {
        key: "01",
        caption: "Image 01: TODO",
      },
      {
        key: "02",
        caption: "Image 02: TODO",
      },
      {
        key: "03",
        caption: "Image 03: TODO",
      },
    ],
  },
  {
    title: "Point of no Return",
    statement: "TODO",
  },
  {
    title: "Under Your Nose",
    statement: "TODO",
  },
  {
    title: "Fortress",
    statement: "TODO",
  },
  {
    title: "Symbiosis",
    statement: "TODO",
  },
  {
    title: "Untitled",
  },
];

const handler = (request: IncomingMessage, response: ServerResponse): void => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ projects: generateProjects(config) }));
};

export default handler;
