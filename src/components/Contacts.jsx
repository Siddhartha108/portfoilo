import phone from "../assets/phone.png"
import env from "../assets/envelope-add.png"
import map from "../assets/map-marker.png"
import toast from 'react-hot-toast'
import { useForm } from "react-hook-form"
import axios from 'axios'


function Contacts() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message,
    }
    try{
      await axios.post("https://getform.io/f/pbqgrmqb", userInfo)
      toast.success("Your message has been sent")
    }catch(error){
      console.log(error);
      toast.error("Something went wrong")
    }
  }

  return (
    <div name="Contacts" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-14">

      <div className="mb-6">
        <div className="text-3xl font-bold mb-1">Contact me </div>
        <span className="text-[#A19FAD]">Get in touch</span>
      </div>


      <div className="sm:flex max-w-screen-lg items-center justify-around">


      {/* **Information container** */}
        <div className="mx-20 space-y-8 sm:order-1">

          <div className="flex">
            <img src={phone} alt="" className='w-6 h-7'/>

            <div className="ml-4">
              <h3 className="text-xl font-semibold text-[#6E57E0]">Call me</h3>
              <span className="text-[#A19FAD]">91+6396967302</span>
            </div>
          </div>

          <div className="flex">
            <img src={env} alt="" className='w-6 h-7'/>

            <div className="ml-4">
              <h3 className="text-xl font-semibold text-[#6E57E0]">Gmail</h3>
              <span className="text-[#A19FAD]">6004sharma@gmail.com</span>
            </div>
          </div>

          <div className="flex">
            <img src={map} alt="" className='w-6 h-7'/>

            <div className="ml-4">
              <h3 className="text-xl font-semibold text-[#6E57E0]">Location</h3>
              <span className="text-[#A19FAD]">India</span>
            </div>
          </div>

        </div>





        {/* form container */}
        <div className="flex flex-col items-center justify-center mt-5 sm:order-2">

          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/pbqgrmqb"
            // method='POST'
            className=" bg-[#c5c5c9] w-96 px-8 py-6 rounded-xl">

            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input type="text"
                {...register("name", { required: true })}
                id="name"
                name='name'
                placeholder='Enter Your Full Name'
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input type="text"
                {...register("email", { required: true })}
                id="email"
                name='email'
                placeholder='Enter Your Email'
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea type="text"
                {...register("message", { required: true })}
                id="message"
                name="message"
                placeholder='Type your Query'
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.message && <span>This field is required</span>}
            </div>

            <button type="submit" className="bg-[#6E57E0] hover:bg-[#5A43CB] text-white rounded-lg px-3 py-2">Send</button>
          </form>

        </div>


      </div>














    </div>
  )
}

export default Contacts
