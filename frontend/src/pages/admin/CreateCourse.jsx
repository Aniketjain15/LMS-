import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../App";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const CreateCourse = () => {
    let navigate = useNavigate()
    let [loading,setLoading]=useState(false)
    const { t } = useTranslation();
    const [title,setTitle] = useState("")
    const [category,setCategory] = useState("")

    const CreateCourseHandler = async () => {
        setLoading(true)
        try {
            const result = await axios.post(serverUrl + "/api/course/create" , {title , category} , {withCredentials:true})
            console.log(result.data)
            toast.success("Course Created")
            navigate("/courses")
            setTitle("")
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(error.response.data.message)
        }
        
    }

    return (
        
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="max-w-xl w-[600px] mx-auto p-6 bg-white shadow-md rounded-md mt-10 relative">
                <FaArrowLeftLong  className='top-[8%] absolute left-[5%] w-[22px] h-[22px] cursor-pointer' onClick={()=>navigate("/courses")}/>
                <h2 className="text-2xl font-semibold mb-6 text-center">{t('create_course')}</h2>

                <form className="space-y-5" onSubmit={(e)=>e.preventDefault()}>
                    {/* Course Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('course_title')}
                        </label>
                        <input
                            type="text"
                            placeholder={t('enter_course_title')}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[black]"
                            onChange={(e)=>setTitle(e.target.value)} value={title}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('category')}
                        </label>
                        <select
                            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[black]"
                            onChange={(e)=>setCategory(e.target.value)}
                        >
                            <option value="">{t('select_category')}</option>
                            <option value="App Development">{t('app_development')}</option>
                             <option value="AI/ML">{t('ai_ml')}</option>
                            <option value="AI Tools">{t('ai_tools')}
                            </option>
                             <option value="Data Science">{t('data_science')}</option>
                            <option value="Data Analytics">{t('data_analytics')}</option>
                            <option value="Ethical Hacking">{t('ethical_hacking')}</option>
                            <option value="UI UX Designing">{t('ui_ux_designing')}</option>
                            <option value="Web Development">{t('web_development')}</option>
                            <option value="Others">{t('others')}</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[black] text-white py-2 px-4 rounded-md active:bg-[#3a3a3a] transition" disabled={loading} onClick={CreateCourseHandler}
                    >
                        {loading?<ClipLoader size={30} color='white' /> : t('create')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
