type PatientDetailsItemProps = {
  label: string;
  data: string;
}

export default function PatientDetailsItem({label, data}: PatientDetailsItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: {""}
      <span className="font-notmal normal-case">{data}</span>
    </p>
  )
}
