import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logomain.jpg"; // replace with actual path
import { useTranslation } from "react-i18next";

const Footer = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex lg:items-center items-start justify-center gap-[40px] lg:gap-[150px] flex-col lg:flex-row">

        {/* Logo + Description */}
        <div className="lg:w-[40%] md:w-[50%] w-[90%]">
          <img src={logo} alt="Logo" className="h-10 mb-1 border-1 rounded-[3px]" />
          <h2 className="text-xl font-bold text-white mb-3">{t('edunook')}</h2>
          <p className="text-sm">
            {t('edunook_desc')}
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:w-[30%] md:w-[100%]">
          <h3 className="text-white font-semibold mb-2">{t('quick_links')}</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/")}>{t('home')}</li>
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/allcourses")}>{t('courses')}</li>
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/login")}>{t('login')}</li>
            <li className="hover:text-white cursor-pointer" onClick={() => navigate("/profile")}>{t('my_profile')}</li>
          </ul>
        </div>

        {/* Explore Categories */}
        <div className="lg:w-[30%] md:w-[100%]">
          <h3 className="text-white font-semibold mb-2">{t('explore_categories')}</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white">{t('web_development')}</li>
            <li className="hover:text-white">{t('ai_ml')}</li>
            <li className="hover:text-white">{t('data_science')}</li>
            <li className="hover:text-white">{t('ui_ux_design')}</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500">
        {t('copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
