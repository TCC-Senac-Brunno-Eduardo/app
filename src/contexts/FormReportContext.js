import React, { createContext, useState } from 'react';

export const FormReportContext = createContext();

export default function FormReportProvider({children}) {

  const [show, setShow] = useState(false) 
  
  return (
    <FormReportContext.Provider value={{show, setShow}}>
      {children}
    </FormReportContext.Provider>
  );
}