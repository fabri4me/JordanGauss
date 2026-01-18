
import { Course, Stat } from './types';

// Courses provided for the educational platform
export const COURSES: Course[] = [
  {
    id: 't1',
    title: 'Apoyo Escolar en Cochabamba',
    category: 'Math',
    description: 'Clases presenciales en nuestra sede. Ayudamos a tu hijo a entender lo que parece difícil de forma divertida y paciente.',
    duration: 'Presencial (Cbba)',
    level: 'Básico',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef1460370e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't2',
    title: 'Descubriendo Talentos (Virtual)',
    category: 'AI',
    description: 'Diagnóstico para ver en qué es realmente bueno tu hijo. No todos aprenden igual y aquí lo celebramos.',
    duration: 'Clases Online',
    level: 'Avanzado',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai1',
    title: 'Computación e IA para Niños',
    category: 'AI',
    description: 'Enseñamos a usar la tecnología del futuro para que las tareas del colegio sean más fáciles y creativas.',
    duration: '20 horas',
    level: 'Intermedio',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  }
];

// Added missing STATS export to fix the error in Stats.tsx
export const STATS: Stat[] = [
  {
    label: 'Estudiantes Potenciados',
    value: '+2.5k',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    label: 'Personalización',
    value: '100%',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    label: 'Años de Experiencia',
    value: '+4',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  }
];
