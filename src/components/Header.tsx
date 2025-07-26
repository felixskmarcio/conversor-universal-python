'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/ui/status-badge'
import {
  Menu,
  X,
  FileText,
  Shield,
  Zap,
  Star,
  Users,
  Download,
  Github,
  ExternalLink
} from 'lucide-react'
import { ScrollReveal } from '@/components/ParallaxSection'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative bg-white/95 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo e Título - Responsivo */}
          <ScrollReveal animation="slide-in-from-left-4" delay={100}>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  DocConverter
                </h1>
                <p className="hidden sm:block text-xs text-gray-500">
                  Conversão Profissional
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation Desktop - Oculto em mobile */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <ScrollReveal animation="fade-in" delay={200}>
              <div className="flex items-center space-x-4 xl:space-x-6">
                <a href="#converter" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Converter
                </a>
                <a href="#features" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Recursos
                </a>
                <a href="#stats" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Estatísticas
                </a>
                <a href="#about" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Sobre
                </a>
              </div>
            </ScrollReveal>
          </nav>

          {/* Status Badges Desktop - Oculto em mobile */}
          <div className="hidden xl:flex items-center space-x-3">
            <ScrollReveal animation="scale-in" delay={300}>
              <StatusBadge 
                status="online" 
                text="Sistema Online" 
                className="text-xs"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-in" delay={400}>
              <Badge variant="secondary" className="text-xs px-2 py-1">
                <Shield className="h-3 w-3 mr-1" />
                Seguro
              </Badge>
            </ScrollReveal>
          </div>

          {/* CTA Buttons Desktop - Responsivo */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <ScrollReveal animation="slide-in-from-right-4" delay={300}>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-sm px-3 py-2"
              >
                <Github className="h-4 w-4 mr-2" />
                <span className="hidden lg:inline">GitHub</span>
              </Button>
            </ScrollReveal>
            <ScrollReveal animation="slide-in-from-right-4" delay={400}>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-sm px-3 lg:px-4 py-2"
              >
                <Zap className="h-4 w-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Começar</span>
                <span className="lg:hidden">Start</span>
              </Button>
            </ScrollReveal>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Responsivo */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              {/* Navigation Links Mobile */}
              <nav className="space-y-3">
                <a 
                  href="#converter" 
                  className="block text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Converter Documentos
                </a>
                <a 
                  href="#features" 
                  className="block text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recursos e Funcionalidades
                </a>
                <a 
                  href="#stats" 
                  className="block text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Estatísticas em Tempo Real
                </a>
                <a 
                  href="#about" 
                  className="block text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre o Projeto
                </a>
              </nav>

              {/* Status Badges Mobile */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/50">
                <StatusBadge 
                  status="online" 
                  text="Sistema Online" 
                  className="text-xs"
                />
                <Badge variant="secondary" className="text-xs px-2 py-1">
                  <Shield className="h-3 w-3 mr-1" />
                  Seguro
                </Badge>
                <Badge variant="outline" className="text-xs px-2 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Gratuito
                </Badge>
              </div>

              {/* CTA Buttons Mobile */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  variant="outline" 
                  className="w-full sm:flex-1 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Ver no GitHub
                </Button>
                <Button 
                  className="w-full sm:flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Começar Agora
                </Button>
              </div>

              {/* Quick Stats Mobile */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200/50">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-indigo-600">1000+</div>
                  <div className="text-xs text-gray-600">Conversões</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle gradient border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
    </header>
  )
}