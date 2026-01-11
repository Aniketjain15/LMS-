import React from 'react'
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { SiGoogledataproc } from "react-icons/si";
import { BsClipboardDataFill } from "react-icons/bs";
import { SiOpenaigym } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ExploreCourses() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className='w-[100vw] min-h-[50vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center gap-4 px-[30px]'>
        <div className='w-[100%] lg:w-[350px] lg:h-[100%] h-[400px]  flex flex-col items-start justify-center gap-1 md:px-[40px]  px-[20px]'>
          <span className='text-[35px] font-semibold'>{t('explore')}</span>
          <span className='text-[35px] font-semibold'>{t('our_courses')}</span>
          <p className='text-[17px]'>{t('courses_desc')}</p>
          <button className='px-[20px] py-[10px] border-2 bg-[black] border-white text-white rounded-[10px] text-[18px] font-light flex gap-2 mt-[40px]' onClick={()=>navigate("/allcourses")}>{t('explore_courses')} <SiViaplay className='w-[30px] h-[30px] fill-white' /></button>

        </div>
        <div className='w-[720px] max-w-[90%] lg:h-[300px] md:min-h-[300px] flex items-center justify-center lg:gap-[60px] gap-[50px] flex-wrap mb-[50px] lg:mb-[0px]'>
          <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center '>
            <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '><TbDeviceDesktopAnalytics className='w-[60px] h-[60px] text-[#6d6c6c]' /></div>
            {t('web_development')}
            </div>
            <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center '>
            <div className='w-[100px] h-[90px] bg-[#d9fbe0] rounded-lg flex items-center justify-center '><LiaUikit className='w-[60px] h-[60px] text-[#6d6c6c]' /></div>
            {t('ui_ux_designing')}
            </div>
            <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#fcb9c8] rounded-lg flex items-center justify-center '><MdAppShortcut className='w-[50px] h-[50px] text-[#6d6c6c]' /></div>
            {t('app_development')}
            </div>
            <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '><FaHackerrank className='w-[55px] h-[55px] text-[#6d6c6c]' /></div>
            {t('ethical_hacking')}
            </div>
            <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#d9fbe0] rounded-lg flex items-center justify-center '><TbBrandOpenai className='w-[55px] h-[55px] text-[#6d6c6c]' /></div>
            {t('ai_ml')}
            </div>
            <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#fcb9c8] rounded-lg flex items-center justify-center '><SiGoogledataproc className='w-[45px] h-[45px] text-[#6d6c6c]' /></div>
            {t('data_science')}
            </div>
            <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center '>
            <div className='w-[100px] h-[90px] bg-[#fbd9fb] rounded-lg flex items-center justify-center '><BsClipboardDataFill className='w-[50px] h-[50px] text-[#6d6c6c]' /></div>
            {t('data_analytics')}
            </div>
            <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#d9fbe0] rounded-lg flex items-center justify-center '><SiOpenaigym className='w-[50px] h-[50px] text-[#6d6c6c]' /></div>
            {t('ai_tools')}
            </div>
        </div>

      
    </div>
  )
}

export default ExploreCourses
