import { CheckCircle2, ShieldAlert, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { getUiCopy } from '../data/uiCopy';
import type { Language } from '../utils/i18n';
import { GLHS_SCENARIOS, evaluateGlhsCommit, type GlhsScenario } from '../utils/portfolioLogic';

interface GlhsSimulatorProps {
  lang: Language;
}

export function GlhsSimulator({ lang }: GlhsSimulatorProps) {
  const [selectedId, setSelectedId] = useState<GlhsScenario['id']>('late-evidence');
  const scenario = GLHS_SCENARIOS.find((s) => s.id === selectedId) ?? GLHS_SCENARIOS[0];
  const result = evaluateGlhsCommit(scenario, lang);
  const ui = getUiCopy(lang);

  return (
    <div
      data-testid="glhs-simulator"
      className="border border-neutral-200 bg-[#FAFAFA] p-5 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-neutral-200">
        <div>
          <h4 className="text-sm font-medium text-[#111111]">{ui.glhs.heading}</h4>
          <p className="text-xs text-neutral-500 mt-0.5">{ui.glhs.subtitle}</p>
        </div>
        <span className="font-mono text-xs text-neutral-500 tabular-nums shrink-0">
          {ui.glhs.summaryStat}
        </span>
      </div>

      {/* Scenario Selector */}
      <div
        role="group"
        aria-label={ui.glhs.scenariosAria}
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2"
      >
        {GLHS_SCENARIOS.map((item) => {
          const active = item.id === scenario.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              aria-pressed={active}
              className={`text-left px-3.5 py-2.5 border text-xs sm:text-sm transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] ${
                active
                  ? 'bg-[#111111] text-white border-[#111111]'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
              }`}
            >
              <span className="block font-medium leading-snug">{item.label[lang]}</span>
              <span
                className={`block font-mono text-[11px] mt-0.5 tabular-nums ${
                  active ? 'text-neutral-300' : 'text-neutral-500'
                }`}
              >
                {ui.glhs.readPrefix}
                {item.readSnapshotVersion} · {ui.glhs.ledgerPrefix}
                {item.currentLedgerVersion} · {item.requestedScope}
              </span>
            </button>
          );
        })}
      </div>

      {/* Minimal Evaluation Output */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
        <div className="bg-white border border-neutral-200 p-4">
          <p className="text-xs text-neutral-500">{ui.glhs.snapshotContext}</p>
          <p className="font-mono text-sm text-[#111111] mt-1 tabular-nums">
            {ui.glhs.readPrefix}
            {scenario.readSnapshotVersion} → {ui.glhs.headPrefix}
            {scenario.currentLedgerVersion}
          </p>
          <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
            {scenario.description[lang]}
          </p>
        </div>

        <div className="bg-white border border-neutral-200 p-4">
          <p className="text-xs text-neutral-500">{ui.glhs.contractVerification}</p>
          <ul className="mt-2 space-y-1.5 text-xs font-mono text-neutral-700 tabular-nums">
            <li className="flex justify-between gap-2">
              <span>{ui.glhs.versionMatch}</span>
              <span>
                {scenario.readSnapshotVersion === scenario.currentLedgerVersion
                  ? ui.glhs.pass
                  : ui.glhs.drift}
              </span>
            </li>
            <li className="flex justify-between gap-2">
              <span>{ui.glhs.provenanceCheck}</span>
              <span>{scenario.hasEvidenceConflict ? ui.glhs.conflict : ui.glhs.clear}</span>
            </li>
            <li className="flex justify-between gap-2">
              <span>{ui.glhs.consentScope}</span>
              <span>
                {scenario.consentedScopes.includes(scenario.requestedScope)
                  ? ui.glhs.scoped
                  : ui.glhs.blocked}
              </span>
            </li>
          </ul>
        </div>

        <div
          data-testid="glhs-verdict"
          className={`border p-4 ${
            result.commitAllowed
              ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
              : 'bg-amber-50/50 border-amber-200 text-amber-950'
          }`}
        >
          <div className="flex items-center gap-2">
            {result.commitAllowed ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
            ) : result.decision === 'DISCLOSURE_WITHHELD' ? (
              <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
            ) : (
              <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
            )}
            <span className="text-xs font-medium">{result.statusText}</span>
          </div>
          <p className="text-xs mt-2 leading-relaxed opacity-90">{result.reason}</p>
          <p className="mt-2.5 pt-2 border-t border-current/10 font-mono text-[11px] tabular-nums">
            {ui.glhs.retainedLabel}: {result.criticalFactsRetained} · {ui.glhs.withheldLabel}:{' '}
            {result.disclosuresWithheld}
          </p>
        </div>
      </div>
    </div>
  );
}
