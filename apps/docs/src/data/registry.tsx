import { useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import {
  Button,
  AmazonButton,
  YoutubeFilterChips,
  YoutubeButton,
  YoutubeSearchBar,
  YoutubeActionBar,
  YoutubeBottomNav,
  YoutubeSideMenu,
  ChatGPTSuggestionChip,
  RakutenButton,
  RakutenShortcutLinks,
  RakutenAccordion,
  RakutenNotificationBanner,
  RakutenToggle,
  RakutenModal,
  RakutenPlanCard,
  GoogleNewsCard,
  GoogleContextMenu,
} from "@my-component-likes/react-css";
import buttonTsxRaw from "../../../../packages/react-css/src/Button/Button.tsx?raw";
import buttonCssRaw from "../../../../packages/react-css/src/Button/Button.css?raw";
import amazonButtonTsxRaw from "../../../../packages/react-css/src/AmazonButton/AmazonButton.tsx?raw";
import amazonButtonCssRaw from "../../../../packages/react-css/src/AmazonButton/AmazonButton.css?raw";
import youtubeFilterChipsTsxRaw from "../../../../packages/react-css/src/YoutubeFilterChips/YoutubeFilterChips.tsx?raw";
import youtubeFilterChipsCssRaw from "../../../../packages/react-css/src/YoutubeFilterChips/YoutubeFilterChips.css?raw";
import youtubeButtonTsxRaw from "../../../../packages/react-css/src/YoutubeButton/YoutubeButton.tsx?raw";
import youtubeButtonCssRaw from "../../../../packages/react-css/src/YoutubeButton/YoutubeButton.css?raw";
import youtubeSearchBarTsxRaw from "../../../../packages/react-css/src/YoutubeSearchBar/YoutubeSearchBar.tsx?raw";
import youtubeSearchBarCssRaw from "../../../../packages/react-css/src/YoutubeSearchBar/YoutubeSearchBar.css?raw";
import youtubeActionBarTsxRaw from "../../../../packages/react-css/src/YoutubeActionBar/YoutubeActionBar.tsx?raw";
import youtubeActionBarCssRaw from "../../../../packages/react-css/src/YoutubeActionBar/YoutubeActionBar.css?raw";
import youtubeBottomNavTsxRaw from "../../../../packages/react-css/src/YoutubeBottomNav/YoutubeBottomNav.tsx?raw";
import youtubeBottomNavCssRaw from "../../../../packages/react-css/src/YoutubeBottomNav/YoutubeBottomNav.css?raw";
import youtubeSideMenuTsxRaw from "../../../../packages/react-css/src/YoutubeSideMenu/YoutubeSideMenu.tsx?raw";
import youtubeSideMenuCssRaw from "../../../../packages/react-css/src/YoutubeSideMenu/YoutubeSideMenu.css?raw";
import chatGPTSuggestionChipTsxRaw from "../../../../packages/react-css/src/ChatGPTSuggestionChip/ChatGPTSuggestionChip.tsx?raw";
import chatGPTSuggestionChipCssRaw from "../../../../packages/react-css/src/ChatGPTSuggestionChip/ChatGPTSuggestionChip.css?raw";
import rakutenButtonTsxRaw from "../../../../packages/react-css/src/RakutenButton/RakutenButton.tsx?raw";
import rakutenButtonCssRaw from "../../../../packages/react-css/src/RakutenButton/RakutenButton.css?raw";
import rakutenShortcutLinksTsxRaw from "../../../../packages/react-css/src/RakutenShortcutLinks/RakutenShortcutLinks.tsx?raw";
import rakutenShortcutLinksCssRaw from "../../../../packages/react-css/src/RakutenShortcutLinks/RakutenShortcutLinks.css?raw";
import rakutenAccordionTsxRaw from "../../../../packages/react-css/src/RakutenAccordion/RakutenAccordion.tsx?raw";
import rakutenAccordionCssRaw from "../../../../packages/react-css/src/RakutenAccordion/RakutenAccordion.css?raw";
import rakutenNotificationBannerTsxRaw from "../../../../packages/react-css/src/RakutenNotificationBanner/RakutenNotificationBanner.tsx?raw";
import rakutenNotificationBannerCssRaw from "../../../../packages/react-css/src/RakutenNotificationBanner/RakutenNotificationBanner.css?raw";
import rakutenToggleTsxRaw from "../../../../packages/react-css/src/RakutenToggle/RakutenToggle.tsx?raw";
import rakutenToggleCssRaw from "../../../../packages/react-css/src/RakutenToggle/RakutenToggle.css?raw";
import rakutenModalTsxRaw from "../../../../packages/react-css/src/RakutenModal/RakutenModal.tsx?raw";
import rakutenModalCssRaw from "../../../../packages/react-css/src/RakutenModal/RakutenModal.css?raw";
import rakutenPlanCardTsxRaw from "../../../../packages/react-css/src/RakutenPlanCard/RakutenPlanCard.tsx?raw";
import rakutenPlanCardCssRaw from "../../../../packages/react-css/src/RakutenPlanCard/RakutenPlanCard.css?raw";
import googleNewsCardTsxRaw from "../../../../packages/react-css/src/GoogleNewsCard/GoogleNewsCard.tsx?raw";
import googleNewsCardCssRaw from "../../../../packages/react-css/src/GoogleNewsCard/GoogleNewsCard.css?raw";
import googleContextMenuTsxRaw from "../../../../packages/react-css/src/GoogleContextMenu/GoogleContextMenu.tsx?raw";
import googleContextMenuCssRaw from "../../../../packages/react-css/src/GoogleContextMenu/GoogleContextMenu.css?raw";

export interface CodeFile {
  label: string;
  code: string;
}

export interface ComponentEntry {
  id: string;
  name: string;
  description?: string;
  referenceUrl?: string;
  previewStyle?: CSSProperties;
  preview: ReactNode;
  files: CodeFile[];
}

export interface SiteEntry {
  id: string;
  label: string;
  components: ComponentEntry[];
}

// ── YouTube preview helpers ──────────────────────────────

const YT_DARK: CSSProperties = {
  background: "#0f0f0f",
  padding: "1.25rem 1rem",
};

function YoutubeFilterChipsPreview() {
  const [selected, setSelected] = useState("all");
  const chips = [
    { id: "all", label: "すべて" },
    { id: "music", label: "音楽" },
    { id: "mix", label: "ミックス" },
    { id: "podcast", label: "ポッドキャスト" },
    { id: "live", label: "ライブ" },
    { id: "animation", label: "アニメーション" },
    { id: "recent", label: "最近アップロードされた動画" },
    { id: "watched", label: "視聴済み" },
    { id: "discover", label: "新しい動画の発見" },
  ];
  return (
    <YoutubeFilterChips
      chips={chips}
      selected={selected}
      onSelect={setSelected}
    />
  );
}

const MicIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V20H9v2h6v-2h-2v-2.08A7 7 0 0 0 19 11h-2z" />
  </svg>
);
const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);
const HomeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);
const ShortsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.77 10.32l-1.2-.5L18 9.06c1.65-.87 2.52-2.72 2.1-4.46-.42-1.74-1.99-2.98-3.78-2.98H8c-.55 0-1 .45-1 1v13.36c0 1.43 1.16 2.59 2.59 2.59.75 0 1.42-.3 1.91-.79L17 12l.91-.91c.18-.18.31-.39.4-.62l.08-.2c.3-.74.2-1.57-.31-2.16l-.31.21zM10 4.56l4.15 2.44L10 9.44V4.56zm0 8.83V9.44l4.15 2.44-4.15 2.51z" />
  </svg>
);
const SubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10 18v-2.67l5 2.67-5 2.67V18zm7-14H7C5.9 4 5 4.9 5 6v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H7V6h10v12z" />
  </svg>
);
const PersonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const ClockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v5.25l4.5 2.67.75-1.23-3.75-2.22V7z" />
  </svg>
);
const ListIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
  </svg>
);
const ThumbUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2l-.01-.01L23 10z" />
  </svg>
);
const DownloadIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

