import { Metadata } from "next";
import NotFoundComponent from "@/components/shared/notFound";

export const metadata: Metadata = {
  title: "Error 404",
};

export default function NotFound() {
  return (
    <NotFoundComponent
      title="Error 404!"
      description="Oopsies! This page does not exist on billybrown.dev. While you're here, you can read some featured post below."
    />
  );
}