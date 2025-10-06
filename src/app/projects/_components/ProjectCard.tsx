import Card from "@/components/Card";
import type { ProjectDataType } from "@/types/Content";
import React from "react";

export default function ProjectCard({ data }: { data: ProjectDataType }) {
  // Extract key from data to avoid passing it as a spread prop
  const { key, ...cardProps } = data as any;
  
  switch (data.shape) {
    case "box":
      return <Card.Box {...cardProps} />;
    case "horizontal":
      return <Card.Horizontal {...cardProps} />;
    case "vertical":
      return <Card.Vertical {...cardProps} />;
  }
}
