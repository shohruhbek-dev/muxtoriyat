import clsx from "clsx";
import Counter from "../../Card/counter";
import cn from "./style.module.scss";
import {useTranslation} from "react-i18next";
import useInView from "../../../hooks/useInView";
import {useEffect, useState} from "react";
import {getArticlesCount, getBooksCount, getDocsCount} from "../../../services/source.js";

function CountersSec() {
    const {t} = useTranslation();
    const [ref, isInView] = useInView({threshold: 0.3});

    const [bookCount, setBookCount] = useState(8);
    const [articleCount, setArticleCount] = useState(8);
    const [docCount, setDocCount] = useState(8);

    async function fetchData() {
        const b = await getBooksCount();
        const a = await getArticlesCount();
        const d = await getDocsCount();
        console.log("Book Count:", b);
        console.log("Article Count:", a);
        console.log("Document Count:", d);
        setBookCount(b);
        setArticleCount(a);
        setDocCount(d);
    }

    useEffect(() => {
        fetchData();
    }, []);


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
                            end={articleCount}
                            duration={1.5}
                            text={t("articles")}
                        />
                        <Counter
                            key={isInView + "-books"}
                            start={0}
                            end={bookCount}
                            duration={1.5}
                            text={t("books")}
                        />
                        <Counter
                            key={isInView + "-historyDoc"}
                            start={0}
                            end={docCount}
                            duration={1.5}
                            text={t("historyDoc")}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default CountersSec;
