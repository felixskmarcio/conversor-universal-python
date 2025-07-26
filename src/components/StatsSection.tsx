'use client'

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, CheckCircle, Activity, Globe, Zap, Award } from 'lucide-react';
import { Badge, CountBadge } from '@/components/ui/badge';
import { LoadingPulse } from '@/components/ui/loading';

interface Stat {
  icon: React.ComponentType<any>;
  label: string;
  value: number;
  suffix: string;
  color: string;
  gradient: string;
  trend?: string;
  description: string;
}

function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([
    {
      icon: CheckCircle,
      label: 'Conversões Realizadas',
      value: 15420,
      suffix: '+',
      color: 'text-green-600',
      gradient: 'from-green-500 to-emerald-600',
      trend: '+12%',
      description: 'Documentos convertidos com sucesso'
    },
    {
      icon: Users,
      label: 'Usuários Ativos',
      value: 2847,
      suffix: '',
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-600',
      trend: '+8%',
      description: 'Usuários online agora'
    },
    {
      icon: Clock,
      label: 'Tempo Médio',
      value: 3.2,
      suffix: 's',
      color: 'text-purple-600',
      gradient: 'from-purple-500 to-violet-600',
      description: 'Velocidade de conversão'
    },
    {
      icon: TrendingUp,
      label: 'Taxa de Sucesso',
      value: 99.8,
      suffix: '%',
      color: 'text-orange-600',
      gradient: 'from-orange-500 to-red-600',
      description: 'Conversões bem-sucedidas'
    }
  ]);

  const [isUpdating, setIsUpdating] = useState(false);

  // Simula atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      
      setTimeout(() => {
        setStats(prevStats => 
          prevStats.map(stat => ({
            ...stat,
            value: stat.label === 'Conversões Realizadas' 
              ? stat.value + Math.floor(Math.random() * 5) + 1
              : stat.label === 'Usuários Ativos'
              ? Math.max(2800, stat.value + Math.floor(Math.random() * 10) - 5)
              : stat.label === 'Tempo Médio'
              ? Math.max(2.8, Math.min(4.2, stat.value + (Math.random() - 0.5) * 0.2))
              : stat.value
          }))
        );
        setIsUpdating(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const additionalStats = [
    { icon: Globe, value: '50+', label: 'Países Atendidos' },
    { icon: Zap, value: '24/7', label: 'Disponibilidade' },
    { icon: Activity, value: '99.9%', label: 'Uptime' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Activity className="h-4 w-4" />
            <span>Estatísticas em Tempo Real</span>
            {isUpdating && <LoadingPulse />}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Números que
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Impressionam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como nossa plataforma está transformando a experiência de conversão de documentos ao redor do mundo
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative text-center">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Value */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-4xl font-bold text-gray-900 group-hover:text-gray-800">
                          {stat.value.toLocaleString()}
                        </span>
                        <span className="text-2xl font-semibold text-gray-600">
                          {stat.suffix}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900">
                        {stat.label}
                      </h3>
                      
                      <p className="text-sm text-gray-600">
                        {stat.description}
                      </p>
                    </div>
                    
                    {/* Trend Badge */}
                    {stat.trend && (
                      <Badge variant="success" size="sm" className="text-xs">
                        {stat.trend} este mês
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {additionalStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Real-time Indicator */}
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm text-green-700 font-medium">
              Atualizando em tempo real
            </span>
            <CountBadge count={stats[0].value} variant="success" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection;