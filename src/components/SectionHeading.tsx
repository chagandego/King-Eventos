import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <p className={`eyebrow mb-5 ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
        {description && <p className="mt-5 text-cream/65">{description}</p>}
      </div>
    </Reveal>
  );
}
