import { useState } from "react";
import "./CodeViewer.css";

interface CodeFile {
  label: string;
  code: string;
}

interface CodeViewerProps {
  files: CodeFile[];
}

export function CodeViewer({ files }: CodeViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeFile = files[activeIndex];

  function handleCopy() {
    navigator.clipboard.writeText(activeFile.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="code-viewer">
      <div className="code-viewer__header">
        <div className="code-viewer__tabs" role="tablist">
          {files.map((file, i) => (
            <button
              key={file.label}
              role="tab"
              aria-selected={i === activeIndex}
              className={`code-viewer__tab${i === activeIndex ? " code-viewer__tab--active" : ""}`}
              onClick={() => setActiveIndex(i)}
            >
              {file.label}
            </button>
          ))}
        </div>
        <button
          className={`code-viewer__copy${copied ? " code-viewer__copy--done" : ""}`}
          onClick={handleCopy}
          aria-label="コードをコピー"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="code-viewer__pre">
        <code>{activeFile.code}</code>
      </pre>
    </div>
  );
}
