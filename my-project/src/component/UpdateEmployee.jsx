import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'
const UpdateEmployee = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
    });

    useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    }).catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    }

    const updateEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response) =>{
            console.log("saved",response);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);

        });
        
    }
    const navigate = useNavigate();

  return (
    <div className='max-w-xl mx-100 my-30 bg-slate-700 rounded shadow py-8 px-8'>
        <div className='text-4xl tracking-wider font-bold text-center py-4 px-8 text-white'>
            <p >Update Employee Detail</p>
        </div>

        <div className ='mx-10 my-2'>
            <input 
            type='text' 
            name='name'
            value ={employee.name}
            onChange={(e)=> handleChange(e)}
            className='w-full py-2 my-4 bg-white ' placeholder='Name'></input>

            <input type='number'
            name='phone'
            value ={employee.phone}
            onChange={(e)=> handleChange(e)}
             className='w-full py-2 my-4 bg-white' placeholder='phone'></input>


            <input type='email'
            name='email'
            value ={employee.email}
            onChange={(e)=> handleChange(e)}
            className='w-full py-2 my-4 bg-white' placeholder='Email'></input>

        </div>

        <div className = 'flex my-4 space-x-4 px-24'>
            <button 
            onClick={updateEmployee}
            className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'>Update</button>

            {/* <button
            onClick={reset}
            className='bg-blue-300 hover:bg-green-700 py-2 px-6 rounded'>Clear</button> */}

            <button 
            onClick={()=> navigate("/")}
            className='bg-red-400 hover:bg-green-700 py-2 px-6 rounded'>Cancel</button>

        </div>
        
      
    </div>
  )
}

export default UpdateEmployee
