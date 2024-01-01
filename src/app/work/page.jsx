import React from "react";
import { Badge } from "@/components/ui/badge";

async function getData() {
  const res = await fetch("http://localhost:3000/api");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const { projects } = await getData();
  return (
    <div className="p-3">
      <h1 className="text-4xl font-bold mb-3">My work</h1>
      <p>
        On a mission to build products consumers love, and along the way, teach
        the next generation of consumers. Here's a summary of my work so far.
      </p>
      <hr className="my-5 w-3xl mx-auto" />
      <div className="grid md:grid-cols-1 grid-cols-1 gap-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="w-full p-4 rounded-lg bg-slate-100"
          >
            <h2 className="font-bold">{project.title}</h2>
            <p className="line-clamp-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
