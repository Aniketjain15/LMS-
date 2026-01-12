import React, { useEffect, useRef, useState } from "react";
import ai from "../assets/ai.png";
import ai1 from "../assets/SearchAi.png";
import { RiMicAiFill } from "react-icons/ri";
import axios from "axios";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";
import start from "../assets/start.mp3";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function SearchWithAi() {
  const [input, setInput] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [listening, setListening] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const startSound = useRef(new Audio(start));
  const recognitionRef = useRef(null);

  // 🔹 Initialize Speech Recognition ONCE
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onend = () => setListening(false);
    recognition.onerror = () => {
      setListening(false);
      speak("Sorry, I could not understand you");
    };

    recognitionRef.current = recognition;
  }, []);

  // 🔹 Text to Speech
  const speak = (message) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  };

  // 🔹 Voice Search
  const handleSearch = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    setListening(true);
    startSound.current.play();
    recognition.start();

    recognition.onresult = async (e) => {
      const transcript = e.results[0][0].transcript.trim();
      setInput(transcript);
      await handleRecommendation(transcript);
    };
  };

  // 🔹 AI Recommendation API
  const handleRecommendation = async (query) => {
    if (!query?.trim()) return;

    try {
      const result = await axios.post(
        `${serverUrl}/api/ai/search`,
        { input: query },
        { withCredentials: true }
      );

      setRecommendations(result.data || []);

      if (result.data?.length > 0) {
        speak("These are the top courses I found for you");
      } else {
        speak("No courses found");
      }
    } catch (error) {
      console.error(
        "AI Search Error:",
        error.response?.data || error.message
      );
      speak("Something went wrong while searching");
    } finally {
      setListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center px-4 py-16">
      {/* Search Box */}
      <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 w-full max-w-2xl text-center relative">
        <FaArrowLeftLong
          className="text-black w-[22px] h-[22px] cursor-pointer absolute"
          onClick={() => navigate("/")}
        />

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-6 flex items-center justify-center gap-2">
          <img src={ai} className="w-8 h-8" alt="AI" />
          {t('search_with_ai')}
        </h1>

        <div className="flex items-center bg-gray-700 rounded-full overflow-hidden shadow-lg relative w-full">
          <input
            type="text"
            className="flex-grow px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            placeholder={t('search_placeholder')}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {input && (
            <button
              onClick={() => handleRecommendation(input)}
              className="absolute right-14 bg-white rounded-full"
            >
              <img src={ai} className="w-10 h-10 p-2" alt="Search" />
            </button>
          )}

          <button
            className="absolute right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handleSearch}
          >
            <RiMicAiFill className="w-5 h-5 text-[#cb87c5]" />
          </button>
        </div>
      </div>

      {/* Results */}
      {recommendations.length > 0 ? (
        <div className="w-full max-w-6xl mt-12 px-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-3">
            <img src={ai1} className="w-10 h-10 p-2" alt="AI Results" />
            {t('ai_search_results')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommendations.map((course) => (
              <div
                key={course._id}
                className="bg-white text-black p-5 rounded-2xl shadow-md hover:bg-gray-200 cursor-pointer"
                onClick={() => navigate(`/viewcourse/${course._id}`)}
              >
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.category}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-center text-xl mt-10 text-gray-400">
          {listening ? t('listening') : t('no_courses_found')}
        </h1>
      )}
    </div>
  );
}

export default SearchWithAi;
