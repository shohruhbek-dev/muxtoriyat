import clsx from "clsx";
import Counter from "../../Card/counter";
import cn from "./style.module.scss";
import { useTranslation } from "react-i18next";
import useInView from "../../../hooks/useInView";

function CountersSec() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <div className={clsx(cn["bigcounters"])} ref={ref}>
      <div className={clsx(cn["countersText"])}>
        <h1 className="font-poppins font-medium text-[64px] leading-none tracking-normal align-middle text-[#021321]">
          {t("countersSecHeader")}
        </h1>
        <p className="font-poppins font-normal text-[22.7px] leading-[36px] tracking-normal align-middle">
          {t("countersSecSub")}
        </p>
      </div>

      <div className={clsx(cn["counters"])}>
        {isInView && (
          <>
            <Counter
              key={isInView + "-articles"}
              start={0}
              end={54}
              duration={1.5}
              text={t("articles")}
            />
            <Counter
              key={isInView + "-books"}
              start={0}
              end={47}
              duration={1.5}
              text={t("books")}
            />
            <Counter
              key={isInView + "-historyDoc"}
              start={0}
              end={16}
              duration={1.5}
              text={t("historyDoc")}
            />
            <Counter
              key={isInView + "-autoRefer"}
              start={0}
              end={21}
              duration={1.5}
              text={t("autoRefer")}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CountersSec;
