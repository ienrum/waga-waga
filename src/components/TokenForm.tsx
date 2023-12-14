import { useState } from 'react';
export default function TokenForm() {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    localStorage.setItem('token', input);
    location.reload();
    setInput('');
  };

  return (
    <div className='flex content-center gap-2'>
      <input
        type='text'
        className='flex-grow rounded-md'
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleClick} className=' rounded-md bg-slate-200 p-4'>
        Submit
      </button>
    </div>
  );
}
