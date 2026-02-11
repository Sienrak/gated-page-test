import { useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const ROICalculator = () => {
  const [hoursWeek, setHoursWeek] = useState("");
  const [costHour, setCostHour] = useState("");
  const [processCount, setProcessCount] = useState("");
  const [hoursSaved, setHoursSaved] = useState("");
  const [result, setResult] = useState<{ savings: string; breakdown: string } | null>(null);

  const calculate = () => {
    const hw = Number(hoursWeek || 0);
    const ch = Number(costHour || 0);
    const pc = Number(processCount || 0);
    const hs = Number(hoursSaved || 0);

    const totalHoursSaved = Math.max(0, pc * hs);
    const netSavings = Math.max(0, totalHoursSaved * ch);

    setResult({
      savings: formatCurrency(netSavings),
      breakdown: `Total hours saved: ${totalHoursSaved.toFixed(1)} hrs • Hourly cost: ${formatCurrency(ch)} • Net savings: ${formatCurrency(netSavings)}`,
    });
  };

  const inputClass =
    "w-full px-3.5 py-3 rounded-xl border text-[15px] outline-none focus:ring-2 focus:ring-primary/30 border-[rgba(230,200,204,0.8)]";

  return (
    <article className="glass-section p-7 grid gap-4">
      <h3 className="text-[22px] font-semibold m-0">ROI Calculator</h3>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Hours per week of repetitive work
          </label>
          <input type="number" min="0" step="0.1" placeholder="e.g. 20" value={hoursWeek} onChange={(e) => setHoursWeek(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Cost per hour of a marketing employee
          </label>
          <input type="number" min="0" step="0.01" placeholder="e.g. 45" value={costHour} onChange={(e) => setCostHour(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Number of processes you could automate
          </label>
          <input type="number" min="0" step="1" placeholder="e.g. 5" value={processCount} onChange={(e) => setProcessCount(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Hours saved per process
          </label>
          <input type="number" min="0" step="0.1" placeholder="e.g. 1.5" value={hoursSaved} onChange={(e) => setHoursSaved(e.target.value)} className={inputClass} />
        </div>

        <button
          type="button"
          onClick={calculate}
          className="sm:col-span-2 py-3 px-4 rounded-full border-none font-semibold cursor-pointer text-white transition-transform duration-150 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, hsl(var(--pink-1)), hsl(var(--lav-1)))" }}
        >
          Run calculation
        </button>

        <div className="sm:col-span-2 bg-white/70 rounded-2xl p-4 border border-[rgba(230,200,204,0.8)] grid gap-2">
          <div className="text-[28px] font-bold">{result?.savings ?? "$0"}</div>
          <div className="text-muted-foreground text-sm">
            {result?.breakdown ?? "Fill in the inputs to see your net savings."}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ROICalculator;
