import { render, screen } from "@testing-library/react";
import DragAndDrop from './index';

describe('DragAndDrop', () => { 
  it('renders without crashing', () => {

    render(<DragAndDrop
      setErrors={() => {}} 
      setFileContents={() => {}}
    />)

    expect(screen.getByText('Drag & Drop')).toBeInTheDocument();
  });
})