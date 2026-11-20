import { useScrollProgress } from '../utils/useScrollProgress';

interface ReadingProgressBarProps {
  resetKey: string;
  label?: string;
}

export function ReadingProgressBar({
  resetKey,
  label = 'Reading progress',
}: ReadingProgressBarProps) {
  const progress = useScrollProgress(resetKey);
  const roundedPercent = Math.round(progress);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={roundedPercent}
      data-testid="reading-progress-bar"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-neutral-200/60 pointer-events-none"
    >
      <div
        data-testid="reading-progress-fill"
        className="h-full w-full bg-[#111111] origin-left will-change-transform transition-transform duration-75 ease-out motion-reduce:transition-none"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
