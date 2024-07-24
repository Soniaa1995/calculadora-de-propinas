import { Dispatch, SetStateAction } from "react";

const propinaOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type PropinaFormProps = {
    setPropina: Dispatch<SetStateAction<number>>,
    propina: number
}

export default function PropinaForm({setPropina, propina} : PropinaFormProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina</h3>

      <form>
        {propinaOptions.map((propinaOption) => (
          <div key={propinaOption.id} className="flex gap-2">
            <label htmlFor={propinaOption.id}>{propinaOption.label}</label>
            <input
              id={propinaOption.id}
              type="radio"
              name="propina"
              value={propinaOption.value}
              onChange={e => setPropina(+e.target.value)} //ese + convierte el string en tipo number
              checked={propinaOption.value === propina}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
