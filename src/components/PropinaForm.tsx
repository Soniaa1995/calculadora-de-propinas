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
    setPropina: Dispatch<SetStateAction<number>>
}

export default function PropinaForm({setPropina} : PropinaFormProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina</h3>

      <form>
        {propinaOptions.map((propina) => (
          <div key={propina.id} className="flex gap-2">
            <label htmlFor={propina.id}>{propina.label}</label>
            <input
              id={propina.id}
              type="radio"
              name="propina"
              value={propina.value}
              onChange={e => setPropina(+e.target.value)} //ese + convierte el string en tipo number
            />
          </div>
        ))}
      </form>
    </div>
  );
}
