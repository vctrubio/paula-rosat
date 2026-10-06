export function MapConnections() {
  return (
    <g aria-hidden="true" fill="none" pointerEvents="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Fine, undirected links keep the central idea connected without crossing any copy. */}
      <g stroke="#8d927f" strokeWidth="1.2" strokeDasharray="2 6" opacity=".58">
        <path d="M500 344C500 351 500 358 500 366" />
        <path d="M325 428C340 428 355 428 370 428" />
        <path d="M675 428C660 428 645 428 630 428" />
        <path d="M325 648C342 648 358 648 375 648" />
        <path d="M675 648C658 648 642 648 625 648" />
        <path d="M500 704C500 741 500 780 500 815" />
      </g>

      {/* The river in Territorio splits into two hand-drawn currents. */}
      <g stroke="#71816a">
        <path d="M500 238C500 247 499 253 500 260" strokeWidth="2.5" opacity=".78" />
        <path d="M500 260C460 258 438 252 406 265C371 279 350 274 325 287C310 295 301 300 294 307" strokeWidth="2.6" opacity=".72" />
        <path d="M493 263C453 268 427 257 398 274C360 290 330 284 302 304" strokeWidth=".9" opacity=".6" />
        <path d="M500 260C540 258 562 252 594 265C629 279 650 274 675 287C690 295 700 300 707 307" strokeWidth="2.6" opacity=".72" />
        <path d="M507 263C547 268 573 257 602 274C640 290 670 284 699 304" strokeWidth=".9" opacity=".6" />
        <path d="M289 299L294 307L302 303M699 303L707 307L710 298" strokeWidth="1.5" opacity=".8" />
      </g>

      {/* Materia becomes Experiencia along the outer edge, clear of the caption. */}
      <path d="M88 470C51 487 28 521 41 559" stroke="#71816a" strokeWidth="1.8" opacity=".75" />
      <path d="M41 559C46 580 63 599 84 613" stroke="#b8873f" strokeWidth="1.9" opacity=".8" />
      <path d="M84 613C91 618 99 620 104 626" stroke="#8b4e50" strokeWidth="2" opacity=".82" />
      <path d="M94 625L104 626L99 616" stroke="#8b4e50" strokeWidth="1.5" opacity=".8" />
      <g fill="#71816a" opacity=".8">
        <path d="M47 518C44 524 43 526 43 528A4 4 0 0 0 51 528C51 526 49 522 47 518Z" />
        <path d="M35 539C32 545 31 547 31 549A4 4 0 0 0 39 549C39 547 37 543 35 539Z" />
      </g>
      <path d="M57 579C54 585 53 587 53 589A4 4 0 0 0 61 589C61 587 59 583 57 579Z" fill="#b8873f" opacity=".8" />

      {/* Conocimiento becomes Transformación on the opposite outer edge. */}
      <path d="M912 470C949 487 972 521 959 559" stroke="#8b4e50" strokeWidth="1.8" opacity=".75" />
      <path d="M959 559C954 580 937 599 916 613" stroke="#b8873f" strokeWidth="1.9" opacity=".8" />
      <path d="M916 613C909 618 901 620 896 626" stroke="#8b4e50" strokeWidth="2" opacity=".8" />
      <path d="M906 625L896 626L901 616" stroke="#8b4e50" strokeWidth="1.5" opacity=".8" />
      <g fill="#8b4e50" opacity=".75">
        <path d="M953 518C950 524 949 526 949 528A4 4 0 0 0 957 528C957 526 955 522 953 518Z" />
        <path d="M965 539C962 545 961 547 961 549A4 4 0 0 0 969 549C969 547 967 543 965 539Z" />
      </g>
      <path d="M943 579C940 585 939 587 939 589A4 4 0 0 0 947 589C947 587 945 583 943 579Z" fill="#b8873f" opacity=".8" />

      {/* The outer paths run beneath the hands and meet the ochre strands they hold. */}
      <g stroke="#b8873f" opacity=".8">
        <path d="M238 811C269 827 278 850 308 857C340 865 349 885 384 891C415 896 442 879 467 866" strokeWidth="2.6" />
        <path d="M764 810C733 826 722 851 692 858C665 871 659 894 651 915C638 944 611 953 583 954" strokeWidth="2.6" />
      </g>
    </g>
  );
}
