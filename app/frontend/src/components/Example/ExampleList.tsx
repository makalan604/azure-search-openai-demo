import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "As an investor in 2023, what should I worry about and what industries should I look at?",
        value: "As an investor in 2023, what should I worry about and what industries should I look at?"
    },
    { text: "What is the vacancy rate of Toronto office and industrial?", value: "What is the vacancy rate of Toronto?" },
    { text: "What are types of commerical real estate properties?", value: "What are types of commerical real estate properties?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
