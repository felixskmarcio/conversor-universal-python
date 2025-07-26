'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Upload,
  FileText,
  Download,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  FileType,
  FileImage,
  FileCode,
  File,
  ArrowRight,
  Star
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StatsSection from '@/components/StatsSection'
import FeaturesSection from '@/components/FeaturesSection'
import { useToastContext } from '@/components/ToastProvider'
import { ParallaxSection, ScrollReveal, FloatingElement } from '@/components/ParallaxSection'
import { ScrollProgress, ScrollToTop, ParallaxBackground } from '@/components/ScrollProgress'

type FileFormat = 'pdf' | 'docx' | 'txt' | 'html' | 'md'

interface ConversionResult {
  success: boolean
  message: string
  downloadUrl?: string
  filename?: string
}

const formatIcons = {
  pdf: FileText,
  docx: FileText,
  txt: FileType,
  html: FileCode,
  md: FileImage
}

const formatColors = {
  pdf: 'bg-red-100 text-red-800',
  docx: 'bg-blue-100 text-blue-800',
  txt: 'bg-gray-100 text-gray-800',
  html: 'bg-orange-100 text-orange-800',
  md: 'bg-purple-100 text-purple-800'
}

export default function ConversorPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [targetFormat, setTargetFormat] = useState<FileFormat>('pdf')
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<ConversionResult | null>(null)
  
  const { toast } = useToastContext()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0])
      setResult(null)
      
      // Auto-select target format based on source
      const extension = acceptedFiles[0].name.split('.').pop()?.toLowerCase()
      const formatMap: Record<string, FileFormat> = {
        'pdf': 'docx',
        'docx': 'pdf',
        'doc': 'pdf',
        'txt': 'pdf',
        'html': 'pdf',
        'htm': 'pdf',
        'md': 'html',
        'markdown': 'html'
      }
      
      if (extension && formatMap[extension]) {
        setTargetFormat(formatMap[extension])
      }
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc'],
      'text/plain': ['.txt'],
      'text/html': ['.html', '.htm'],
      'text/markdown': ['.md', '.markdown']
    },
    multiple: false,
    maxSize: 16 * 1024 * 1024 // 16MB
  })

  const handleConvert = async () => {
    if (!selectedFile) {
      toast.warning('Por favor, selecione um arquivo para converter.')
      return
    }

    setIsConverting(true)
    setProgress(0)
    setResult(null)
    
    toast.info('Iniciando conversão...', 'Processando')

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      const formData = new FormData()
      formData.append('arquivo', selectedFile)
      formData.append('formato_destino', targetFormat)

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/converter`, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      clearInterval(progressInterval)
      setProgress(100)

      if (data.sucesso) {
        setResult({
          success: true,
          message: 'Conversão realizada com sucesso!',
          downloadUrl: `data:application/octet-stream;base64,${data.arquivo}`,
          filename: data.nome_arquivo
        })
        toast.success('Documento convertido com sucesso! Clique no botão para baixar.', 'Conversão Concluída')
      } else {
        const errorMessage = data.erro || 'Erro na conversão.'
        setResult({
          success: false,
          message: errorMessage
        })
        toast.error(errorMessage, 'Erro na Conversão')
      }
    } catch (error) {
      const errorMessage = 'Erro de conexão. Verifique se o servidor Python está rodando.'
      setResult({
        success: false,
        message: errorMessage
      })
      toast.error(errorMessage, 'Erro de Conexão')
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownload = () => {
    if (!result?.downloadUrl || !result?.filename) return

    const link = document.createElement('a')
    link.href = result.downloadUrl
    link.download = result.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    toast.success('Download iniciado!', 'Arquivo Baixado')
  }

  const getFileIcon = (filename: string) => {
    const extension = filename.split('.').pop()?.toLowerCase()
    const IconComponent = formatIcons[extension as FileFormat] || File
    return <IconComponent className="h-4 w-4" />
  }

  const getFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(2)} MB`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <ScrollProgress showPercentage={false} />
      <ScrollToTop />
      <Header />
      
      <main>
        {/* Hero Section com Parallax - Responsivo */}
        <ParallaxSection speed={0.5} className="py-12 sm:py-16 lg:py-20 px-4 relative overflow-hidden">
          {/* Elementos flutuantes de fundo - Ocultos em mobile */}
          <FloatingElement 
            className="hidden sm:block absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-200/30 rounded-full blur-xl"
            amplitude={15}
            frequency={4000}
          />
          <FloatingElement 
            className="hidden md:block absolute top-40 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-purple-200/20 rounded-full blur-xl"
            amplitude={20}
            frequency={3000}
            delay={1000}
          />
          <FloatingElement 
            className="hidden lg:block absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-200/25 rounded-full blur-xl"
            amplitude={12}
            frequency={3500}
            delay={2000}
          />
          
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="mx-auto max-w-4xl text-center space-y-6 sm:space-y-8 relative z-10">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4">
                  Converta Documentos com
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block sm:inline"> Excelência</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Transforme seus documentos entre PDF, DOCX, TXT, HTML e Markdown 
                  com nossa tecnologia avançada de conversão. Rápido, seguro e profissional.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        {/* Converter Section com Parallax - Responsivo */}
        <ParallaxSection speed={0.3} className="py-8 sm:py-12 lg:py-16 px-4">
          <ScrollReveal animation="scale-in" delay={200}>
            <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover-lift">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                    <Upload className="h-5 w-5" />
                    <span>Upload e Conversão</span>
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Arraste e solte seu arquivo ou clique para selecionar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Upload Area - Responsivo */}
                  <div
                    {...getRootProps()}
                    className={`
                      border-2 border-dashed rounded-lg p-6 sm:p-8 text-center cursor-pointer transition-all
                      ${isDragActive 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
                      }
                    `}
                  >
                    <input {...getInputProps()} />
                    <div className="space-y-3 sm:space-y-4">
                      <Upload className={`h-10 w-10 sm:h-12 sm:w-12 mx-auto ${
                        isDragActive ? 'text-indigo-500' : 'text-gray-400'
                      }`} />
                      <div>
                        <p className="text-base sm:text-lg font-medium text-gray-900">
                          {isDragActive ? 'Solte o arquivo aqui' : 'Arraste e solte seu arquivo'}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          ou clique para selecionar (máx. 16MB)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Selected File Info - Responsivo */}
                  {selectedFile && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center space-x-3 min-w-0 flex-1">
                            {getFileIcon(selectedFile.name)}
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                                {selectedFile.name}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-500">
                                {getFileSize(selectedFile.size)}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedFile(null)}
                            className="flex-shrink-0"
                          >
                            Remover
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Format Selection - Responsivo */}
                  <div className="space-y-3">
                    <Label className="text-sm sm:text-base font-medium">Converter para:</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                      {(['pdf', 'docx', 'txt', 'html', 'md'] as FileFormat[]).map((format) => {
                        const IconComponent = formatIcons[format]
                        return (
                          <button
                            key={format}
                            onClick={() => setTargetFormat(format)}
                            className={`
                              p-3 sm:p-4 rounded-lg border-2 transition-all text-center space-y-1 sm:space-y-2
                              ${targetFormat === format
                                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                : 'border-gray-200 hover:border-gray-300 text-gray-600'
                              }
                            `}
                          >
                            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 mx-auto" />
                            <p className="text-xs sm:text-sm font-medium uppercase">{format}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Convert Button - Responsivo */}
                  <Button
                    onClick={handleConvert}
                    disabled={!selectedFile || isConverting}
                    className="w-full h-11 sm:h-12 text-base sm:text-lg"
                    size="lg"
                  >
                    {isConverting ? (
                      <>
                        <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-spin" />
                        Convertendo...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Converter Documento
                      </>
                    )}
                  </Button>

                  {/* Progress - Responsivo */}
                  {isConverting && (
                    <div className="space-y-2">
                      <Progress value={progress} className="h-2" />
                      <p className="text-xs sm:text-sm text-center text-gray-600">
                        Processando seu documento... {progress}%
                      </p>
                    </div>
                  )}

                  {/* Result - Responsivo */}
                  {result && (
                    <Alert className={result.success ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                      <div className="flex items-start space-x-2">
                        {result.success ? (
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1 min-w-0">
                          <AlertDescription className={`text-sm sm:text-base ${
                            result.success ? 'text-green-800' : 'text-red-800'
                          }`}>
                            {result.message}
                          </AlertDescription>
                          {result.success && result.downloadUrl && (
                            <Button
                              onClick={handleDownload}
                              className="mt-3 bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                              size="sm"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Baixar Arquivo Convertido
                            </Button>
                          )}
                        </div>
                      </div>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              {/* Supported Formats - Responsivo */}
              <ScrollReveal animation="slide-in-from-bottom-4" delay={400}>
                <Card className="bg-white/60 backdrop-blur-sm hover-lift">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-center text-lg sm:text-xl">Formatos Suportados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-2">
                      {(['PDF', 'DOCX', 'TXT', 'HTML', 'Markdown'] as const).map((format, index) => (
                        <ScrollReveal key={format} animation="scale-in" delay={500 + index * 100}>
                          <Badge
                            variant="secondary"
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm"
                          >
                            {format}
                          </Badge>
                        </ScrollReveal>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </ParallaxSection>
        
        {/* Stats Section com Parallax Background - Responsivo */}
        <ParallaxBackground 
          gradient="from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20"
          speed={0.2}
          className="py-12 sm:py-16 my-8 sm:my-16"
        >
          <ScrollReveal animation="fade-in" delay={100}>
            <StatsSection />
          </ScrollReveal>
        </ParallaxBackground>
        
        {/* Features Section com Parallax - Responsivo */}
        <ParallaxSection speed={0.4} className="py-12 sm:py-16">
          <ScrollReveal animation="slide-in-from-bottom-8" delay={200}>
            <FeaturesSection />
          </ScrollReveal>
        </ParallaxSection>
      </main>
      
      <Footer />
    </div>
  )
}
