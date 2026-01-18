
export interface Course {
  id: string;
  title: string;
  category: 'Math' | 'AI';
  description: string;
  duration: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}
