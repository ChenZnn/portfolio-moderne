'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      // Ici, vous pouvez intégrer un service comme Formspree, EmailJS, ou votre propre API
      // Pour l'instant, nous simulons une soumission réussie
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message envoyé avec succès!' }
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Une erreur est survenue. Veuillez réessayer.' }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nom complet</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required 
          className="mt-1 block w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400" 
          placeholder="Votre nom"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required 
          className="mt-1 block w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400" 
          placeholder="votre.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          required 
          className="mt-1 block w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400" 
          placeholder="Votre message..."
        ></textarea>
      </div>
      
      <div>
        <button 
          type="submit" 
          disabled={status.submitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition duration-300 disabled:opacity-70"
        >
          {status.submitting ? 'Envoi en cours...' : 'Envoyer le Message'}
        </button>
      </div>
      
      {status.info.msg && (
        <div className={`text-center p-2 rounded-md ${status.info.error ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
          {status.info.msg}
        </div>
      )}
    </form>
  );
};

export default ContactForm;