import React from 'react'
import about from "../assets/about.jpg"
import VideoPlayer from './VideoPlayer'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div className='w-[100vw] lg:h-[70vh] min-h-[50vh] flex flex-wrap items-center justify-center gap-2 mb-[30px]'>
        <div className='lg:w-[40%] md:w-[80%] w-[100%] h-[100%] flex  items-center justify-center relative' >
            <img src={about} className='w-[80%] h-[90%] rounded-lg ' alt="" />
            <VideoPlayer />

        </div>
        <div className='lg:w-[50%] md:w-[70%] w-[100%] h-[100%] flex  items-start justify-center flex-col px-[35px] md:px-[80px]' >
          <div className='flex text-[18px] items-center justify-center gap-[20px]'>{t('about_us')} <TfiLayoutLineSolid  className='w-[40px] h-[40px]'/> </div>
          <div className='md:text-[45px] text-[35px] font-semibold'>{t('learning_growth_title')}</div>
          <div className='text-[15px] '>{t('learning_growth_desc')}</div>
          <div className=' w-[100%] lg:w-[60%]'>
            <div className='flex items-center justify-between  mt-[40px]'>
              <div className='flex items-center justify-center gap-[10px]'><BiSolidBadgeCheck className='w-[20px] h-[20px]'/>{t('simplified_learning')}</div>
              <div className='flex items-center justify-center gap-[10px]'><BiSolidBadgeCheck className='w-[20px] h-[20px]'/>{t('expert_trainers')}</div> 
            </div>
            <div className='flex items-center justify-between mt-[20px] '>
              <div className='flex items-center justify-center gap-[10px]'><BiSolidBadgeCheck className='w-[20px] h-[20px]'/>{t('big_experience')}</div>
              <div className='flex items-center justify-center gap-[10px]'><BiSolidBadgeCheck className='w-[20px] h-[20px]'/>{t('lifetime_access')}</div>

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default About
