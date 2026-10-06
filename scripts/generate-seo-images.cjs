/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS loader for the TSX renderer. */
/* Render the editable card to public/og-image.png without a browser. */
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const { ImageResponse } = require("next/og");
const { createElement } = require("react");

// Compile the local TS/JSX sources using the project's existing TypeScript.
for (const extension of [".ts", ".tsx"]) {
  require.extensions[extension] = (module, filename) => {
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    });
    module._compile(outputText, filename);
  };
}

async function main() {
  const root = path.resolve(__dirname, "..");
  process.chdir(root);
  const renderCard = require("./seo-card.tsx").default;
  const response = await renderCard();
  fs.writeFileSync("public/og-image.png", Buffer.from(await response.arrayBuffer()));
  // A light backing keeps the green mark visible in both light and dark tabs.
  const svg = fs.readFileSync("public/icon.svg", "utf8");
  const icon = new ImageResponse(
    createElement("div", { style: { display: "flex", width: 48, height: 48, background: "#F7F4EB" } },
      createElement("img", { src: `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`, width: 48, height: 48 })),
    { width: 48, height: 48 },
  );
  fs.writeFileSync("public/icon.png", Buffer.from(await icon.arrayBuffer()));
  console.log("Generated public/og-image.png (1200×630) and public/icon.png (48×48).");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
