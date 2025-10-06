import React ,{useEffect , useState} from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

const EmployeeList = () => {

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);

    };
    fetchData();
  }, []);

  const deleteEmployee = (e,id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
    .then(()=>{
      if(employees){
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    })
  };

  const editEmployee = (e,id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  }

  const navigate = useNavigate();
  return (
    <div className = 'container mx-50 my-20'>
    <div>
      <button 
      onClick={()=> navigate("/addEmployee")}
      className='bg-slate-700 hover:bg-green-400  my-4 font-semibold px-40 py-5 text-amber-50'>Add Employee +</button>
    </div>

    <div className=''>
      <table className='Shadow'>
        <thead className='bg-slate-600'>
          <th className='px-25 py-3 uppercase tracking-wide'>Name</th>
          <th className='px-25 py-3 uppercase tracking-wide'>Phone</th>
          <th className='px-25 py-3 uppercase tracking-wide'>Email</th>
          <th className='px-25 py-3 uppercase tracking-wide'>Action</th>

        </thead>
        {!loading && employees && (
          <tbody>
          {employees.map((employee) => (
          <tr key = {employee.id} className ='hover:bg-green-400 hover:text-black bg-slate-300'>
            <td className = 'text-left px-6 py-4 whitespace-nowrap'>{employee.name}</td>
            <td className = 'text-left px-6 py-4 whitespace-nowrap'>{employee.phone}</td>
            <td className = 'text-left px-6 py-4 whitespace-nowrap'>{employee.email}</td>
            <td className = 'text-left px-10 py-4 whitespace-nowrap'>
              <a
              onClick={(e,id) =>editEmployee(e,employee.id)}
              className='hover:text-blue-600 hover:cursor-pointer'
              >Edit</a> | 
             <a 
              onClick={(e,id) =>deleteEmployee(e,employee.id)}
              className='hover:text-red-500 hover:cursor-pointer'>Delete </a>
            </td>
          </tr>
          ))}
          
        </tbody>
        )}
      </table>
    </div>
    </div>
  )
}

export default EmployeeList
