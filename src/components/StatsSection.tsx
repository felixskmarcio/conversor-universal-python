'use client'

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, CheckCircle, Activity, Globe, Zap } from 'lucide-react';
import { Badge, CountBadge } from '@/components/ui/badge';
import { LoadingPulse } from '@/components/ui/loading';

// Types
interface Stat {
  icon: React.ComponentType<any>;
  label: string;
  value: number;
  suffix: string;
  gradient: string;
  trend?: string;
  description: string;
}

interface AdditionalStat {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
}

// Constants
const INITIAL_STATS: Stat[] = [
  {
    icon: CheckCircle,
    label: 'Conversões Realizadas',
    value: 15420,
    suffix: '+',
    gradient: 'from-green-500 to-emerald-600',
    trend: '+12%',
    description: 'Documentos convertidos com sucesso'
  },
  {
    icon: Users,
    label: 'Usuários Ativos',
    value: 2847,
    suffix: '',
    gradient: 'from-blue-500 to-cyan-600',
    trend: '+8%',
    description: 'Usuários online agora'
  },
  {
    icon: Clock,
    label: 'Tempo Médio',
    value: 3.2,
    suffix: 's',
    gradient: 'from-purple-500 to-violet-600',
    description: 'Velocidade de conversão'
  },
  {
    icon: TrendingUp,
    label: 'Taxa de Sucesso',
    value: 99.8,
    suffix: '%',
    gradient: 'from-orange-500 to-red-600',
    description: 'Conversões bem-sucedidas'
  }
];

const ADDITIONAL_STATS: AdditionalStat[] = [
  { icon: Globe, value: '50+', label: 'Países Atendidos' },
  { icon: Zap, value: '24/7', label: 'Disponibilidade' },
  { icon: Activity, value: '99.9%', label: 'Uptime' }
];

// Components
interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const IconComponent = stat.icon;
  
  return (
    <div className="group h-full">
      <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 h-full flex flex-col">
        {/* Background Gradient on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`} />
        
        <div className="relative text-center flex flex-col h-full">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg mb-4 lg:mb-6 group-hover:scale-105 transition-transform duration-300`}>
            <IconComponent className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
          </div>
          
          {/* Value */}
          <div className="space-y-2 mb-4 flex-grow flex flex-col justify-center">
            <div className="flex items-baseline justify-center space-x-1">
              <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                {stat.value.toLocaleString()}
              </span>
              {stat.suffix && (
                <span className="text-xl lg:text-2xl font-semibold text-gray-600">
                  {stat.suffix}
                </span>
              )}
            </div>
            
            <h3 className="text-base lg:text-lg font-bold text-gray-900">
              {stat.label}
            </h3>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              {stat.description}
            </p>
          </div>
          
          {/* Trend Badge */}
          <div className="mt-auto">
            {stat.trend ? (
              <Badge variant="success" size="sm">
                {stat.trend} este mês
              </Badge>
            ) : (
              <div className="h-6"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AdditionalStatCardProps {
  stat: AdditionalStat;
  index: number;
}

const AdditionalStatCard: React.FC<AdditionalStatCardProps> = ({ stat, index }) => {
  const IconComponent = stat.icon;
  
  return (
    <div className="text-center p-4 lg:p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
      <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 mb-3 lg:mb-4">
        <IconComponent className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
      </div>
      <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
      <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
    </div>
  );
};

interface SectionHeaderProps {
  isUpdating: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ isUpdating }) => (
  <div className="text-center mb-12 lg:mb-16">
    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
      <Activity className="h-4 w-4" />
      <span>Estatísticas em Tempo Real</span>
      {isUpdating && <LoadingPulse />}
    </div>
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
      Números que
      <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Impressionam</span>
    </h2>
    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Veja como nossa plataforma está transformando a experiência de conversão de documentos ao redor do mundo
    </p>
  </div>
);

interface RealTimeIndicatorProps {
  stats: Stat[];
}

const RealTimeIndicator: React.FC<RealTimeIndicatorProps> = ({ stats }) => (
  <div className="flex items-center justify-center">
    <div className="flex items-center space-x-3 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200/50">
      <div className="relative">
        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
      </div>
      <span className="text-xs lg:text-sm text-green-700 font-medium">
        Atualizando em tempo real
      </span>
      <CountBadge count={Math.floor(stats[0].value / 1000)} variant="success" />
    </div>
  </div>
);

// Custom Hook
const useRealTimeStats = () => {
  const [stats, setStats] = useState<Stat[]>(INITIAL_STATS);
  const [isUpdating, setIsUpdating] = useState(false);

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

  return { stats, isUpdating };
};

function StatsSection() {
  const { stats, isUpdating } = useRealTimeStats();

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <SectionHeader isUpdating={isUpdating} />

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {ADDITIONAL_STATS.map((stat, index) => (
            <AdditionalStatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Real-time Indicator */}
        <RealTimeIndicator stats={stats} />
      </div>
    </section>
  )
}

export default StatsSection;