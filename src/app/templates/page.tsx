import type { Metadata } from "next";
import TemplateGallery from "@/components/TemplateGallery";

export const metadata: Metadata = {
  title: "Templates — Browse All Digital Surprises",
  description:
    "Browse our complete collection of interactive surprise websites for birthdays, love celebrations, anniversaries, and more. Test live demos and order via Instagram.",
};

export default function TemplatesPage() {
  return (
    <main>
      <TemplateGallery />
    </main>
  );
}
