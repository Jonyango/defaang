import { useState } from 'react';

interface QuestionPost {
  company?: string;
  location?: string;
  date?: Date;
  position?: string;
  question?: string;
  questionDesc?: string;
  category?: string;
  anonymous?: boolean;
}

const QuestionForm = () => {
  const [state, setState] = useState<QuestionPost>();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <div className='flex h-screen items-center justify-center bg-[#EBF3FB]'>
      <form className='w-[50%] rounded-xl bg-white'>
        <div className='mb-[1rem] rounded-t-xl bg-[#24245C] py-[2rem]'>
          <h3 className='text-center font-sans text-2xl font-medium text-[#EBF3FB]'>Submit a question</h3>
        </div>
        <div className='px-[3rem] pt-[1rem]'>
          <div>
            <label
              htmlFor='company'
              className='mt-[0.5rem] mb-2 block text-sm font-medium text-[#24245C] dark:text-gray-400'
            >
              Company
            </label>
            <select
              id='companies'
              className=' block w-full  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            >
              <option selected>Choose a Company</option>
              <option value='google'>Google</option>
              <option value='meta'>Meta</option>
              <option value='apple'>Apple</option>
              <option value='microsoft'>Microsoft</option>
              <option value='netflix'>Netflix</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='location'
              className='mb-2 mt-[0.5rem] block text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Location
            </label>
            <input type='text' id='location' onChange={handleChange} placeholder=' e.g Warsaw, Poland' />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='date'
              className='mt-[0.5rem] mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Date
            </label>
            <input type='date' id='date' onChange={handleChange} />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='position'
              className='mt-[0.5rem] mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Position Name
            </label>
            <input type='text' id='position' onChange={handleChange} placeholder='e.g Senior Data Analyst' />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='question'
              className='mb-2 mt-[0.5rem] block text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Question
            </label>
            <textarea id='question' name='question' rows={1} />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='questionDesc'
              className='mb-2 mt-[0.5rem] block text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Question Description
            </label>
            <textarea id='questionDesc' name='questionDesc' rows={1} />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='category'
              className='mb-2 mt-[0.5rem] block text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Category
            </label>
            <input type='text' id='category' onChange={handleChange} />
          </div>
        </div>
        <div className='flex items-center justify-center  text-center'>
          <button className='mb-[2rem]  mt-[1rem] w-[25%] rounded-full bg-[#24245C] p-3 text-[#EBF3FB]'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export { QuestionForm };
