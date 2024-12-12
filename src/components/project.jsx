import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.jpg'
import project3Img from '../assets/project3.png'
import project4Img from '../assets/project4.jpg'




export default function Project() {
  return (
    <>
    <div className='bg-indigo-800 m-20 max-w-full'>
            <div className='grid justify-item-center m-10'>
                <h1 className='text-3x1 text-white mt-10'>Projects</h1>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-4 p-5'>
                    <div className=' max-w-md  mx-auto bg-white  rounded-xl
                    shadow-md overflow-hidden md:max-w-2x1 hover :animate-pulse '>
                        <div className='md:flex'>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                                    Hospital Management System 
                                </div>
                                <a herf ='#'>Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                a software that integrates a hospital's departments and automates internal
                                 activities to improve patient care and reduce costs
                                </p>
                            </div>
                            <div className="md:shrink-0 p-5">
                                <img src={project1Img} alt="project1" width={150} height={150}/>
                            </div>

                        </div>
                    </div>
                    <div className=' max-w-md  mx-auto bg-white  rounded-xl
                    shadow-md overflow-hidden md:max-w-2x1 hover :animate-pulse '>
                        <div className='md:flex'>
                        <div className="md:shrink-0 p-5">
                                <img src={project2Img} alt="project2" width={150} height={150}/>
                            </div>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                                    School Management System 
                                </div>
                                <a herf ='#'>Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                a software application that helps streamline and automate administrative tasks for educational institutions.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
                <hr/>
                <div className='grid grid-cols-2 gap-4 p-5'>
                    <div className=' max-w-md  mx-auto bg-white  rounded-xl
                    shadow-md overflow-hidden md:max-w-2x1 hover :animate-pulse '>
                        <div className='md:flex'>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                                    Post Management System 
                                </div>
                                <a herf ='#'>Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                a web-based application that helps post offices manage their transactions and customer service.
                                </p>
                            </div>
                            <div className="md:shrink-0 p-5">
                                <img src={project3Img} alt="project3" width={150} height={150}/>
                            </div>

                        </div>
                    </div>
                    <div className=' max-w-md  mx-auto bg-white  rounded-xl
                    shadow-md overflow-hidden md:max-w-2x1 hover :animate-pulse '>
                        <div className='md:flex'>
                        <div className="md:shrink-0 p-5">
                                <img src={project4Img} alt="project4" width={150} height={150}/>
                            </div>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                                    Inventory Management System 
                                </div>
                                <a herf ='#'>Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                a software application and set of processes that helps businesses track, manage, and organize their inventory
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
}
