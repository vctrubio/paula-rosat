const CENTER_X = 500;
const CENTER_Y = 535;

function point(radius: number, angle: number) {
  return {
    x: CENTER_X + Math.cos(angle) * radius,
    y: CENTER_Y + Math.sin(angle) * radius,
  };
}

function branchPaths(radius: number, angle: number, depth: number): string[] {
  if (depth === 0) return [];

  const nextRadius = radius + (depth === 4 ? 17 : depth === 3 ? 14 : 11);
  const spread = depth === 4 ? 0.12 : depth === 3 ? 0.085 : 0.055;
  const start = point(radius, angle);

  return [-1, 1].flatMap((side) => {
    const nextAngle = angle + side * spread;
    const end = point(nextRadius, nextAngle);
    return [
      `M${start.x.toFixed(1)} ${start.y.toFixed(1)}Q${point((radius + nextRadius) / 2, angle).x.toFixed(1)} ${point((radius + nextRadius) / 2, angle).y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
      ...branchPaths(nextRadius, nextAngle, depth - 1),
    ];
  });
}

const branches = Array.from({ length: 20 }, (_, index) => {
  const angle = (index * Math.PI * 2) / 20;
  const start = point(100, angle);
  const end = point(116, angle);
  return [
    `M${start.x.toFixed(1)} ${start.y.toFixed(1)}L${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
    ...branchPaths(116, angle, 4),
  ];
}).flat();

export function BranchingCenter() {
  return (
    <g aria-hidden="true" className="map-center-branches">
      {branches.map((d, index) => <path key={index} d={d} />)}
    </g>
  );
}
