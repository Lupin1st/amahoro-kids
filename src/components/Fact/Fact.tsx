export interface FactProps {
  value: string;
  description: string;
}

export default function Fact({ value, description }: FactProps) {
  return (
    <div className="w-56 flex flex-col items-center border-2  rounded-md p-5">
      <p className="text-4xl font-medium pb-4 text-center text-sky-500">{value}</p>
      <p className="text-xl text-center">{description}</p>
    </div>
  );
}
