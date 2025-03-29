import React, { useEffect, useRef } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import {
  Code2,
  ShoppingCart,
  Settings,
  Palette,
  Search,
  Cpu,
  Megaphone,
  ChevronDown,
  Globe,
  X,
  Send,
  Rocket,
  Target,
  Lightbulb,
  RefreshCw,
  Users,
} from 'lucide-react';

function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 }
): boolean {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);

  return isVisible;
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${className}`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: ShoppingCart,
    title: 'Tiendas Online',
    description: 'Soluciones de comercio electrónico personalizadas construidas para escalar',
  },
  {
    icon: Settings,
    title: 'Optimización Web',
    description: 'Servicios de ajuste de rendimiento y mantenimiento continuo',
  },
  {
    icon: Palette,
    title: 'Diseño UX/UI',
    description: 'Diseño centrado en el usuario que impulsa el compromiso',
  },
  {
    icon: Search,
    title: 'SEO y Posicionamiento',
    description: 'Estrategias basadas en datos para máxima visibilidad',
  },
  {
    icon: Cpu,
    title: 'Automatización',
    description: 'Soluciones inteligentes para la automatización de procesos',
  },
  {
    icon: Megaphone,
    title: 'Google Ads',
    description: 'Gestión y optimización de campañas publicitarias para maximizar el ROI',
  },
];

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactForm({ isOpen, onClose }: ContactFormProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#012677]/90 rounded-2xl p-6 md:p-8 w-full max-w-md relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mb-6 text-center">Contáctanos</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-colors resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Send className="w-5 h-5" />
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time and then hide the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020304] text-white overflow-x-hidden">
      {isLoading && <LoadingScreen />}
      {/* Hero Section */}
      <div
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#012677]/80 to-[#020304]" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <Code2 className="w-20 h-20 mx-auto mb-8 text-[#012677]" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
              ScriptSolutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto px-4">
              Potencia tu Proyecto con Nuestras Soluciones Digitales
            </p>
            <div className="mt-12 flex justify-center">
              <div className="animate-bounce transition-all duration-300 hover:text-blue-400">
                <ChevronDown className="w-12 h-12 text-blue-300" strokeWidth={2.5} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-[#020304] to-[#012677]/20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 px-4">
              Impulsando tu Microemprendimiento
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
Transformamos ideas en experiencias digitales de alto impacto, combinando creatividad, tecnología y estrategia
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#012677]/20 to-[#012677]/5 backdrop-blur-sm border border-[#012677]/20 hover:border-[#012677]/40 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-center mb-6">
                    <service.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 text-center flex-grow">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-[#020304] via-[#012677]/10 to-[#020304]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              ¿Por qué elegir ScriptSolutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transformamos visiones en realidades digitales con un enfoque único y orientado a resultados
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection>
              <div className="group bg-gradient-to-r from-[#012677]/10 to-transparent p-6 rounded-2xl border border-[#012677]/20 hover:border-[#012677]/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-[#012677]/20 rounded-lg group-hover:bg-[#012677]/30 transition-colors">
                    <Rocket className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Soluciones Digitales Personalizadas</h3>
                    <p className="text-gray-400 leading-relaxed">
                      No solo construimos sitios web; creamos herramientas estratégicas que impulsan el crecimiento empresarial,
                      adaptadas a las necesidades específicas de cada empresa.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-gradient-to-r from-[#012677]/10 to-transparent p-6 rounded-2xl border border-[#012677]/20 hover:border-[#012677]/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-[#012677]/20 rounded-lg group-hover:bg-[#012677]/30 transition-colors">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Enfoque Orientado a Resultados</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Nuestros sitios web y tiendas online están optimizados para atraer clientes, mejorar la experiencia
                      del usuario y aumentar las conversiones.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-gradient-to-r from-[#012677]/10 to-transparent p-6 rounded-2xl border border-[#012677]/20 hover:border-[#012677]/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-[#012677]/20 rounded-lg group-hover:bg-[#012677]/30 transition-colors">
                    <Lightbulb className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Diseño Futurista y Funcionalidad Avanzada</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Creamos sitios web elegantes, intuitivos y de vanguardia que elevan la presencia de tu marca
                      y mejoran la interacción con tus usuarios.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-gradient-to-r from-[#012677]/10 to-transparent p-6 rounded-2xl border border-[#012677]/20 hover:border-[#012677]/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-[#012677]/20 rounded-lg group-hover:bg-[#012677]/30 transition-colors">
                    <RefreshCw className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Soporte y Mantenimiento Continuo</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Más allá de la entrega de proyectos, proporcionamos mejoras continuas y actualizaciones
                      para mantener tu plataforma en constante evolución.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group bg-gradient-to-r from-[#012677]/10 to-transparent p-6 rounded-2xl border border-[#012677]/20 hover:border-[#012677]/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-[#012677]/20 rounded-lg group-hover:bg-[#012677]/30 transition-colors">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-100">Atención Personalizada y Compromiso</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Trabajamos estrechamente con cada cliente, asegurando una experiencia fluida, ágil
                      y enfocada en resultados.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#020304]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#012677]">100+</div>
                <div className="text-gray-400 mt-2">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#012677]">50+</div>
                <div className="text-gray-400 mt-2">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#012677]">5+</div>
                <div className="text-gray-400 mt-2">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#012677]">24/7</div>
                <div className="text-gray-400 mt-2">Soporte</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#020304] to-[#012677]/20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <Globe className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 px-4">
              ¿Listo para Transformar tu Presencia Digital?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Creemos algo extraordinario juntos
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-4 bg-[#012677] hover:bg-[#012677]/80 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Comenzar
            </button>
          </AnimatedSection>
        </div>
      </section>
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;