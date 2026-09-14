

import { useEffect, useState } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Random incremental steps for a dynamic loading feel
                const increment = Math.floor(Math.random() * 8) + 3;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <main
            className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#2c0b47_0%,#150424_40%,#08010f_75%,#000000_100%)] text-white'
            aria-label='Learning-Management-System'
            aria-live='polite'
        >
            {/* Ambient Background Glows */}
            <div className='absolute h-96 w-96 rounded-full bg-[#e50914]/15 blur-3xl animate-pulse' />
            <div className='absolute h-80 w-80 rounded-full bg-purple-600/10 blur-3xl' />

            <div className='relative z-10 flex flex-col items-center gap-8 px-4'>
                {/* Brand / Title */}
                <div className='text-center space-y-2'>
                    <h1 className='text-4xl md:text-5xl font-extrabold tracking-wider bg-linear-to-r from-red-600 via-red-500 to-purple-400 bg-clip-text text-transparent drop-shadow-lg'>
                        Make friends
                    </h1>
                    <p className='text-xs uppercase tracking-[0.3em] text-gray-400 font-medium'>
                        Curating your experience
                    </p>
                </div>

               
                <div className='relative flex items-center justify-center w-36 h-36'>
                  
                    <svg className='w-full h-full -rotate-90 transform' viewBox='0 0 100 100'>
                       
                        <circle
                            cx='50'
                            cy='50'
                            r='42'
                            className='stroke-white/10'
                            strokeWidth='6'
                            fill='transparent'
                        />
                        
                        <circle
                            cx='50'
                            cy='50'
                            r='42'
                            className='stroke-red-600 transition-all duration-200 ease-out'
                            strokeWidth='6'
                            strokeDasharray='263.89' 
                            strokeDashoffset={263.89 - (263.89 * progress) / 100}
                            strokeLinecap='round'
                            fill='transparent'
                        />
                    </svg>

                   
                    <div className='absolute flex items-baseline justify-center'>
                        <span className='text-3xl font-bold tracking-tighter text-white'>
                            {progress}
                        </span>
                        <span className='text-xs font-semibold text-red-500 ml-0.5'>%</span>
                    </div>
                </div>

                
                <div className='w-64 md:w-80 flex flex-col items-center gap-3'>
                    <div className='h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-1px backdrop-blur-sm'>
                        <div
                            className='h-full bg-linear-to-r from-red-600 to-purple-500 rounded-full transition-all duration-200 ease-out shadow-[0_0_12px_rgba(229,9,20,0.8)]'
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    
                    <span className='text-xs text-gray-400 font-mono animate-pulse'>
                        {progress < 100 ? 'Loading recommendations...' : 'Ready!'}
                    </span>
                </div>

                <span className='sr-only'>Loading process at {progress}%</span>
            </div>
        </main>
    );
};

export default Preloader;
