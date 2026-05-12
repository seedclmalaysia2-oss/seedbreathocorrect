import { Card, CardContent } from "@/components/ui/card";
import { Eye, ShieldCheck, Wind, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  oxygen: Wind,
  durability: ShieldCheck,
  lens: Eye,
  "asian-fit": Eye,
  eye: Eye,
};

export function FeatureCard({
  icon = "lens",
  title,
  summary,
}: {
  icon?: string;
  title: string;
  summary?: string;
}) {
  const Icon = ICONS[icon] ?? Eye;
  return (
    <Card className="border-slate-200">
      <CardContent className="p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
        {summary && <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>}
      </CardContent>
    </Card>
  );
}
