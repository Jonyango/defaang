import { useState } from 'react';

interface QuestionPost{
	company?: string
  location?: string
  date?: Date,
	position?:string,
	question?:string,
	questionDesc?:string,
	category?:string,
	anonymous?:boolean
}


const QuestionForm=()=>{

	const [state, setState] = useState<QuestionPost>();
  const [submitted, setSubmitted] = useState(false);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

	return <div className='flex justify-center items-center h-screen border-red-200 border-2'>
		  <form className='w-[50%]'>
				
				<div className='bg-[#24245C] py-[1.5rem] rounded-t-xl mb-[1rem]'>
					<h3 className='text-center text-[#EBF3FB] font-medium text-2xl font-sans'>Submit a question</h3>
				</div>
				<div>

<select id="companies" className=" text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a Company</option>
  <option value="google">Google</option>
  <option value="meta">Meta</option>
  <option value="apple">Apple</option>
  <option value="microsoft">Microsoft</option>
	<option value="netflix">Netflix</option>

</select>
				</div>

				<div className='flex flex-col'>
				<label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-[0.5rem]">Location</label>
				<input type="text" id='location' />
				</div>

				<div className='flex flex-col'>
				<label htmlFor="date" className="block mt-[0.5rem] mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Date</label>
				<input type="date" id='date' />
				</div>
				
				<div className='flex flex-col'>
				<label htmlFor="position" className="block mt-[0.5rem] mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Position</label>
				<input type="text" id='position' />
				</div>

				<div className='flex flex-col'>
				<label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-[0.5rem]">Question</label>
				<textarea id="question" name="question" rows={1}/>
				</div>
			</form>
	</div>
}


export {QuestionForm}
