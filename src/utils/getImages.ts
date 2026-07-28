export function getImages(category: 'landscapes' | 'portraits'): string[] {
  if (category === 'landscapes') {
    return [
      '/landscapes/GREEN AND PURPLE.jpg',
      '/landscapes/Lonely Boat.jpg',
      '/landscapes/ZZ000260.jpg',
      '/landscapes/_DSC0002.jpg',
      '/landscapes/_DSC0257.jpg',
      '/landscapes/_DSC0271.jpg',
      '/landscapes/_DSC0524.jpg',
      '/landscapes/_SNY0028.jpg',
      '/landscapes/_SNY0349.jpg',
    ];
  } else {
    return [
      '/portraits/ZZ000238.jpg',
      '/portraits/ZZ000243.jpg',
      '/portraits/ZZ000244.jpg',
      '/portraits/ZZ000249.jpg',
      '/portraits/_DSC0259.jpg',
      '/portraits/_DSC0263.jpg',
      '/portraits/_DSC0520.jpg',
      '/portraits/_DSC0522.jpg',
      '/portraits/_SNY0738.jpg',
      '/portraits/_SNY0744.jpg',
    ];
  }
}

