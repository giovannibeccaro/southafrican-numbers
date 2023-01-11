import Head from "next/head";
import { useState } from "react";
import NumbersSection from "../components/NumbersSection";
import UserForm from "../components/UserForm";
import { CorrectedDataType, DataType } from "../types";

export default function Home() {
  const [correctNums, setCorrectNums] = useState<DataType[]>([]);
  const [incorrectNums, setIncorrectNums] = useState<DataType[]>([]);
  const [correctedNums, setCorrectedNums] = useState<CorrectedDataType[]>([]);

  return (
    <>
      <Head>
        <title>Southafrican Phone Numbers</title>
        <meta
          name="description"
          content="Checking for correctness of SA numbers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UserForm
          correctNums={correctNums}
          setCorrectNums={setCorrectNums}
          incorrectNums={incorrectNums}
          setIncorrectNums={setIncorrectNums}
          correctedNums={correctedNums}
          setCorrectedNums={setCorrectedNums}
        />
        <NumbersSection
          correctNums={correctNums}
          setCorrectNums={setCorrectNums}
          incorrectNums={incorrectNums}
          setIncorrectNums={setIncorrectNums}
          correctedNums={correctedNums}
          setCorrectedNums={setCorrectedNums}
        />
      </main>
    </>
  );
}
