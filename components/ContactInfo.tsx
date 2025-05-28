"use client";

import { useState } from "react";

const ContactInfo = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  const email = "theo.noel2109@gmail.com";
  const phone = "+33 7 62 66 44 96";
  
  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };
  
  return (
    <div className="space-y-8">
      {/* Carte Email */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 border border-gray-700">
        <div className="flex items-start">
          <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">Email</h3>
            <p className="text-blue-300 font-mono mb-3">{email}</p>
            <button 
              onClick={() => copyToClipboard(email, 'email')}
              className="text-sm px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-md hover:bg-blue-500/30 transition-colors duration-200 flex items-center"
            >
              {emailCopied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copié !
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Copier l'email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Carte Téléphone */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 border border-gray-700">
        <div className="flex items-start">
          <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">Téléphone</h3>
            <p className="text-purple-300 font-mono mb-3">{phone}</p>
            <button 
              onClick={() => copyToClipboard(phone, 'phone')}
              className="text-sm px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-md hover:bg-purple-500/30 transition-colors duration-200 flex items-center"
            >
              {phoneCopied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copié !
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Copier le numéro
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Message d'invitation */}
      <div className="text-center mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
        <p className="text-gray-300">
          N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question !
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;