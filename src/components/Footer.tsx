import React from 'react';
import { FileText, Github, Mail, Shield, Zap, Globe, Heart, Star, Users, Clock, Award, ExternalLink, Code, Coffee } from 'lucide-react';
import { Badge, StatusBadge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Footer() {
  const supportedFormats = [
    { name: 'PDF', popular: true },
    { name: 'DOCX', popular: true },
    { name: 'TXT', popular: false },
    { name: 'RTF', popular: false },
    { name: 'ODT', popular: false },
    { name: 'HTML', popular: true },
    { name: 'MD', popular: false }
  ];

  const features = [
    { icon: Shield, text: '100% Seguro', description: 'Criptografia de ponta' },
    { icon: Zap, text: 'Ultra Rápido', description: 'Conversão em segundos' },
    { icon: Globe, text: 'Acesso Global', description: 'Disponível 24/7' },
    { icon: Users, text: 'Multi-usuário', description: 'Suporte colaborativo' }
  ];

  const stats = [
    { icon: FileText, label: 'Conversões', value: '15.420+', trend: '+12%' },
    { icon: Users, label: 'Usuários', value: '2.847', trend: '+8%' },
    { icon: Clock, label: 'Uptime', value: '99.9%', trend: 'Estável' }
  ];

  const quickLinks = [
    { name: 'Documentação', href: '#' },
    { name: 'API', href: '#' },
    { name: 'Suporte', href: '#' },
    { name: 'Changelog', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-16 relative">
        {/* Seção Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Sobre o Projeto */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Conversor Universal
                </h3>
                <StatusBadge status="online" size="sm" className="mt-1" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A solução mais confiável e avançada para conversão de documentos online. 
              Rápido, seguro e completamente gratuito.
            </p>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-sm text-gray-400">Feito com amor no Brasil</span>
            </div>
            <div className="flex items-center space-x-2">
              <Coffee className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-gray-400">Alimentado por café e código</span>
            </div>
          </div>

          {/* Formatos Suportados */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <span>Formatos Suportados</span>
            </h4>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {supportedFormats.map((format, index) => (
                  <Badge 
                    key={index} 
                    variant={format.popular ? "gradient" : "secondary"} 
                    size="sm"
                    className="text-xs hover:scale-105 transition-transform duration-200"
                  >
                    {format.name}
                    {format.popular && <Star className="ml-1 h-3 w-3" />}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-gray-400 flex items-center space-x-1">
                <Zap className="h-3 w-3" />
                <span>Mais formatos sendo adicionados regularmente</span>
              </p>
            </div>
          </div>

          {/* Recursos */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Recursos Premium</span>
            </h4>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white">{feature.text}</span>
                      <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Estatísticas */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Estatísticas</span>
            </h4>
            <div className="space-y-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-300">{stat.label}</span>
                      </div>
                      <Badge variant="success" size="sm" className="text-xs">
                        {stat.trend}
                      </Badge>
                    </div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="group flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Linha Divisória Final */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Links Sociais */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="hover:bg-white/10">
                <a href="https://github.com/felixskmarcio/conversor-universal-python/tree/master" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="hover:bg-white/10">
                <a href="mailto:contato@exemplo.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contato
                </a>
              </Button>
              

            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right space-y-2">
              <p className="text-sm text-gray-300">
                © 2025 Conversor Universal. Todos os direitos reservados.
              </p>
              <div className="flex items-center justify-center lg:justify-end space-x-4 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <Code className="h-3 w-3" />
                  <span>Next.js</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <FileText className="h-3 w-3" />
                  <span>Python</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>Seguro</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer