'use client'
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const messages = [
    { id: 1, text: "May your Buna never run out and your wifi never lag in 2018." },
    { id: 2, text: "May your emails be short, your meetings brief, and your coffee always strong." },
    { id: 3, text: "May your brand shine brighter than the Enkutatash sun." },
    { id: 4, text: "May your hand shake get firm." },
    { id: 5, text: "May your clients laugh at all your jokes." },
    { id: 6, text: "May you perfect your signature." },
    { id: 7, text: "May your social posts go viral faster than the Tella after two cups." },
    { id: 8, text: "May you find a plug outlet wherever you are" },
    { id: 9, text: "May you never got pulled over by traffic" },
    { id: 10, text: "May your files never corrupt and your drafts always autosave." },
    { id: 11, text: "May ገቢዎች have mercy on you." },
    { id: 12, text: "May you discover hidden talents this year." },
    { id: 13, text: "May your revenue make it to the end of the month" },
    { id: 14, text: "May your dreams become your reality." },
    { id: 15, text: "May you find some forgotten cash in your clothes." },
    { id: 16, text: "May your phone battery never drop below 10%." },
    { id: 17, text: "May your parking always be free." },
    { id: 18, text: "May your sugar level go down." },
    { id: 19, text: "May your Sundays be uninterrupted." },
    { id: 20, text: "May your CBE always work." },
    { id: 21, text: "May your team never steal your snacks." },
    { id: 22, text: "May you finish all your to-do lists" },
    { id: 23, text: "May your back pain forget you." },
    { id: 24, text: "May your collaborations be smoother than shiro wot." },
    { id: 25, text: "May your tires never pop" },
    { id: 26, text: "May your partnership with Gezat keep delivering sparks and smiles." }
]

const Messages = () => {
    const [currentMessage, setCurrentMessage] = useState<string | null>(null)
    const [expanded, setExpanded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const usedMessages = useRef<Set<number>>(new Set())

    const getRandomMessage = () => {
        if (usedMessages.current.size === messages.length) {
            usedMessages.current.clear()
        }

        const availableMessages = messages.filter(msg => !usedMessages.current.has(msg.id))

        const randomIndex = Math.floor(Math.random() * availableMessages.length)
        const selectedMessage = availableMessages[randomIndex]

        usedMessages.current.add(selectedMessage.id)

        return selectedMessage.text
    }

    const handleClick = () => {
        if (!expanded) {
            setExpanded(true)
            setIsLoading(true)

            setTimeout(() => {
                const newMessage = getRandomMessage()
                setCurrentMessage(newMessage)
                setIsLoading(false)
            }, 1500)
        } else {
            setIsLoading(true)
            setTimeout(() => {
                const newMessage = getRandomMessage()
                setCurrentMessage(newMessage)
                setIsLoading(false)
            }, 800)
        }
    }

    return (
        <div className="flex items-center justify-center  w-full">
            <motion.div
                className="bg-primary text-white cursor-pointer flex items-center justify-center overflow-hidden"
                style={{ fontFamily: 'Helixa, Arial, sans-serif' }}
                onClick={handleClick}
                animate={{
                    width: expanded ? 600 : 300,
                    height: expanded ? 250 : 60,
                    borderRadius: expanded ? 24 : 30
                }}
                transition={{
                    duration: 1.0,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                }}
                whileHover={{ scale: expanded ? 1 : 1.05 }}
                whileTap={{ scale: 0.98 }}
            >
                {!expanded ? (
                    <motion.span
                        className="text-xl font-semibold px-6"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        See Your New Year Wish ✨
                    </motion.span>
                ) : isLoading ? (
                    <motion.div
                        className="p-6 text-center w-11/12 md:w-full flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Spinning loader */}
                        <motion.div
                            className="w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-4"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.p
                            className="text-lg font-semibold"
                            style={{ fontFamily: 'Sora, Arial, sans-serif' }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Preparing your wish... ✨
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="p-6 text-center w-11/12 md:w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <motion.h3
                            className="text-xl font-bold mb-3 text-gray-200 flex justify-center items-center gap-2"
                            style={{ fontFamily: 'Sora, Arial, sans-serif' }}
                        >
                            <Image src="/Img/sunflower.png" alt="Logo" width={40} height={40} />
                            Your New Year Wish
                            <Image src="/Img/sunflower.png" alt="Logo" width={40} height={40} />
                        </motion.h3>
                        <motion.p
                            className="text-2xl mb-4 text-white"
                            style={{ fontFamily: 'Sora, Arial, sans-serif' }}
                        >
                            {currentMessage}
                        </motion.p>
                        <motion.button
                            className="bg-white text-primary cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100"
                            onClick={(e) => {
                                e.stopPropagation()
                                handleClick()
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Another Wish 🔮
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default Messages