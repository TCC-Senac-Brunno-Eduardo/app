import React, { createContext, useState } from 'react';

export const FormReportContext = createContext();

export default function FormReportProvider({children}) {

  const [showForm, setShowForm] = useState(false) 
  
  return (
    <FormReportContext.Provider value={{showForm, setShowForm}}>
      {children}
    </FormReportContext.Provider>
  );
}