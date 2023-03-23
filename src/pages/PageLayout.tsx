import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
