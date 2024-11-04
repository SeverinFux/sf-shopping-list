import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../src/app/components/Header';

describe('Header component', () => {
    test('contains link to home page', () => {
        render(<Header />);
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    });

    test('contains link to about page', () => {
        render(<Header />);
        const aboutLink = screen.getByRole('link', { name: /about/i });
        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveAttribute('href', '/about');
    });

    test('contains link to contact page', () => {
        render(<Header />);
        const contactLink = screen.getByRole('link', { name: /contact/i });
        expect(contactLink).toBeInTheDocument();
        expect(contactLink).toHaveAttribute('href', '/contact');
    });
});