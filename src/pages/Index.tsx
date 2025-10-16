import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  category: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Основы веб-разработки',
    description: 'Научитесь создавать современные сайты с нуля. HTML, CSS, JavaScript и основы React.',
    duration: '8 недель',
    level: 'Начальный',
    image: 'https://cdn.poehali.dev/projects/1e9ed286-b237-4f9e-812d-12bb2053931d/files/dac8a7db-62cc-4a81-b896-a4021f8c30e0.jpg',
    category: 'Программирование'
  },
  {
    id: 2,
    title: 'Дизайн-мышление',
    description: 'Освойте методологию создания инновационных продуктов и решения бизнес-задач.',
    duration: '6 недель',
    level: 'Средний',
    image: 'https://cdn.poehali.dev/projects/1e9ed286-b237-4f9e-812d-12bb2053931d/files/fb3f862e-52d6-4353-b4b4-ffd9fb20459d.jpg',
    category: 'Дизайн'
  },
  {
    id: 3,
    title: 'Бизнес-аналитика',
    description: 'Анализ данных, построение отчетов и принятие решений на основе метрик.',
    duration: '10 недель',
    level: 'Продвинутый',
    image: 'https://cdn.poehali.dev/projects/1e9ed286-b237-4f9e-812d-12bb2053931d/files/2c93f158-f7d6-4fbb-8d1e-6b29e43d6b90.jpg',
    category: 'Аналитика'
  },
  {
    id: 4,
    title: 'Digital-маркетинг',
    description: 'Продвижение в социальных сетях, контекстная реклама и аналитика рекламных кампаний.',
    duration: '7 недель',
    level: 'Начальный',
    image: 'https://cdn.poehali.dev/projects/1e9ed286-b237-4f9e-812d-12bb2053931d/files/fb3f862e-52d6-4353-b4b4-ffd9fb20459d.jpg',
    category: 'Маркетинг'
  },
  {
    id: 5,
    title: 'UX/UI дизайн',
    description: 'Проектирование пользовательских интерфейсов и создание удобных продуктов.',
    duration: '9 недель',
    level: 'Средний',
    image: 'https://cdn.poehali.dev/projects/1e9ed286-b237-4f9e-812d-12bb2053931d/files/dac8a7db-62cc-4a81-b896-a4021f8c30e0.jpg',
    category: 'Дизайн'
  },
  {
    id: 6,
    title: 'Управление проектами',
    description: 'Agile, Scrum и лучшие практики управления командами и проектами.',
    duration: '8 недель',
    level: 'Средний',
    image: 'https://cdn.poehali.dev/projects/1e9ed286-b237-4f9e-812d-12bb2053931d/files/2c93f158-f7d6-4fbb-8d1e-6b29e43d6b90.jpg',
    category: 'Менеджмент'
  }
];

const categories = ['Все курсы', 'Программирование', 'Дизайн', 'Аналитика', 'Маркетинг', 'Менеджмент'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все курсы');

  const filteredCourses = selectedCategory === 'Все курсы'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FRIENDZONE
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-foreground/80 hover:text-primary transition-colors">
                Курсы
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-accent text-accent-foreground px-4 py-1">
              Новая эра обучения
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Учись у лучших,
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                становись лучшим
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Современная образовательная платформа с интерактивными курсами от ведущих экспертов.
              Получи навыки, которые изменят твою карьеру.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Play" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Студентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Курсов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Довольных</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/1e9ed286-b237-4f9e-812d-12bb2053931d/files/fb3f862e-52d6-4353-b4b4-ffd9fb20459d.jpg"
              alt="Обучение"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="courses" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-secondary text-secondary-foreground">
            Популярные направления
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Наши курсы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выбери направление, которое тебе интересно, и начни развиваться уже сегодня
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-primary text-white' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {course.level}
                </Badge>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {course.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm">{course.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Записаться
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-secondary py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Users" size={32} />
              </div>
              <h3 className="text-2xl font-semibold">Живое общение</h3>
              <p className="text-white/80">
                Учись в компании единомышленников и обменивайся опытом
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Trophy" size={32} />
              </div>
              <h3 className="text-2xl font-semibold">Сертификаты</h3>
              <p className="text-white/80">
                Получай подтверждение своих знаний после каждого курса
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Zap" size={32} />
              </div>
              <h3 className="text-2xl font-semibold">Практика</h3>
              <p className="text-white/80">
                Реальные проекты и задачи для закрепления навыков
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">FRIENDZONE</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для тех, кто хочет расти и развиваться
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Менеджмент</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@friendzone.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Friendzone. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
