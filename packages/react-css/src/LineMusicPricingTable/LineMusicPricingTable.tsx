import "./LineMusicPricingTable.css";

export interface LineMusicPlan {
  name: string;
  description?: string;
  price: string;
  originalPrice?: string;
}

export interface LineMusicPlanGroup {
  label: string;
  badge?: string;
  plans: LineMusicPlan[];
}

interface LineMusicPricingTableProps {
  groups: LineMusicPlanGroup[];
  note?: string;
  storeLinkLabel?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

export function LineMusicPricingTable({
  groups,
  note,
  storeLinkLabel,
  ctaLabel,
  onCta,
}: LineMusicPricingTableProps) {
  return (
    <div className="lm-pricing">
      <div className="lm-pricing__groups">
        {groups.map((group) => (
          <div key={group.label} className="lm-pricing__group">
            {group.badge && (
              <div className="lm-pricing__badge">{group.badge}</div>
            )}
            <div className={`lm-pricing__panel${group.badge ? " lm-pricing__panel--with-badge" : ""}`}>
              <div className="lm-pricing__header">{group.label}</div>
              <div className="lm-pricing__rows">
                {group.plans.map((plan) => (
                  <div key={plan.name} className="lm-pricing__row">
                    <div className="lm-pricing__plan-info">
                      <span className="lm-pricing__plan-name">{plan.name}</span>
                      {plan.description && (
                        <span className="lm-pricing__plan-desc">
                          {plan.description}
                        </span>
                      )}
                    </div>
                    <div className="lm-pricing__plan-price">
                      <span className="lm-pricing__price">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="lm-pricing__original">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {note && <p className="lm-pricing__note">{note}</p>}
      {storeLinkLabel && (
        <p className="lm-pricing__store-text">
          <span className="lm-pricing__store-link">{storeLinkLabel}</span>
        </p>
      )}
      {ctaLabel && (
        <button className="lm-pricing__cta" onClick={onCta}>
          {ctaLabel}
          <span aria-hidden="true"> ▶</span>
        </button>
      )}
    </div>
  );
}
