import React from 'react';
import userEvent from '@testing-library/user-event';
import {screen} from '@testing-library/react';
import App from '../App';
import {renderWithRedux, renderWithRouterAndRedux} from './helpers/renderWith';
import mockData, {initialState} from './helpers/mockData';
import Wallet from '../pages/Wallet';
import user from '../redux/reducers/user';


describe('Testando o login', () => {    
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    }); 
    
    it('Testando o login', () => {
        
        const {history} = renderWithRouterAndRedux(<App />);
        const email = screen.getByRole('textbox');
        userEvent.type(email, 'tryber@trybe.com.br')
        const password = screen.getByPlaceholderText(/digite sua senha/i);
        userEvent.type(password, 'abcdefg')
        const button = screen.getByRole('button', { name: /entrar/i });
        userEvent.click(button);
        // screen.logTestingPlaygroundURL();
        expect(history.location.pathname).toBe('/carteira');

    })
    it('Testando a carteira', () => {
        const {history} = renderWithRedux(<Wallet />, {initialState});
        const value = screen.getByRole('spinbutton');
        const description = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: /adicionar despesa/i });
        userEvent.type(value, '10');
        userEvent.type(description, 'Descrição');
        userEvent.click(button);
        screen.logTestingPlaygroundURL();
    })
})