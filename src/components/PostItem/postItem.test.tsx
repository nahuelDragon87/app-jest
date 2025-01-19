import React from 'react';
import { render, screen } from '@testing-library/react-native';
import PostItem from './index'; // Ajusta la ruta si es necesario

describe('PostItem', () => {
  const mockPost = {
    id: 1,
    title: 'Test Post Title',
    body: 'This is the body of the test post.',
    buttonText: 'Read More',
    imageUrl: 'https://www.example.com/image.jpg',
    tag: 'Test Tag',
  };

  it('should render post title', () => {
    render(<PostItem post={mockPost} />);
    
    // Asegúrate de que el título se renderiza
    expect(screen.getByText('Test Post Title')).toBeTruthy();
  });

  it('should render post body', () => {
    render(<PostItem post={mockPost} />);
    
    // Asegúrate de que el cuerpo del post se renderiza
    expect(screen.getByText('This is the body of the test post.')).toBeTruthy();
  });

  it('should render button text', () => {
    render(<PostItem post={mockPost} />);
    
    // Asegúrate de que el texto del botón "Read More" se renderiza
    expect(screen.getByText('Read More')).toBeTruthy();
  });

  it('should render default tag when no tag is provided', () => {
    const mockPostWithoutTag = { ...mockPost, tag: '' };
    render(<PostItem post={mockPostWithoutTag} />);
    
    // Asegúrate de que se renderiza el tag por defecto "Community"
    expect(screen.getByText('Community')).toBeTruthy();
  });

  it('should render image with correct source', () => {
    render(<PostItem post={mockPost} />);
    
    // Asegúrate de que la imagen se renderiza correctamente con la URL proporcionada
    const image = screen.getByRole('image');
    expect(image.props.source.uri).toBe('https://www.example.com/image.jpg');
  });

  it('should render default image when imageUrl is not provided', () => {
    const mockPostWithoutImage = { ...mockPost, imageUrl: '' };
    render(<PostItem post={mockPostWithoutImage} />);
    
    // Asegúrate de que se renderiza la imagen por defecto
    const image = screen.getByRole('image');
    expect(image.props.source.uri).toBe('https://www.lifewire.com/thmb/NCdh9sGh14-WKgs1HkUVYcmrAnE=/3000x0/filters:no_upscale():max_bytes(200000):strip_icc():format(webp)/Google-IO-2024-e6ef4c6c40a04a63853f7e216abd32fe.jpg');
  });
});
