import './styles.css';

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <h2 className="text-4xl font-semibold pb-5">{title}</h2>
      {subtitle && <p className="text-xl pb-5 text-center">{subtitle}</p>}
      <div className="divider border-t-2 border-sky-500 pb-8"></div>
    </>
  );
}
