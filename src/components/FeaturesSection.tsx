import React from 'react';
import { Shield, Zap, Globe, Lock, Star, Smartphone, CheckCircle, Award, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Seus arquivos são processados localmente e excluídos automaticamente após a conversão.',
      badge: 'Privado',
      variant: 'success' as const,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Conversão Ultrarrápida',
      description: 'Tecnologia otimizada para conversões em segundos, mesmo com arquivos grandes.',
      badge: 'Rápido',
      variant: 'warning' as const,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Acesso Universal',
      description: 'Funciona em qualquer dispositivo com navegador, sem necessidade de instalação.',
      badge: 'Web',
      variant: 'info' as const,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Lock,
      title: 'Privacidade Total',
      description: 'Nenhum arquivo é armazenado em nossos servidores. Sua privacidade é garantida.',
      badge: 'Seguro',
      variant: 'purple' as const,
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: Star,
      title: 'Qualidade Preservada',
      description: 'Mantemos a formatação e qualidade original dos seus documentos.',
      badge: 'Premium',
      variant: 'gradient' as const,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Smartphone,
      title: 'Compatibilidade Mobile',
      description: 'Interface responsiva que funciona perfeitamente em smartphones e tablets.',
      badge: 'Mobile',
      variant: 'secondary' as const,
      gradient: 'from-gray-500 to-slate-600'
    }
  ];

  const stats = [
    { icon: CheckCircle, value: '99.9%', label: 'Taxa de Sucesso' },
    { icon: Clock, value: '<5s', label: 'Tempo Médio' },
    { icon: Award, value: '50+', label: 'Formatos Suportados' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            ✨ Recursos Premium
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Por que escolher nosso
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> conversor</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos a melhor experiência em conversão de documentos com tecnologia de ponta e segurança incomparável
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                          {feature.title}
                        </h3>
                        <Badge variant={feature.variant} size="sm" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        

      </div>
    </section>
  );
}

export default FeaturesSection;