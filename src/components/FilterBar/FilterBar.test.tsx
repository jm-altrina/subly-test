import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FilterProvider } from '../../contexts/FilterContext';
import { MediaProvider } from '../../contexts/MediaContext';
import FilterBar from './FilterBar';

// A helper to render FilterBar with context providers
const renderWithProviders = () => {
    return render(
        <MediaProvider>
            <FilterProvider>
                <FilterBar />
            </FilterProvider>
        </MediaProvider>
    );
};

test('renders FilterBar with default values', async () => {
    renderWithProviders();

    // Wait for the filter dropdowns to appear after the loading state
    await waitFor(() => {
        expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Language/i)).toBeInTheDocument();
    });
});

test('allows users to change filter options', async () => {
    renderWithProviders();

    // Wait for the filter dropdowns to appear
    await waitFor(() => {
        expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Language/i)).toBeInTheDocument();
    });

    // Simulate selecting a status filter
    const statusSelect = screen.getByLabelText(/Status/i) as HTMLSelectElement;
    fireEvent.change(statusSelect, { target: { value: 'ready' } });
    expect(statusSelect.value).toBe('ready');

    // Simulate selecting a language filter using the correct value
    const languageSelect = screen.getByLabelText(/Language/i) as HTMLSelectElement;
    fireEvent.change(languageSelect, { target: { value: 'en' } });  // 'en' instead of 'English'
    expect(languageSelect.value).toBe('en');  // Assert that the value is 'en'
});

test('resets filters when reset button is clicked', async () => {
    renderWithProviders();

    // Wait for the filter dropdowns to appear
    await waitFor(() => {
        expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Language/i)).toBeInTheDocument();
    });

    // Simulate setting filters
    const statusSelect = screen.getByLabelText(/Status/i) as HTMLSelectElement;
    const languageSelect = screen.getByLabelText(/Language/i) as HTMLSelectElement;
    fireEvent.change(statusSelect, { target: { value: 'error' } });
    fireEvent.change(languageSelect, { target: { value: 'es' } });  // 'es' instead of 'Spanish'

    // Simulate clicking the reset button
    fireEvent.click(screen.getByText(/Reset Filters/i));

    // Ensure the filters have been reset to default values
    expect(statusSelect.value).toBe('');
    expect(languageSelect.value).toBe('');
});