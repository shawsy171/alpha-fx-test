import { render, screen } from "@testing-library/react";
import Preview from './index';



describe('Preview', () => { 
  it('renders without crashing', () => {
    render(<Preview fileContents={'test'} errors={[]} setErrors={() => {}} />)

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
})