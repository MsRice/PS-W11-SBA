import React, { useState } from 'react';
import type { ModalProviderProps, SourceType } from '../../types';
import { ModalContext } from './ModalContext';

export default function ModalProvider({children} :ModalProviderProps){
    const [source , setSource] = useState<SourceType | null>(null)

    const openModal = (source:SourceType) => {
        setSource(source)
    }
    
    const closeModal = () => {
        setSource(null)
        
    }
  

    return (
        <ModalContext.Provider value={{ isOpen :source !== null, source, openModal ,closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

