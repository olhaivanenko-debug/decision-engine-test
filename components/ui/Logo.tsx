/**
 * Logo — Decision Engine brand mark.
 * Source: Figma node 1:548 (oyHAH50NoXZRXlBoG7LKq3)
 *
 * Renders the 32×32 icon only. Wrap with a wordmark if needed:
 *   <a href="/"><Logo /><span>Decision Engine</span></a>
 */

interface LogoProps {
  /** Icon size in px. Defaults to 32 (matches Figma source). */
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className }: LogoProps) {
  // Each instance gets unique gradient IDs to avoid SVG <defs> collisions
  // when the component is rendered more than once on the same page.
  const id = `de-logo-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background: two layered diagonal gradients from Figma */}
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z"
        fill={`url(#${id}-a)`}
      />
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z"
        fill={`url(#${id}-b)`}
      />
      {/* Icon: two-rectangle workflow motif */}
      <path
        d="M13.5 7.667C14.881 7.667 16 8.786 16 10.167V13.5C16 14.881 14.881 16 13.5 16H12.666V18.5C12.666 18.721 12.754 18.934 12.91 19.09C13.066 19.246 13.279 19.334 13.5 19.334H16V18.5C16 17.12 17.12 16 18.5 16H21.833C23.214 16 24.333 17.119 24.333 18.5V21.833C24.333 23.214 23.214 24.333 21.833 24.333H18.5C17.119 24.333 16 23.214 16 21.833V21H13.5C12.837 21 12.2 20.737 11.731 20.269C11.263 19.8 11 19.163 11 18.5V16H10.167C8.786 16 7.667 14.881 7.667 13.5V10.167C7.667 8.786 8.786 7.667 10.167 7.667H13.5ZM18.5 17.666C18.04 17.666 17.666 18.04 17.666 18.5V21.833C17.666 22.293 18.04 22.666 18.5 22.666H21.833C22.293 22.666 22.666 22.293 22.666 21.833V18.5C22.666 18.04 22.293 17.666 21.833 17.666H18.5ZM10.167 9.333C9.707 9.333 9.333 9.707 9.333 10.167V13.5C9.333 13.96 9.707 14.333 10.167 14.333H13.5C13.96 14.333 14.333 13.96 14.333 13.5V10.167C14.333 9.707 13.96 9.333 13.5 9.333H10.167Z"
        fill="white"
      />
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066FF" />
          <stop offset="1" stopColor="#00D4FF" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#155DFC" />
          <stop offset="1" stopColor="#2B7FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
