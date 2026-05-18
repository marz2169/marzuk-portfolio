type Props = {
  tools?: string[];
  className?: string;
};

const DEFAULT_TOOLS = ["Microsoft 365", "Xero", "SAP", "Microsoft Dynamics 365", "Excel"];

const TOOL_COLORS: Record<string, string> = {
  "Microsoft 365": "bg-sky-50 text-sky-700 border-sky-200",
  Xero: "bg-cyan-50 text-cyan-700 border-cyan-200",
  SAP: "bg-blue-50 text-blue-700 border-blue-200",
  "Microsoft Dynamics 365": "bg-indigo-50 text-indigo-700 border-indigo-200",
  Excel: "bg-emerald-50 text-emerald-700 border-emerald-200",
  QuickBooks: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function ToolsUsed({ tools = DEFAULT_TOOLS, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
        Tools Used
      </span>
      <span className="text-slate-300">·</span>
      {tools.map((t) => (
        <span
          key={t}
          className={`text-xs font-semibold px-2 py-0.5 rounded border ${
            TOOL_COLORS[t] || "bg-slate-50 text-slate-700 border-slate-200"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
