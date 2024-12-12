import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import t3 from '../assets/t3.jpg'
import t4 from '../assets/t4.jpg'
import t5 from '../assets/t5.jpg'

export default function Testimonial() {
  return (
    <div className="flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row ">
        <div className='relative rounded-xl overflow-auto p-8
        hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto bg-white-shadow-lg ring-1 ring-black/S rounded-xl flex 
            items-center gap-6 dark:bg-slate-800 dark:highlight-white/s'>

                <img
                 src={t1}
                className="absolute -left-6 w-28 rounded-full shadow -lg"/>
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Ritwik Barman 
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                        Assistant Manager
                    </div>
                </div>
                
            </div>

        </div>
        <div className='relative rounded-xl overflow-auto p-8
        hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto bg-white-shadow-lg ring-1 ring-black/S rounded-xl flex 
            items-center gap-6 dark:bg-slate-800 dark:highlight-white/s'>

                <img
                 src={t2}
                className="absolute -left-6 w-28 rounded-full shadow -lg"/>
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Megha Rani Adak
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                        Assistant Manager
                    </div>
                </div>
                
            </div>

        </div>
        <div className='relative rounded-xl overflow-auto p-8
        hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto bg-white-shadow-lg ring-1 ring-black/S rounded-xl flex 
            items-center gap-6 dark:bg-slate-800 dark:highlight-white/s'>

                <img
                 src={t3}
                className="absolute -left-6 w-28 rounded-full shadow -lg"/>
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Suraj Das 
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                        Assistant Manager
                    </div>
                </div>
                
            </div>

        </div>
        <div className='relative rounded-xl overflow-auto p-8
        hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto bg-white-shadow-lg ring-1 ring-black/S rounded-xl flex 
            items-center gap-6 dark:bg-slate-800 dark:highlight-white/s'>

                <img
                 src={t4}
                className="absolute -left-6 w-28 rounded-full shadow -lg"/>
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Suvajit Ghosh 
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                        Assistant Manager
                    </div>
                </div>
                
            </div>

        </div>
        <div className='relative rounded-xl overflow-auto p-8
        hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto bg-white-shadow-lg ring-1 ring-black/S rounded-xl flex 
            items-center gap-6 dark:bg-slate-800 dark:highlight-white/s'>

                <img
                 src={t5}
                className="absolute -left-6 w-28 rounded-full shadow -lg"/>
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Arnab Sardar
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                        Assistant Manager
                    </div>
                </div>
                
            </div>

        </div>

    </div>
  )
}
