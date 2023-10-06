import { Student } from "@/types/Student";

const StudentTable = (students: Student[]) => {
  return (
    <>
      <table className="table-fixed border-collapse border border-slate-500 max-w-4xl">
        <thead className="bg-gray-700 text-gray-100 font-normal">
          <tr>
            <th className="border border-slate-600 w-3/5">Name</th>
            <th className="border border-slate-600 w-1/5">Status</th>
            <th className="border border-slate-600 px-4" >Grade1</th>
            <th className="border border-slate-600 px-4">Grade2</th>
            <th className="border border-slate-600 w-2/5">Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            students?.map(student => (
              <tr key={student.id}>
                <td className="border border-slate-700 "> {student.name} </td>
                <td className="border border-slate-700">{student.active}</td>
                <td className="border border-slate-700">{student.grade1}</td>
                <td className="border border-slate-700">{student.grade2}</td>
                <td className="border border-slate-700">{ (student.grade1 + student.grade2) / 2 }</td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </>
  );
}

export default StudentTable;