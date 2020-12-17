import React from 'react';
import App from './App';
import { userEvent } from '@testing-library/user-event';
import { getByTestId } from '@testing-library/react';
import * as rtl from '@testing-library/react';
//* means everything, rtl = react testing library (you can name it whatever)

test('Displays correctly with starting data from API', async () =>{
    let myApp = rtl.render(<App />);
    const text = await myApp.findByText('Select a season');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
});
