import type { ReactNode } from "react";
import { Button } from "@my-component-likes/react-css";
import buttonTsxRaw from "../../../../packages/react-css/src/Button/Button.tsx?raw";
import buttonCssRaw from "../../../../packages/react-css/src/Button/Button.css?raw";

export interface CodeFile {
  label: string;
  code: string;
}

export interface ComponentEntry {
  id: string;
  name: string;
  description?: string;
  referenceUrl?: string;
  preview: ReactNode;
  files: CodeFile[];
}

export interface SiteEntry {
  id: string;
  label: string;
  components: ComponentEntry[];
}

export const SITES: SiteEntry[] = [
  {
    id: "generic",
    label: "コンポーネント",
    components: [
      {
        id: "button",
        name: "Button",
        description: "Primary / Secondary / Ghost / Danger の4バリアント、3サイズ対応。",
        preview: (
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        ),
        files: [
          { label: "TypeScript", code: buttonTsxRaw },
          { label: "CSS", code: buttonCssRaw },
        ],
      },
    ],
  },
  { id: "amazon", label: "Amazon", components: [] },
  { id: "google", label: "Google", components: [] },
  { id: "rakuten-mobile", label: "楽天モバイル", components: [] },
];
