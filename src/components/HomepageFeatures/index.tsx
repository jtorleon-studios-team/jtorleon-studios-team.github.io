import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
};

function Feature({ title }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  if (siteConfig.customFields == null || siteConfig.customFields.modules == null) {
    throw new Error("missing siteConfig.customFields.modules");
  }

  const modules = siteConfig.customFields.modules as string[];

  const FeatureList: FeatureItem[] = modules.map((v) => ({
    title: v,
  }));

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
