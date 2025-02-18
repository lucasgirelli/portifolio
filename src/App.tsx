import React from 'react';
import { Github, Linkedin, ExternalLink, Code2, Database, Coffee } from 'lucide-react';
import { projects } from './data/projects';

function App() {
  const skills = [
    {
      name: 'HTML & CSS',
      icon: '🟠',
      description: 'Já desenvolvi diversos sites pessoais e projetos para o InovaWeek utilizando HTML e CSS. Tenho grande facilidade com essas linguagens e experiência na criação de interfaces responsivas.'
    },
    {
      name: 'Python',
      icon: '🐍',
      description: 'Trabalhei com manipulação de pixels e processamento de imagens em um projeto acadêmico. Apesar de ser uma experiência mais técnica, fiz um curso para aprofundar meu conhecimento e entender a linguagem por completo.'
    },
    {
      name: 'C',
      icon: '🔵',
      description: 'Tive facilidade em aprender C, porém, ainda não tive a oportunidade de aplicá-la em um grande projeto prático para explorar seu uso no mercado.'
    },
    {
      name: 'C#',
      icon: '🟣',
      description: 'Por ser uma linguagem orientada a objetos, a adaptação foi natural devido ao conhecimento prévio em Java. Desenvolvi projetos acadêmicos, incluindo um jogo de batalha RPG.'
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'Uma tecnologia simples de aprender e muito poderosa. Tenho utilizado React com eficiência no desenvolvimento deste portfólio e em outros projetos interativos.'
    },
    {
      name: 'Java',
      icon: '☕',
      description: 'Trabalhei em projetos integrando bancos de dados com a lógica de programação em Java, o que me deu uma boa base em desenvolvimento full stack.'
    },
    {
      name: 'SQL',
      icon: '🛢️',
      description: 'Uso SQL constantemente na graduação, o que me deu bastante prática. A lógica de banco de dados se tornou quase automática para mim.'
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white tech-grid relative">
      {/* Header/Navigation */}
      <header className="fixed w-full glass-effect z-50 tech-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-emerald animate-pulse-slow">Lucas Girelli</h1>
            <div className="flex items-center gap-4">
              <a href="#about" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Sobre</a>
              <a href="#skills" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Habilidades</a>
              <a href="#certificates" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Certificados</a>
              <a href="#projects" className="text-blue-gray hover:text-emerald transition-all hover:scale-105">Projetos</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 slide-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Olá, eu sou o<br />
              <span className="text-emerald animate-pulse-slow">Lucas Girelli</span>
            </h1>
            <p className="text-xl text-blue-gray mb-8">
              Estudante de Ciência da Computação apaixonado por desenvolvimento e tecnologia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/lucasgirelli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-emerald hover:text-white transition-all hover:scale-110 animate-float"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-girelli-bezerra-62ab69300"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-emerald hover:text-white transition-all hover:scale-110 animate-float"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/fotos/minhaFoto.jpg"
              alt="Lucas Girelli"
              className="w-64 h-64 rounded-full object-cover animate-glow animate-float"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 glass-effect">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald animate-pulse-slow">Sobre mim</h2>
          <div className="max-w-3xl mx-auto text-blue-gray space-y-6 slide-in">
            <p>
              Atualmente cursando o 5º período de Ciência da Computação na Universidade Vila Velha (UVV),
              com formação prévia no Colégio Marista. Sou um profissional comunicativo, com grande
              capacidade de aprendizado e busca constante por aperfeiçoamento.
            </p>
            <p>
              Minha paixão por tecnologia e desenvolvimento me motiva a estar sempre atualizado com as
              últimas tendências e melhores práticas do mercado. Estou em busca de uma oportunidade de
              estágio para aplicar meus conhecimentos e crescer profissionalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-light tech-grid relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald animate-pulse-slow">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card glass-effect rounded-lg overflow-hidden group relative h-48 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6 h-full flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl transform group-hover:scale-110 transition-transform">{skill.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center text-blue-gray">{skill.name}</h3>
                  <div className="absolute inset-0 bg-dark-light/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 transform group-hover:scale-100 scale-95">
                    <p className="text-blue-gray text-center">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 glass-effect">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald animate-pulse-slow">Certificados</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-light/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all animate-float glass-effect">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-gray">Certificado Cisco - Ciência de Dados</h3>
                <p className="text-blue-gray mb-4">
                  Formação completa em conceitos fundamentais de Data Science, incluindo análise de dados,
                  visualização e técnicas estatísticas aplicadas.
                </p>
                <a
                  href="https://www.credly.com/badges/ce8eda40-6431-429b-8df7-228fa77d20c8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver certificado
                </a>
              </div>
            </div>
            <div className="bg-dark-light/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all animate-float glass-effect" style={{ animationDelay: '0.2s' }}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-gray">Certificado Cisco - Python</h3>
                <p className="text-blue-gray mb-4">
                  Especialização em programação Python, abrangendo estruturas de dados, algoritmos,
                  programação orientada a objetos e desenvolvimento de aplicações.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver certificado
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-light tech-grid relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald animate-pulse-slow">Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="glass-effect rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-gray">{project.title}</h3>
                  <p className="text-blue-gray mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-emerald hover:text-blue-gray transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-effect py-8 tech-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-gray">© 2024 Lucas Girelli. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/lucasgirelli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-gray hover:text-emerald transition-all hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-girelli-bezerra-62ab69300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-gray hover:text-emerald transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
