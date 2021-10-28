// test-utils.jsx
import React, { ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import mainPageReducer from "../pages/mainPageSlice";
import { Router } from '@mui/icons-material';
import { store } from '../services/store';



const render = (ui: ReactElement, renderOptions?: RenderOptions, store = configureStore({ reducer: mainPageReducer })) => {
    const Wrapper : React.FC = ({ children }) => {
      return (
        <Provider store={store}>
              {children}

        </Provider>
      );
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  };
  
  // re-export everything
  export * from "@testing-library/react";
  
  // override render method
  export { render };
  