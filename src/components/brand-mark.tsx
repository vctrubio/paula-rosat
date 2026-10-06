import { dropletPath } from "@/config/brand";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="12 12 176 176" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d={dropletPath} />
    </svg>
  );
}