// ── registry ─────────────────────────────────────────────

export const SITES: SiteEntry[] = [
  {
    id: "generic",
    label: "コンポーネント",
    components: [
      {
        id: "button",
        name: "Button",
        description:
          "Primary / Secondary / Ghost / Danger の4バリアント、3サイズ対応。",
        preview: (
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
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
  {
    id: "amazon",
    label: "Amazon",
    components: [
      {
        id: "amazon-button",
        name: "Amazon Button",
        description:
          "カートに入れる / 今すぐ買う / 注文を確定する の3バリアント。",
        preview: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
              maxWidth: "280px",
            }}
          >
            <AmazonButton variant="add-to-cart">カートに入れる</AmazonButton>
            <AmazonButton variant="buy-now">今すぐ買う</AmazonButton>
            <AmazonButton variant="place-order">注文を確定する</AmazonButton>
          </div>
        ),
        files: [
          { label: "TypeScript", code: amazonButtonTsxRaw },
          { label: "CSS", code: amazonButtonCssRaw },
        ],
      },
    ],
  },
  {
    id: "google",
    label: "Google",
    components: [
      {
        id: "google-news-card",
        name: "News Card",
        description:
          "サムネイル・タイトル・メタ情報を横並びで表示するニュースカード。⋮ボタンでオプションメニューを開く。",
        preview: (() => {
          function GoogleNewsCardPreview() {
            const [menuOpen, setMenuOpen] = useState(false);
            return (
              <div style={{ maxWidth: "480px", position: "relative" }}>
                <GoogleNewsCard
                  title="F-Droid、オープンソースのAndroidアプリストアが存続の危機に直面"
                  sourceName="GIGAZINE"
                  publishedAt="3時間前"
                  thumbnailSrc="https://placehold.co/92x92/e8eaed/5f6368?text=img"
                  onMore={() => setMenuOpen((v) => !v)}
                />
                {menuOpen && (
                  <div style={{ position: "absolute", top: "48px", right: 0, zIndex: 10 }}>
                    <GoogleContextMenu
                      items={[
                        { id: "hide", label: "表示しない", icon: <span style={{ fontSize: "1.1rem" }}>🚫</span> },
                        { id: "not-interested", label: "F-Droidに興味がない", icon: <span style={{ fontSize: "1.1rem" }}>👎</span> },
                        { id: "hide-source", label: "GIGAZINEのコンテンツを表示しない", icon: <span style={{ fontSize: "1.1rem" }}>👁️</span> },
                        { id: "feedback", label: "フィードバックを送信", icon: <span style={{ fontSize: "1.1rem" }}>✉️</span> },
                      ]}
                    />
                  </div>
                )}
              </div>
            );
          }
          return <GoogleNewsCardPreview />;
        })(),
        files: [
          { label: "TypeScript", code: googleNewsCardTsxRaw },
          { label: "CSS", code: googleNewsCardCssRaw },
        ],
      },
      {
        id: "google-context-menu",
        name: "Context Menu",
        description:
          "ニュースカードの⋮ボタンから開くコンテキストメニュー。アイコン＋ラベルのリスト形式。",
        preview: (
          <GoogleContextMenu
            items={[
              { id: "hide", label: "表示しない", icon: <span style={{ fontSize: "1.1rem" }}>🚫</span> },
              { id: "not-interested", label: "F-Droidに興味がない", icon: <span style={{ fontSize: "1.1rem" }}>👎</span> },
              { id: "hide-source", label: "GIGAZINEのコンテンツを表示しない", icon: <span style={{ fontSize: "1.1rem" }}>👁️</span> },
              { id: "feedback", label: "フィードバックを送信", icon: <span style={{ fontSize: "1.1rem" }}>✉️</span> },
            ]}
          />
        ),
        files: [
          { label: "TypeScript", code: googleContextMenuTsxRaw },
          { label: "CSS", code: googleContextMenuCssRaw },
        ],
      },
    ],
  },
  {
    id: "rakuten-mobile",
    label: "楽天モバイル",
    components: [
      {
        id: "rakuten-button",
        name: "Button",
        description:
          "filled / outline / text の3バリアント。楽天モバイルのマゼンタピンク (#e4007f) を使用。",
        preview: (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <RakutenButton variant="filled">
              新規／乗り換えお申し込み
            </RakutenButton>
            <RakutenButton variant="outline">
              お近くのショップを探す
            </RakutenButton>
            <RakutenButton variant="text">キャンセル</RakutenButton>
          </div>
        ),
        files: [
          { label: "TypeScript", code: rakutenButtonTsxRaw },
          { label: "CSS", code: rakutenButtonCssRaw },
        ],
      },
      {
        id: "rakuten-shortcut-links",
        name: "Shortcut Links",
        description: "↓アイコン + テキスト + アイコンの横並びナビゲーション。",
        preview: (
          <RakutenShortcutLinks
            links={[
              {
                id: "plan",
                label: "最強おうちプログラム",
                icon: <span>🎁</span>,
              },
              { id: "price", label: "製品代実質0円", icon: <span>🖩</span> },
              {
                id: "turbo",
                label: "Rakuten Turboとは",
                icon: <span>📡</span>,
              },
              { id: "area", label: "対応エリア", icon: <span>🗺</span> },
            ]}
          />
        ),
        files: [
          { label: "TypeScript", code: rakutenShortcutLinksTsxRaw },
          { label: "CSS", code: rakutenShortcutLinksCssRaw },
        ],
      },
      {
        id: "rakuten-accordion",
        name: "Accordion",
        description: "ピンク丸アイコン付きのFAQアコーディオン。1項目のみ開閉。",
        preview: (
          <RakutenAccordion
            items={[
              {
                id: "q1",
                question:
                  "キャンペーンの特典は2回線目以降のお申し込みも対象になりますか？",
                answer:
                  "Rakuten Turbo 5G 製品代金実質0円キャンペーンは2回線目以降も適用対象となります。一方で最強おうちプログラムは1回線目のみが適用対象となります。",
              },
              {
                id: "q2",
                question: "併用不可キャンペーンはありますか？",
                answer:
                  "一部のキャンペーンは併用できない場合があります。各キャンペーンの詳細ページをご確認ください。",
              },
              {
                id: "q3",
                question: "楽天ひかりとRakuten Turboの違いを教えてください",
                answer:
                  "楽天ひかりは光回線サービス、Rakuten Turboはホームルーターサービスです。工事不要で使えるのがRakuten Turboの特長です。",
              },
            ]}
          />
        ),
        files: [
          { label: "TypeScript", code: rakutenAccordionTsxRaw },
          { label: "CSS", code: rakutenAccordionCssRaw },
        ],
      },
      {
        id: "rakuten-notification-banner",
        name: "Notification Banner",
        description:
          "タイトル・説明・アクションボタン・閉じるボタンを持つ通知バナー。",
        previewStyle: {
          background: "#f5f5f5",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column" as const,
          gap: "0.75rem",
        },
        preview: (
          <>
            <RakutenNotificationBanner
              title="15分（標準）通話かけ放題を初めてのお申し込みで1カ月無料！"
              description="1回15分以内の国内通話がかけ放題、国内SMSの送受信が無料になる！"
              actionLabel="15分（標準）通話かけ放題に加入する"
              onClose={() => {}}
            />
            <RakutenNotificationBanner
              title="留守番電話を初めてのお申し込みで1カ月無料！"
              description="電話に出られない時でも相手の伝言を預かります！"
              actionLabel="留守番電話に加入する"
              onClose={() => {}}
            />
          </>
        ),
        files: [
          { label: "TypeScript", code: rakutenNotificationBannerTsxRaw },
          { label: "CSS", code: rakutenNotificationBannerCssRaw },
        ],
      },
      {
        id: "rakuten-toggle",
        name: "Toggle",
        description: "ピンクのトグルスイッチ。ON/OFF の状態を視覚的に表示。",
        preview: (() => {
          function Preview() {
            const [checked, setChecked] = useState(true);
            return (
              <RakutenToggle
                checked={checked}
                onChange={setChecked}
                label="請求先住所として使う"
              />
            );
          }
          return <Preview />;
        })(),
        files: [
          { label: "TypeScript", code: rakutenToggleTsxRaw },
          { label: "CSS", code: rakutenToggleCssRaw },
        ],
      },
      {
        id: "rakuten-modal",
        name: "Modal",
        description:
          "タイムアウト警告・確認ダイアログ等に使う。ESCキー・オーバーレイクリックで閉じる。",
        preview: (() => {
          function ModalPreview() {
            const [open1, setOpen1] = useState(false);
            const [open2, setOpen2] = useState(false);
            return (
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <RakutenButton variant="outline" onClick={() => setOpen1(true)}>
                  タイムアウト警告
                </RakutenButton>
                <RakutenButton variant="outline" onClick={() => setOpen2(true)}>
                  確認ダイアログ
                </RakutenButton>
                <RakutenModal
                  open={open1}
                  onClose={() => setOpen1(false)}
                  icon={
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f0a030"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  title="楽天モバイルからログアウトします"
                  subtext="00:00:41"
                >
                  <RakutenButton fullWidth onClick={() => setOpen1(false)}>
                    ログインしたままにする
                  </RakutenButton>
                </RakutenModal>
                <RakutenModal
                  open={open2}
                  onClose={() => setOpen2(false)}
                  title="本当にログアウトしますか？"
                >
                  <RakutenButton fullWidth onClick={() => setOpen2(false)}>
                    ログアウト
                  </RakutenButton>
                  <RakutenButton
                    variant="text"
                    fullWidth
                    onClick={() => setOpen2(false)}
                  >
                    キャンセル
                  </RakutenButton>
                </RakutenModal>
              </div>
            );
          }
          return <ModalPreview />;
        })(),
        files: [
          { label: "TypeScript", code: rakutenModalTsxRaw },
          { label: "CSS", code: rakutenModalCssRaw },
        ],
      },
      {
        id: "rakuten-plan-card",
        name: "Plan Card",
        description:
          "ラジオ選択式のプランカード。選択時に青紫ボーダーとドットで状態表示。",
        preview: (() => {
          function PlanCardPreview() {
            const [selected, setSelected] = useState("standard");
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  maxWidth: "480px",
                }}
              >
                <RakutenPlanCard
                  label="データ利用量に応じて自動的に安くなる"
                  name="Rakuten最強プラン"
                  price="980円〜2,980円／月※1"
                  note="1,078円〜3,278円（税込）"
                  selected={selected === "standard"}
                  onSelect={() => setSelected("standard")}
                />
                <RakutenPlanCard
                  label="定額でギガ無制限使い放題＋U-NEXT見放題"
                  name="Rakuten最強U-NEXT"
                  price="3,980円／月※1　4,378円（税込）"
                  selected={selected === "unext"}
                  onSelect={() => setSelected("unext")}
                  badge={
                    <span
                      style={{
                        display: "inline-block",
                        background: "#e4007f",
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.625rem",
                        borderRadius: "4px",
                      }}
                    >
                      初めてお申し込みの方は3カ月毎月1,100円相当を楽天ポイントで還元※4
                    </span>
                  }
                />
              </div>
            );
          }
          return <PlanCardPreview />;
        })(),
        files: [
          { label: "TypeScript", code: rakutenPlanCardTsxRaw },
          { label: "CSS", code: rakutenPlanCardCssRaw },
        ],
      },
    ],
  },
  {
    id: "youtube",
    label: "YouTube",
    components: [
      {
        id: "youtube-filter-chips",
        name: "Filter Chips",
        description:
          "横スクロール対応のフィルターチップ。選択状態を白背景で表示。",
        previewStyle: YT_DARK,
        preview: <YoutubeFilterChipsPreview />,
        files: [
          { label: "TypeScript", code: youtubeFilterChipsTsxRaw },
          { label: "CSS", code: youtubeFilterChipsCssRaw },
        ],
      },
      {
        id: "youtube-button",
        name: "Button",
        description:
          "丸型アイコンボタン（マイク）とピル型ボタン（＋作成）の2バリアント。",
        previewStyle: YT_DARK,
        preview: (
          <div
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <YoutubeButton variant="icon" aria-label="音声検索">
              <MicIcon />
            </YoutubeButton>
            <YoutubeButton variant="pill">
              <PlusIcon />
              作成
            </YoutubeButton>
          </div>
        ),
        files: [
          { label: "TypeScript", code: youtubeButtonTsxRaw },
          { label: "CSS", code: youtubeButtonCssRaw },
        ],
      },
      {
        id: "youtube-search-bar",
        name: "Search Bar",
        description: "検索入力バー。Enterキーまたは虫眼鏡ボタンで検索を発火。",
        previewStyle: YT_DARK,
        preview: (
          <YoutubeSearchBar placeholder="検索" style={{ maxWidth: "480px" }} />
        ),
        files: [
          { label: "TypeScript", code: youtubeSearchBarTsxRaw },
          { label: "CSS", code: youtubeSearchBarCssRaw },
        ],
      },
      {
        id: "youtube-action-bar",
        name: "Action Bar",
        description: "いいね/低評価をグループピルに統合したアクションバー。",
        previewStyle: YT_DARK,
        preview: <YoutubeActionBar likeCount={677} />,
        files: [
          { label: "TypeScript", code: youtubeActionBarTsxRaw },
          { label: "CSS", code: youtubeActionBarCssRaw },
        ],
      },
      {
        id: "youtube-bottom-nav",
        name: "Bottom Navigation",
        description:
          "モバイル向けボトムナビゲーション。アイコン＋ラベルの縦並び。",
        previewStyle: { background: "#0f0f0f" },
        preview: (
          <YoutubeBottomNav
            activeId="home"
            onSelect={() => {}}
            items={[
              { id: "home", label: "ホーム", icon: <HomeIcon /> },
              { id: "shorts", label: "ショート", icon: <ShortsIcon /> },
              { id: "subs", label: "登録チャンネル", icon: <SubIcon /> },
              { id: "me", label: "マイページ", icon: <PersonIcon /> },
            ]}
          />
        ),
        files: [
          { label: "TypeScript", code: youtubeBottomNavTsxRaw },
          { label: "CSS", code: youtubeBottomNavCssRaw },
        ],
      },
      {
        id: "youtube-side-menu",
        name: "Side Menu",
        description: "アイコン＋ラベルのサイドメニューリスト。",
        previewStyle: { background: "#0f0f0f", padding: "0" },
        preview: (
          <YoutubeSideMenu
            items={[
              { id: "channel", label: "チャンネル", icon: <PersonIcon /> },
              { id: "history", label: "履歴", icon: <ClockIcon /> },
              { id: "playlist", label: "再生リスト", icon: <ListIcon /> },
              { id: "watch-later", label: "後で見る", icon: <ClockIcon /> },
              { id: "liked", label: "高く評価した動画", icon: <ThumbUpIcon /> },
              { id: "offline", label: "オフライン", icon: <DownloadIcon /> },
              {
                id: "more",
                label: "もっと見る",
                icon: <ChevronDownIcon />,
                more: true,
              },
            ]}
          />
        ),
        files: [
          { label: "TypeScript", code: youtubeSideMenuTsxRaw },
          { label: "CSS", code: youtubeSideMenuCssRaw },
        ],
      },
    ],
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    components: [
      {
        id: "chatgpt-suggestion-chip",
        name: "Suggestion Chip",
        description:
          "アイコン付きのピル型サジェストボタン。チャット画面の起点アクションに使用。",
        previewStyle: {
          background: "#0d0d0d",
          padding: "1.5rem 1.25rem",
          display: "flex",
          gap: "0.625rem",
          flexWrap: "wrap" as const,
        },
        preview: (
          <>
            <ChatGPTSuggestionChip
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              }
            >
              画像を作成
            </ChatGPTSuggestionChip>
            <ChatGPTSuggestionChip
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              }
            >
              記述または編集
            </ChatGPTSuggestionChip>
            <ChatGPTSuggestionChip
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              }
            >
              何かを調べる
            </ChatGPTSuggestionChip>
          </>
        ),
        files: [
          { label: "TypeScript", code: chatGPTSuggestionChipTsxRaw },
          { label: "CSS", code: chatGPTSuggestionChipCssRaw },
        ],
      },
    ],
  },
];
