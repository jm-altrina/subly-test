import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

// A component that throws an error
const ProblematicComponent = () => {
    throw new Error('Test error');
};

// Suppressing console error output during test
beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
});

afterEach(() => {
    jest.restoreAllMocks();
});

test('catches error and renders fallback UI', () => {
    const { getByText } = render(
        <ErrorBoundary>
            <ProblematicComponent />
        </ErrorBoundary>
    );

    // Assert that the fallback UI is displayed when the error is caught
    expect(getByText(/Something went wrong/i)).toBeInTheDocument();
});