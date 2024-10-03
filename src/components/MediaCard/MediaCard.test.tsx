import { render, screen, fireEvent } from '@testing-library/react';
import MediaCard from './MediaCard';
import { mockMedia } from '../../__mocks__/mockData';  // Import centralized mock data

test('renders MediaCard with media details', () => {
    render(<MediaCard media={mockMedia[0]} />);

    // Check that the media name is rendered
    expect(screen.getByText(/Test Media/i)).toBeInTheDocument();
    // Check that the media status is rendered
    expect(screen.getByText(/Status: ready/i)).toBeInTheDocument();
    // Check that the media languages are rendered
    expect(screen.getByText(/2 languages available/i)).toBeInTheDocument();
});

test('opens modal on edit button click', () => {
    render(<MediaCard media={mockMedia[0]} />);

    // Use getByRole to target the specific "Edit" button
    const editButton = screen.getByRole('button', { name: /Edit/i });
    fireEvent.click(editButton);

    // Check that the correct modal content is displayed after clicking the button
    expect(screen.getByText(/Feature Coming Soon!/i)).toBeInTheDocument();
});