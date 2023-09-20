export type SubSectionHeaderProps = {
  title: string;
};

export default function SubSectionHeader({ title }: SubSectionHeaderProps) {
  return (
    <>
      <h3 className="self-start text-3xl font-semibold mb-5 border-b-2 border-sky-500">{title}</h3>
    </>
  );
}
