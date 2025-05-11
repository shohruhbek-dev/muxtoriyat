import clsx from "clsx";
import Counter from "../../Card/counter";
import cn from "./style.module.scss";
import { useTranslation } from "react-i18next";
function CountersSec() {
  const { t } = useTranslation();
  return (
    <div className={clsx(cn["bigcounters"])}>
      <div className={clsx(cn["countersText"])}>
        <h1>{t("countersSecHeader")}</h1>

        <p>{t("countersSecSub")}</p>
      </div>

      <div className={clsx(cn["counters"])}>
        <Counter start={0} end={54} duration={1.5} text={t("articles")} />
        <Counter start={0} end={47} duration={1.5} text={t("books")} />
        <Counter start={0} end={16} duration={1.5} text={t("historyDoc")} />
        <Counter start={0} end={21} duration={1.5} text={t("autoRefer")} />
      </div>
    </div>
  );
}

export default CountersSec;
