import { useState } from "react";
import "./LineHelpFeedback.css";

interface LineHelpFeedbackProps {
  question?: string;
  description?: string;
  thanksYes?: string;
  thanksNo?: string;
  onYes?: () => void;
  onNo?: () => void;
}

export function LineHelpFeedback({
  question = "この情報は役に立ちましたか？",
  description = "寄せられたご意見をもとに改善を行っています。ぜひ感想をお聞かせください。",
  thanksYes = "ご回答ありがとうございます！",
  thanksNo = "ご意見ありがとうございます。改善に努めます。",
  onYes,
  onNo,
}: LineHelpFeedbackProps) {
  const [answered, setAnswered] = useState<"yes" | "no" | null>(null);

  const handleYes = () => {
    setAnswered("yes");
    onYes?.();
  };

  const handleNo = () => {
    setAnswered("no");
    onNo?.();
  };

  return (
    <div className="line-feedback">
      <div className="line-feedback__bubble">{question}</div>
      {answered === null ? (
        <>
          <p className="line-feedback__desc">{description}</p>
          <div className="line-feedback__actions">
            <button
              className="line-feedback__btn line-feedback__btn--yes"
              onClick={handleYes}
            >
              <span className="line-feedback__emoji" aria-hidden="true">
                😊
              </span>
              役に立った
            </button>
            <button
              className="line-feedback__btn line-feedback__btn--no"
              onClick={handleNo}
            >
              <span className="line-feedback__emoji" aria-hidden="true">
                😞
              </span>
              いいえ
            </button>
          </div>
        </>
      ) : (
        <p className="line-feedback__thanks">
          {answered === "yes" ? thanksYes : thanksNo}
        </p>
      )}
    </div>
  );
}
