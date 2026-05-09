import { Button } from "@my-component-likes/react-css";
import "./App.css";

export default function App() {
  return (
    <div className="docs">
      <header className="docs-header">
        <h1>my-component-likes</h1>
        <p>React + Plain CSS component collection</p>
      </header>

      <main className="docs-main">
        <section className="docs-section">
          <h2>Button</h2>

          <div className="docs-block">
            <h3>Variants</h3>
            <div className="docs-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          <div className="docs-block">
            <h3>Sizes</h3>
            <div className="docs-row docs-row--align-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="docs-block">
            <h3>Disabled</h3>
            <div className="docs-row">
              <Button disabled>Primary</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="ghost" disabled>Ghost</Button>
            </div>
          </div>

          <div className="docs-block">
            <h3>Full Width</h3>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
