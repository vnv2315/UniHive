import React from 'react'

const contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", `${import.meta.env.VITE_API_KEY}`);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Submitted Successfully :)");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className='bg-blue-100 flex flex-col justify-center items-center p-6 contact'>
        <div className='text-center font-bold text-blue-900 mt-9'>
            <h5>CONTACT US</h5>
            <h1 className='text-3xl text-red-700'>Got questions? </h1>
        </div>
        <div className='flex flex-wrap justify-center mt-18 gap-8'>
            <div className='flex flex-col max-w-lg cursor-default'>
                <h2 className='text-2xl font-semibold mb-5'>Reach out!</h2> 
                <p className='mb-8 text-gray-700'> We are here to help you with any questions or concerns you may have. 
                    Please fill out the form and we will get back to you as soon as possible.</p>
                <h2 className='text-1xl font-semibold mb-2'>Contact Information</h2>
                <p className='text-gray-700'>Email:
                        <span className='text-red-700 cursor-pointer'> support@UniHive.com</span></p>
                <p className='text-gray-700'>Phone:
                        <span className='text-red-700 cursor-pointer'> +123 456 789</span></p>
                <p className='text-gray-700'>Address:
                        <span className='text-red-700 cursor-pointer'> 123 Main St, Anytown, USA</span></p>
            </div>
            <div className='flex flex-col gap-5 '>
                <form onSubmit={onSubmit}>
                    <h2 className='text-sm font-semibold mb-2 text-gray-500'>Name</h2>
                    <input type="text" placeholder='Enter your Name' spellCheck="false" className='p-2 mb-5 outline-none border-none bg-white rounded border-0 text-sm px-3 w-96' />
                    <h5 className='text-sm font-semibold mb-2 text-gray-500'>Phone Number</h5>
                    <input type="text" placeholder='Enter your Phone Number' spellCheck="false" className='p-2 mb-5 outline-none border-none bg-white rounded border-0 text-sm px-3 w-96' />
                    <h2 className='text-sm font-semibold mb-2 text-gray-500'>Email</h2>
                    <input type="text" placeholder='Enter your email' spellCheck="false" className='p-2 mb-5 outline-none border-none bg-white rounded border-0 text-sm px-3 w-96' />
                    <h2 className='text-sm font-semibold mb-2 text-gray-500'>Write your message here</h2>
                    <textarea  placeholder="Your message" spellCheck="false" className="p-2 mb-5 bg-white rounded border-none outline-none text-sm px-3 w-96 h-32 text-start align-text-top pt-2" ></textarea>                    
                    <div><button className='bg-red-700 text-white rounded px-4 py-2 text-sm'>Send Message</button></div>                    
                </form>
                <span>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default contact
