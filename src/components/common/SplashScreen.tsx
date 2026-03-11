import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SplashScreen = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 5000 // 5 seconds for loading
        const interval = 50 // update every 50ms
        const steps = duration / interval
        let currentStep = 0

        const timer = setInterval(() => {
            currentStep++
            setProgress(Math.min(100, Math.floor((currentStep / steps) * 100)))
            if (currentStep >= steps) clearInterval(timer)
        }, interval)

        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(10px)",
                transition: {
                    duration: 1.5,
                    ease: 'easeInOut',
                    filter: { delay: 1, duration: 0.5 }
                },
            }}
        >
            {/* Background Grid & Glow */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] z-0 pointer-events-none" />

            <div className="z-10 flex flex-col items-center w-full px-4">
                {/* Logo Container with Rotators */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="relative mb-10 p-2 flex items-center justify-center"
                >
                    {/* Outer slow dashed ring */}
                    <motion.div
                        className="absolute inset-[-20px] rounded-full border border-yellow-400/20 border-dashed"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Inner glowing ring */}
                    <motion.div
                        className="absolute inset-[-5px] rounded-full border-2 border-yellow-400/40"
                        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative bg-black rounded-full overflow-hidden w-36 h-36 md:w-44 md:h-44 shadow-[0_0_50px_rgba(255,215,0,0.2)]">
                        <img
                            src="/logo.jpeg"
                            alt="Trupti Enterprises Logo"
                            className="w-full h-full object-cover"
                        />
                        {/* Shimmer overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                            animate={{ translateX: ['-100%', '200%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>

                {/* Company Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black md:tracking-[0.3em] tracking-[0.1em] mb-3 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                        TRUPTI
                    </h1>
                    <h2 className="text-sm md:text-lg font-medium tracking-[0.4em] text-yellow-500/80">
                        ENTERPRISES
                    </h2>
                </motion.div>

                {/* Futuristic Loading Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="w-full max-w-[350px] flex flex-col items-center"
                >
                    {/* Loading Text */}
                    <div className="w-full flex justify-between text-[10px] md:text-xs font-mono text-gray-400 mb-2 px-1 tracking-widest uppercase">
                        <span>System_Loading...</span>
                        <span className="text-yellow-400">{progress}%</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden relative shadow-inner">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 shadow-[0_0_10px_rgba(255,215,0,0.6)]"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 5, ease: 'easeOut' }}
                        />
                    </div>

                    {/* Decorative Bottom Blocks */}
                    <div className="w-full flex justify-between gap-1 mt-3 px-2">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-0.5 w-full bg-yellow-400/30"
                                initial={{ opacity: 0.1 }}
                                animate={{ opacity: [0.1, 1, 0.1] }}
                                transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default SplashScreen
