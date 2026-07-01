import { formatSpanishDate, getTimeGreeting } from "@/lib/format";

type HomeGreetingProps = {
  name?: string;
};

export function HomeGreeting({ name = "Juan" }: HomeGreetingProps) {
  const now = new Date();
  const greeting = getTimeGreeting(now);
  const date = formatSpanishDate(now);

  return (
    <header className="mb-16 md:mb-20">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        {greeting}, {name} 👋
      </h1>
      <p className="mt-4 text-lg text-muted-foreground md:text-xl">{date}</p>
    </header>
  );
}
