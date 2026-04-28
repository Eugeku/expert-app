import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ImageOverlay from './ImageOverlay';

describe('ImageOverlay', () => {
  it('renders small image with alt text', () => {
    render(<ImageOverlay src="./image.jpg" alt="Test image" />);
    const img = screen.getByAltText(/test image/i);
    expect(img).toBeInTheDocument();
  });

  it('does not show overlay initially', () => {
    render(<ImageOverlay src="./image.jpg" alt="Test image" />);
    const overlay = screen.queryByRole('img', { name: /test image/i });
    expect(overlay).toBeInTheDocument();
  });

  it('opens overlay on image click', async () => {
    const user = userEvent.setup();
    render(<ImageOverlay src="./image.jpg" alt="Test image" />);
    const img = screen.getByAltText(/test image/i);
    await user.click(img);
  });

  it('closes overlay when overlay is clicked', async () => {
    const user = userEvent.setup();
    render(<ImageOverlay src="./image.jpg" alt="Test image" />);
    const img = screen.getByAltText(/test image/i);
    await user.click(img);
  });
});
