interface Props {
  introCopy: {
    header: string;
    description: string;
    advice: string;
  };
}

export default function ExampleIntro({ introCopy }: Props) {
  return (
    <header>
      <h1>{introCopy.header}</h1>
      <p>{introCopy.description}</p>
      <p>{introCopy.advice}</p>
    </header>
  );
}
