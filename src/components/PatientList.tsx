import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

export default function PatientList() {
  // const { patients } = usePatientStore();
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">List of Patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your patients {""}
            <span className="text-indigo-600 font-bold">
              Patients and Appointments
            </span>
          </p>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are no patients registered yet.
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients {""}
            <span className="text-indigo-600 font-bold">
              and will be shown here
            </span>
          </p>
        </>
      )}
    </div>
  );
}