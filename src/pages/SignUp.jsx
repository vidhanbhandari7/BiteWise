import { useEffect } from "react";
import { useNavigate } from "react-router";
const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        navigate("/WelcomePage");
      }
    });
  }, [navigate]);

  return (
    <div className='flex h-screen justify-center align-middle items-center bg-gradient-to-b from-[#fef9ef] via-[#fffbf5] to-[#fffdfc] font-poppins'>
      <div className='rounded-lg text-card-foreground shadow-xl bg-orange-100/40 border border-orange-200/50 h-120 w-120'>
        <div className='flex flex-col p-6 space-y-1'>
          <h4 className='tracking-tight text-2xl font-medium'>Sign Up</h4>
          <p className='text-sm text-muted-foreground'>
            Create an account to get started
          </p>
          <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-7'>
            Name
          </p>
          <input
            type='text'
            className='flex h-10 w-full rounded-md border border-orange-200/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur input-focus pt-0.2'
            id='name'
            placeholder='Enter your name'
          />

          <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-7'>
            Email
          </p>
          <input
            type='text'
            className='flex h-10 w-full rounded-md border border-orange-200/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur input-focus pt-0.2'
            id='name'
            placeholder='your email'
          />

          <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pt-7'>
            Password
          </p>
          <input
            type='password'
            className='flex h-10 w-full rounded-md border border-orange-200/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur input-focus pt-0.2'
            id='name'
            placeholder='password'
          />

          <button
            className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 outline outline-orange-600/90 h-10 px-4 py-2 w-full bg-orange-400 mt-6 hover:text-white duration-300'
            onClick={() => navigate("/WelcomePage")}
          >
            Sign Up
          </button>

          <div className='mt-4 text-center text-sm '>
            Already have an account?
            <a
              className='text-orange-600 hover:underline ml-0.5 cursor-pointer'
              href='/SignIn'
              onClick={() => navigate("/SignIn")}
            >
              SignIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
